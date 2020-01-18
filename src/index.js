import React from 'react';
import { Router } from '@reach/router';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import { store, rrfProps } from './redux/store';
import Home from './pages/Home/Index';
import Dashboard from './pages/Dashboard/Index';

function App() {
  return (
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <Router>
          <Home path="/" />
          <Dashboard path="/dashboard" />
        </Router>
      </ReactReduxFirebaseProvider>
    </Provider>
  );
}

render(<App />, document.getElementById('root'));
