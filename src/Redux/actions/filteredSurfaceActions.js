import * as types from "./actionTypes";
import { updateFilteredServers } from "./filteredServerActions";

export const updateFilteredSurfaces = (searchQuery) => {
  return (dispatch, getState) => {
    const { surfaceServers } = getState();
    const filteredSurfaces = findResults(searchQuery, surfaceServers);
    dispatch({ type: types.UPDATE_FILTERED_SURFACES, filteredSurfaces });
    dispatch(updateFilteredServers());
  };
};

const findResults = (searchQuery, surfaceServers) => {
  const query = new RegExp(searchQuery, "i"); // i : case insensitive
  const results = surfaceServers.filter(
    (item) => query.test(item.venueName)
    // || query.test(item.surfaceName) // uncomment this to also search in surface names
  );
  return results;
};
