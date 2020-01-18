import { UPDATE_APP } from './types';

/*
  Updates the app state (EXAMPLE)
*/
export const updateApp = app => {
  return { type: UPDATE_APP, payload: app };
};

/*
  Async action (thunk) that updates app state (EXAMPLE)
*/
export const someAsyncAction = () => {
  return async dispatch => {
    dispatch(updateApp({ name: 'Owen' }));
  };
};
