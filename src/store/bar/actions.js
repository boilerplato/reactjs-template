import { SAVE_BAR, DELETE_BAR } from './types';

export function saveBar(payload) {
  return {
    type: SAVE_BAR,
    payload
  };
}


export function deleteBar(payload) {
  return {
    type: DELETE_BAR,
    payload
  };
}
