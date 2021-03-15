import { combineReducers } from "redux";
import allSurfacesAndServers from "./allSurfaceServersReducer";
import filteredSurfaces from "./filteredSurfacesReducer";
import filteredServers from "./filteredServersReducer";
import userInput from "./userInputReducer";
import apiCallInProgress from "./apiStatusReducer";

const rootReducer = combineReducers({
  allSurfacesAndServers,
  filteredSurfaces,
  filteredServers,
  userInput,
  apiCallInProgress,
});

export default rootReducer;
