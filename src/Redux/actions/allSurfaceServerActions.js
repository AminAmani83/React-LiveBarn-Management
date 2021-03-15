import * as types from "./actionTypes";
import * as surfacesApi from "../../api/api";
import { apiCallBegin, apiCallError } from "./apiStatusActions";
import { updateFilteredSurfaces } from "./filteredSurfaceActions";

export const loadAllSurfaceServers = () => {
  return async (dispatch) => {
    dispatch(apiCallBegin());
    try {
      const allSurfacesAndServers = await surfacesApi.getSurfaces();
      dispatch({
        type: types.LOAD_SURFACE_SERVERS_SUCCESS,
        allSurfacesAndServers,
      });
      dispatch(updateFilteredSurfaces("")); // copy the results over to filteredSurfaces
    } catch (error) {
      dispatch(apiCallError(error.message));
      throw error;
    }
  };
};
