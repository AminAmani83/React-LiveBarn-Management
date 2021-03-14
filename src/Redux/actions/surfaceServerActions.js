import * as types from "./actionTypes";
import * as surfacesApi from "../../api/api";
import { apiCallBegin, apiCallError } from "./apiStatusActions";

export const loadSurfaceServers = () => {
  return async (dispatch) => {
    dispatch(apiCallBegin());
    try {
      const surfaceServers = await surfacesApi.getSurfaces();
      console.log(surfaceServers);
      dispatch({ type: types.LOAD_SURFACE_SERVERS_SUCCESS, surfaceServers });
    } catch (error) {
      dispatch(apiCallError(error.message));
      throw error;
    }
  };
};
