import * as types from "../actions/actionTypes";
import initialState from "./initialState";

const actionNameEndsWithSuccess = (actionType) => {
  return actionType.substring(actionType.length - 8) === "_SUCCESS";
};

const apiStatusReducer = (
  state = initialState.pendingApiCallsCount,
  action
) => {
  if (action.type === types.API_CALL_BEGIN) {
    return state + 1;
  } else if (
    action.type === types.API_CALL_ERROR ||
    actionNameEndsWithSuccess(action.type)
  ) {
    return state - 1;
  }
  return state;
};

export default apiStatusReducer;
