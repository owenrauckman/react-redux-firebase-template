import React, { useState } from 'react';
import { Link } from '@reach/router';
import { useSelector } from 'react-redux';
import { useFirebase, isLoaded, isEmpty } from 'react-redux-firebase';

const Home = () => {
  /* Redux Firebas */
  const firebase = useFirebase();
  const auth = useSelector(state => state.firebase.auth);

  /* Hooks */
  const [email, updateEmail] = useState('');
  const [password, updatePassword] = useState('');

  /* Local Constants */
  const signIn = () => {
    firebase.login({
      email: email,
      password: password
    });
  };

  const signUp = () => {
    firebase.createUser({ email, password });
  };

  return (
    <div>
      {/* LOADING STATE FOR LOGIN */}
      {!isLoaded(auth) ? (
        <span>Loading...</span>
      ) : isEmpty(auth) ? (
        <div>
          <input placeholder="email" onChange={e => updateEmail(e.target.value)} type="text" />
          <input placeholder="password" onChange={e => updatePassword(e.target.value)} type="text" />
          <button
            onClick={() => {
              signIn();
            }}
          >
            SIGN IN
          </button>
          <button
            onClick={() => {
              signUp();
            }}
          >
            sign up
          </button>
        </div>
      ) : (
        <button
          onClick={() => {
            firebase.logout();
          }}
        >
          SIGN OUT
        </button>
      )}

      {/* ENTRY LINK */}
      <Link to="records">Go to your records page</Link>
    </div>
  );
};

export default Home;
