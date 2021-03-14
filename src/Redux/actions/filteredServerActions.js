import * as types from "./actionTypes";

export const updateFilteredServers = () => {
  return (dispatch, getState) => {
    const { filteredSurfaces } = getState();
    const filteredServers = getUniqueServers(filteredSurfaces);
    return dispatch({ type: types.UPDATE_FILTERED_SERVERS, filteredServers });
  };
};

function getUniqueServers(filteredSurfaces) {
  const servers = filteredSurfaces.map((result) => result.server);
  const uniqueServers = servers.filter(
    (value, index, self) =>
      self.map((server) => server.id).indexOf(value.id) === index
  );
  return uniqueServers;
}
