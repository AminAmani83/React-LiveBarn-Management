import React from "react";
import PropTypes, { object } from "prop-types";
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
  handleServerExtraction,
}) => {
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
                handleServerExtraction={handleServerExtraction}
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

ServersTab.propTypes = {
  extractedSurfaceData: PropTypes.arrayOf(object).isRequired,
  selectedSurfaceId: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  handleSurfaceSelection: PropTypes.func.isRequired,
  serverData: PropTypes.arrayOf(object).isRequired,
  extractedServerId: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  selectedServerId: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  handleServerExtraction: PropTypes.func.isRequired,
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
  handleServerExtraction: updateExtractedServer,
  handleSurfaceSelection: updateSelectedSurface,
};

export default connect(mapStateToProps, mapDispatchToProps)(ServersTab);
