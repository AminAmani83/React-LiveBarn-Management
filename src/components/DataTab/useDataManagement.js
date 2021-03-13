import { useEffect, useState } from "react";

const UseDataManagement = (props) => {
  const apiURL =
    "https://2hsjstzo71.execute-api.us-east-1.amazonaws.com/prod/livebarn-interview-project";
  const emptySurface = {
    // sample API response item used for the selected surface initially
    id: "",
    surfaceName: "",
    status: "",
    venueName: "",
    sport: "",
    server: {
      id: "",
      ip4: "",
      dns: "",
    },
  };

  const [surfaceData, setSurfaceData] = useState([]); // API Results
  const [isLoading, setIsLoading] = useState(true);
  const [apiError, setApiError] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [filteredSurfaceData, setFilteredSurfaceData] = useState([]);
  const [filteredServerData, setFilteredServerData] = useState([]);
  const [selectedSurface, setSelectedSurface] = useState(emptySurface);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiURL);
        if (response.ok) {
          const surfaces = await response.json();
          setSurfaceData(surfaces);
          setFilteredSurfaceData(surfaces);
          setIsLoading(false);
        } else {
          // in case of 403, 404 or...
          throw new Error("Error fetching data...");
        }
      } catch (error) {
        setApiError(error);
        setIsLoading(false);
      }
    };
    fetchData();
  }, []); // runs only once

  useEffect(() => {
    const uniqueServers = getUniqueServers(filteredSurfaceData);
    setFilteredServerData(uniqueServers);
  }, [filteredSurfaceData]); // runs every time filteredSurfaceData is updated

  function getUniqueServers(surfaces) {
    const servers = surfaces.map((result) => result.server);
    const uniqueServers = servers.filter(
      (value, index, self) =>
        self.map((server) => server.id).indexOf(value.id) === index
    );
    return uniqueServers;
  }

  const searchVenue = (searchQuery) => {
    setSearchText(searchQuery);
    setFilteredSurfaceData(findResults(searchQuery));
  };

  const findResults = (searchQuery) => {
    const query = new RegExp(searchQuery, "i"); // i : case insensitive
    const results = surfaceData.filter(
      (item) => query.test(item.venueName)
      // || query.test(item.surfaceName) // uncomment this to also search in surface names
    );
    return results;
  };

  const selectRow = (id) => {
    setSelectedSurface(
      surfaceData.find((surface) => surface.id.toString() === id)
    );
  };

  return {
    isLoading,
    apiError,
    searchText,
    filteredSurfaceData,
    filteredServerData,
    selectedSurface,
    searchVenue,
    selectRow,
  };
};

export default UseDataManagement;
