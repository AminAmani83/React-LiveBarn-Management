import * as types from "../actions/actionTypes";
import initialState from "./initialState";

const userInputReducer = (state = initialState.userInput, action) => {
  switch (action.type) {
    case types.UPDATE_SELECTED_SURFACE:
      return { ...state, ...action.data };
    case types.UPDATE_EXTRACTED_SERVER:
      return { ...state, extractedServerId: action.extractedServerId };
    case types.UPDATE_SEARCH_TERM:
      return { ...state, searchTerm: action.searchTerm };
    default:
      return state;
  }
};

export default userInputReducer;
