import React, { Fragment, useState } from 'react';
import { Link } from '@reach/router';
import { useSelector } from 'react-redux';
import { useFirebase, isLoaded, isEmpty } from 'react-redux-firebase';
import { ternaryRender } from '../../lib';

const Login = () => {
  /* Redux Firebase */
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
      {ternaryRender(
        !isLoaded(auth),
        <Fragment>
          {/* logged in */}
          <span>Loading...</span>
        </Fragment>,
        ternaryRender(
          isEmpty(auth),
          <div>
            {/* logged out*/}
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
          </div>,
          <Fragment>
            {/* logged in */}
            <Link to="records">Go to your records page</Link>
            <button
              onClick={() => {
                firebase.logout();
              }}
            >
              SIGN OUT
            </button>
          </Fragment>
        )
      )}
    </div>
  );
};

export default Login;
