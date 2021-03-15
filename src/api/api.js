const API_URL =
  "https://2hsjstzo71.execute-api.us-east-1.amazonaws.com/prod/livebarn-interview-project";

export const getSurfaces = async () => {
  //   console.log("API Call: Get Surfaces");
  try {
    const response = await fetch(API_URL);
    return handleResponse(response);
  } catch (error) {
    handleError(error);
  }
};

const handleResponse = async (response) => {
  if (response.ok) {
    const allSurfacesAndServers = await response.json();
    return allSurfacesAndServers;
  } else {
    // in case of 403, 404 or...
    console.error("Error", response.status, response.statusText);
    throw new Error("Error fetching data...");
  }
};

const handleError = (error) => {
  console.error("API call failed. " + error);
  throw error;
};
