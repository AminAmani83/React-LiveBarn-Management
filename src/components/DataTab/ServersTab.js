import React, { useEffect, useState } from "react";
import ServerExtractedRow from "./ServerExtractedRow";
import ServerRow from "./ServerRow";

// TODO: surfaceData is passed down ONLY to be used by extractedServerRow
const ServersTab = ({ surfaceData, serverData, selectedServerId }) => {
  const [extractedServerId, setExtractedServerId] = useState(""); // Only the Server Id
  const [extractedSurfaceData, setExtractedSurfaceData] = useState([]);

  const handleSelect = (e) => {
    console.log(e.currentTarget.id);
    if (extractedServerId.toString() === e.currentTarget.id) {
      // server de-selected
      setExtractedServerId("");
      return;
    }
    // server selected
    setExtractedServerId(
      serverData.find((server) => server.id.toString() === e.currentTarget.id)
        .id
    );
  };

  useEffect(() => {
    // update extracted surface data
    setExtractedSurfaceData(
      surfaceData.filter((s) => s.server.id === extractedServerId)
    );
  }, [surfaceData, extractedServerId]); // when search term changes or a server is selected

  return (
    <div className="mt-4">
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">IP4</th>
            <th scope="col">DNS</th>
          </tr>
        </thead>
        <tbody>
          {serverData.map((row) => (
            <>
              <ServerRow
                row={row}
                isActive={selectedServerId === row.id}
                handleSelect={handleSelect}
              />
              {extractedServerId === row.id ? ( // server row should be extracted
                <ServerExtractedRow
                  extractedSurfaceData={extractedSurfaceData}
                />
              ) : (
                ""
              )}
            </>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ServersTab;
