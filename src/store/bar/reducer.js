import { SAVE_BAR, DELETE_BAR } from './types';

const initialState = {
  count: 0
};

function handleSaveBar(state, payload) {
  const newState = { ...state };
  return newState;
}

function handleDeleteBar(state, payload) {
  const newState = { ...state };
  return newState;
}

export default function barReducer(state = initialState, action) {
  switch (action.type) {
    case SAVE_BAR:
      return handleSaveBar(state, action);
    case DELETE_BAR:
      return handleDeleteBar(state, action);
    default:
      return state;
  }
}
