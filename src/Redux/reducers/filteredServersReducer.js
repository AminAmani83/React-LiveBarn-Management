import * as types from "../actions/actionTypes";
import initialState from "./initialState";

const filteredServersReducer = (
  state = initialState.filteredServers,
  action
) => {
  switch (action.type) {
    case types.UPDATE_FILTERED_SERVERS:
      return action.filteredServers;
    default:
      return state;
  }
};

export default filteredServersReducer;
