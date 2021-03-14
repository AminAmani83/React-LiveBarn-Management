import * as types from "../actions/actionTypes";
import initialState from "./initialState";

const selectionsReducer = (state = initialState.selections, action) => {
  switch (action.type) {
    case types.UPDATE_SELECTED_SURFACE:
      return { ...state, ...action.data };
    case types.UPDATE_EXTRACTED_SERVER:
      return { ...state, extractedServerId: action.extractedServerId };
    default:
      return state;
  }
};

export default selectionsReducer;
