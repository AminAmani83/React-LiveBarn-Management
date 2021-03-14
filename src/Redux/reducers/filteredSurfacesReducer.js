import * as types from "../actions/actionTypes";
import initialState from "./initialState";

const filteredSurfacesReducer = (
  state = initialState.filteredSurfaces,
  action
) => {
  switch (action.type) {
    case types.UPDATE_FILTERED_SURFACES:
      return action.filteredSurfaces;
    default:
      return state;
  }
};

export default filteredSurfacesReducer;
