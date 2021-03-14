import * as types from "./actionTypes";

export const updateSelectedSurface = (selectedSurfaceId) => {
  return (dispatch, getState) => {
    const { filteredSurfaces } = getState();
    const selectedServerId = getSelectedServerId(
      filteredSurfaces,
      selectedSurfaceId
    );
    return dispatch({
      type: types.UPDATE_SELECTED_SURFACE,
      data: { selectedServerId, selectedSurfaceId },
    });
  };
};

export const updateExtractedServer = (extractedServerId) => {
  return (dispatch) => {
    return dispatch({ type: types.UPDATE_EXTRACTED_SERVER, extractedServerId });
  };
};

const getSelectedServerId = (filteredSurfaces, selectedSurfaceId) => {
  return filteredSurfaces.find((surface) => surface.id === selectedSurfaceId)
    .server.id;
};
