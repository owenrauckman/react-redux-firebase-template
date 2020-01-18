import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';
import { createFirestoreInstance, firestoreReducer } from 'redux-firestore';
import thunk from 'redux-thunk';
import config from '../config/firebase';
import app from './app/reducers';

/* Initialize firebase instance and other services on instance */
const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true
};

firebase.initializeApp(config);
firebase.firestore();

/* Combine firebase reducers with our app reducers */
const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  app
});

// eslint-disable-next-line
const composeEnhancer =
  process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose : compose;

const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)));

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance
};

export { store, rrfProps };
