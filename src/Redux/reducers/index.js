import { combineReducers } from "redux";
import allSurfacesAndServers from "./allSurfaceServersReducer";
import filteredSurfaces from "./filteredSurfacesReducer";
import filteredServers from "./filteredServersReducer";
import selections from "./selectionsReducer";
import apiCallInProgress from "./apiStatusReducer";

const rootReducer = combineReducers({
  allSurfacesAndServers,
  filteredSurfaces,
  filteredServers,
  selections,
  apiCallInProgress,
});

export default rootReducer;
