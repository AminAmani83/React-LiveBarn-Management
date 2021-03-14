import * as types from "../actions/actionTypes";
import initialState from "./initialState";

const surfaceServersReducer = (state = initialState.surfaceServers, action) => {
  switch (action.type) {
    case types.LOAD_SURFACE_SERVERS_SUCCESS:
      return action.surfaceServers;
    default:
      return state;
  }
};

export default surfaceServersReducer;
