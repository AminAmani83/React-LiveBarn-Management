import * as types from "./actionTypes";
import * as surfacesApi from "../../api/api";
import { apiCallBegin, apiCallError } from "./apiStatusActions";
import { updateFilteredSurfaces } from "./filteredSurfaceActions";
import { updateSelectedSurface } from "./selectionActions";

const POLLING_DELAY = 60000;

export const loadAllSurfaceServers = () => {
  return async (dispatch, getState) => {
    dispatch(apiCallBegin());
    try {
      const pollApi = async () => {
        console.log("API CALL");
        // Fetch Data
        const allSurfacesAndServers = await surfacesApi.getSurfaces();
        // Update Store
        dispatch({
          type: types.LOAD_SURFACE_SERVERS_SUCCESS,
          allSurfacesAndServers,
        });
        dispatch(updateFilteredSurfaces(getState().userInput.searchTerm));
        updateUserInput(dispatch, getState);
        // repeat
        setTimeout(pollApi, POLLING_DELAY);
      };
      pollApi();
    } catch (error) {
      dispatch(apiCallError(error.message));
      throw error;
    }
  };
};

/**
 * Helper Function
 * In case the previously selected surface is either
 * removed or updated in the most recent API call
 * @param {Function} dispatch
 * @param {Function} getState
 */
const updateUserInput = (dispatch, getState) => {
  const { userInput, allSurfacesAndServers } = getState();
  const selectedSurface = allSurfacesAndServers.find(
    (s) => s.id === userInput.selectedSurfaceId
  );
  if (!selectedSurface) {
    // previously selected surface was removed from API results
    dispatch(updateSelectedSurface("")); // deselect any surfaces & servers
  } else if (selectedSurface.server.id !== userInput.selectedServerId) {
    // previously selected surface has moved to a new server
    dispatch(updateSelectedSurface(selectedSurface.id)); // update selected surface and therefore, server
  }
};
