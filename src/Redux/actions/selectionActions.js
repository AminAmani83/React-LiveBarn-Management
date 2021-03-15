import * as types from "./actionTypes";
import { updateFilteredSurfaces } from "../actions/filteredSurfaceActions";

export const updateSelectedSurface = (selectedSurfaceId) => {
  return (dispatch, getState) => {
    const { filteredSurfaces } = getState();
    const selectedServerId = getSelectedServerId(
      filteredSurfaces,
      selectedSurfaceId
    );
    dispatch({
      type: types.UPDATE_SELECTED_SURFACE,
      data: { selectedServerId, selectedSurfaceId },
    });
  };
};

export const updateExtractedServer = (extractedServerId) => {
  return (dispatch, getState) => {
    const { userInput } = getState();
    if (userInput.extractedServerId === extractedServerId) {
      extractedServerId = "";
    }
    dispatch({ type: types.UPDATE_EXTRACTED_SERVER, extractedServerId });
  };
};

export const updateSearchTerm = (searchTerm) => {
  return (dispatch) => {
    dispatch({ type: types.UPDATE_SEARCH_TERM, searchTerm });
    dispatch(updateFilteredSurfaces(searchTerm));
  };
};

/**
 * Helper Function
 * Find the selected server ID based on the selected surface ID
 * @param {Object[]} filteredSurfaces
 * @param {String|Number} selectedSurfaceId
 * @returns
 */
const getSelectedServerId = (filteredSurfaces, selectedSurfaceId) => {
  const selectedSurface = filteredSurfaces.find(
    (surface) => surface.id === selectedSurfaceId
  );
  return selectedSurface ? selectedSurface.server.id : "";
};
