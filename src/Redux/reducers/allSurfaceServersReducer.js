import * as types from "../actions/actionTypes";
import initialState from "./initialState";

const allSurfaceServersReducer = (
  state = initialState.allSurfacesAndServers,
  action
) => {
  switch (action.type) {
    case types.LOAD_SURFACE_SERVERS_SUCCESS:
      return action.allSurfacesAndServers;
    default:
      return state;
  }
};

export default allSurfaceServersReducer;
