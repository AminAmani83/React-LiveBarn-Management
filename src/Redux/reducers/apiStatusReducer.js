import * as types from "../actions/actionTypes";
import initialState from "./initialState";

const apiStatusReducer = (state = initialState.apiCallInProgress, action) => {
  switch (action.type) {
    case types.API_CALL_BEGIN:
      return true;
    case types.API_CALL_ERROR:
    case types.LOAD_SURFACE_SERVERS_SUCCESS:
      return false;
    default:
      return state;
  }
};

export default apiStatusReducer;
