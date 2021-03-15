import React from "react";
import { connect } from "react-redux";
import ServerExtractedRow from "./ServerExtractedRow";
import ServerRow from "./ServerRow";
import {
  updateSelectedSurface,
  updateExtractedServer,
} from "../../Redux/actions/selectionActions";

const ServersTab = ({
  extractedSurfaceData,
  selectedSurfaceId,
  handleSurfaceSelection,
  serverData,
  extractedServerId,
  selectedServerId,
  handleServerSelection,
}) => {
  const handleServerSelect = (e) => {
    handleServerSelection(parseInt(e.currentTarget.id));
  };

  return (
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
                handleServerSelect={handleServerSelect}
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
};

const mapStateToProps = (state) => {
  return {
    extractedSurfaceData: state.filteredSurfaces.filter(
      (s) => s.server.id === state.selections.extractedServerId
    ),
    selectedSurfaceId: state.selections.selectedSurfaceId,
    serverData: state.filteredServers,
    extractedServerId: state.selections.extractedServerId,
    selectedServerId: state.selections.selectedServerId,
  };
};

const mapDispatchToProps = {
  handleServerSelection: updateExtractedServer,
  handleSurfaceSelection: updateSelectedSurface,
};

export default connect(mapStateToProps, mapDispatchToProps)(ServersTab);
