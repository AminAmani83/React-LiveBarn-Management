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

  // API
  const [surfaceData, setSurfaceData] = useState([]); // Pure API Results
  const [isLoading, setIsLoading] = useState(true);
  const [apiError, setApiError] = useState(null);
  // Search
  const [searchText, setSearchText] = useState(""); // Value entered in SearchBar
  const [filteredSurfaceData, setFilteredSurfaceData] = useState([]); // Search Results
  const [filteredServerData, setFilteredServerData] = useState([]); // Search Results
  // Selection (Surfaces Tables)
  const [selectedSurface, setSelectedSurface] = useState(emptySurface); // Whole Surface Object (incl. server Id)
  // Row Extraction (Servers Table)
  const [extractedServerId, setExtractedServerId] = useState(""); // Only the Server Id
  const [extractedSurfaceData, setExtractedSurfaceData] = useState([]); // Whole Surface Objects

  useEffect(() => {
    // Fetch Data From API
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
          console.log("Error", response.status, response.statusText);
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

  useEffect(() => {
    // update extracted surface data
    setExtractedSurfaceData(
      filteredSurfaceData.filter((s) => s.server.id === extractedServerId)
    );
  }, [filteredSurfaceData, extractedServerId]); // when search term changes or a server is selected

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

  const selectSurface = (id_str) => {
    setSelectedSurface(
      surfaceData.find((surface) => surface.id.toString() === id_str)
    );
  };

  const selectServer = (id_str) => {
    if (extractedServerId.toString() === id_str) {
      // server de-selected
      setExtractedServerId("");
    } else {
      // server selected
      setExtractedServerId(parseInt(id_str));
    }
  };

  return {
    isLoading,
    apiError,
    searchText,
    filteredSurfaceData,
    filteredServerData,
    selectedSurface,
    extractedServerId,
    extractedSurfaceData,
    searchVenue,
    selectServer,
    selectSurface,
  };
};

export default UseDataManagement;
