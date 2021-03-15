import * as types from "./actionTypes";
import { updateFilteredServers } from "./filteredServerActions";

export const updateFilteredSurfaces = (searchQuery) => {
  return (dispatch, getState) => {
    const { allSurfacesAndServers } = getState();
    const filteredSurfaces = findResults(searchQuery, allSurfacesAndServers);
    dispatch({ type: types.UPDATE_FILTERED_SURFACES, filteredSurfaces });
    dispatch(updateFilteredServers());
  };
};

const findResults = (searchQuery, allSurfacesAndServers) => {
  const query = new RegExp(searchQuery, "i"); // i : case insensitive
  const results = allSurfacesAndServers.filter(
    (item) => query.test(item.venueName)
    // || query.test(item.surfaceName) // uncomment this to also search in surface names
  );
  return results;
};
