import { SAVE_FOO, DELETE_FOO } from './types';

export function saveFoo(payload) {
  return {
    type: SAVE_FOO,
    payload
  };
}


export function deleteFoo(payload) {
  return {
    type: DELETE_FOO,
    payload
  };
}
