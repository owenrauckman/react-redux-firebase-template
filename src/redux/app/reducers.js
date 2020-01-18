import { UPDATE_APP } from './types';
import { initialState } from './initialState';

const app = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_APP: {
      return { ...state, ...action.payload };
    }
    default: {
      return state;
    }
  }
};

export default app;
