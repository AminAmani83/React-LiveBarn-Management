import React from "react";
import ServerExtractedRow from "./ServerExtractedRow";
import ServerRow from "./ServerRow";

const ServersTab = ({
  extractedSurfaceData,
  selectedSurfaceId,
  handleSurfaceSelection,
  serverData,
  extractedServerId,
  selectedServerId,
  handleServerSelection,
}) => (
  <div className="mt-4">
    <table className="table table-hover">
      <thead className="table-secondary">
        <tr>
          <th scope="col">IP4</th>
          <th scope="col">DNS</th>
        </tr>
      </thead>
      <tbody>
        {serverData.map((row) => (
          <React.Fragment key={row.id}>
            <ServerRow
              row={row}
              isActive={selectedServerId === row.id}
              handleServerSelect={handleServerSelection}
            />
            <ServerExtractedRow
              isDisplayed={extractedServerId === row.id}
              extractedSurfaceData={extractedSurfaceData}
              selectedSurfaceId={selectedSurfaceId}
              handleSurfaceSelection={handleSurfaceSelection}
            />
          </React.Fragment>
        ))}
      </tbody>
    </table>
  </div>
);

export default ServersTab;
