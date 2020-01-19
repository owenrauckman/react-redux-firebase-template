import React from 'react';
import { Router, navigate } from '@reach/router';
import { render } from 'react-dom';
import { Provider, useSelector } from 'react-redux';
import { ReactReduxFirebaseProvider, isLoaded, isEmpty } from 'react-redux-firebase';
import { store, rrfProps } from './redux/store';
import Login from './pages/Login/Index';
import Records from './pages/Records/Index';
import Record from './pages/Record/Index';

// TODO: make this better: https://react-redux-firebase.com/docs/recipes/auth.html
function AuthIsLoaded({ children }) {
  const auth = useSelector(state => state.firebase.auth);
  console.log('myauth', auth);
  if (!isLoaded(auth)) return <div>splash screen...</div>;
  if (isLoaded(auth) && isEmpty(auth)) navigate('/');
  return children;
}

function App() {
  return (
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <Router>
          <Login path="/" />
        </Router>
        <AuthIsLoaded>
          <Router>
            <Records path="/records" />
            <Record path="/records/:id" />
          </Router>
        </AuthIsLoaded>
      </ReactReduxFirebaseProvider>
    </Provider>
  );
}

render(<App />, document.getElementById('root'));
