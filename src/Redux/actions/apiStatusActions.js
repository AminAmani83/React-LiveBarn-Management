import * as types from "./actionTypes";

export const apiCallBegin = () => {
  return { type: types.API_CALL_BEGIN };
};

export const apiCallError = (error) => {
  return { type: types.API_CALL_ERROR, error };
};
