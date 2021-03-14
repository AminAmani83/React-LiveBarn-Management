import { combineReducers } from "redux";
import surfaceServers from "./surfaceServersReducer";
import filteredSurfaces from "./filteredSurfacesReducer";
import filteredServers from "./filteredServersReducer";
import selections from "./selectionsReducer";
import pendingApiCallsCount from "./apiStatusReducer";

const rootReducer = combineReducers({
  surfaceServers,
  filteredSurfaces,
  filteredServers,
  selections,
  pendingApiCallsCount,
});

export default rootReducer;
