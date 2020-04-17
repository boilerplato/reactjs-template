import { SAVE_FOO, DELETE_FOO } from './types';

const initialState = {
  count: 0
};

function handleSaveFoo(state, payload) {
  const newState = { ...state };
  return newState;
}

function handleDeleteFoo(state, payload) {
  const newState = { ...state };
  return newState;
}

export default function fooReducer(state = initialState, action) {
  switch (action.type) {
    case SAVE_FOO:
      return handleSaveFoo(state, action);
    case DELETE_FOO:
      return handleDeleteFoo(state, action);
    default:
      return state;
  }
}
