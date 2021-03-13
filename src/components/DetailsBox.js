import React from "react";

const DetailsBox = (props) => (
  <>
    <div className="card border-secondary mb-3">
      <div className="card-header">Details</div>
      <div className="card-body">
        <h5 className="card-title">Venue Name:</h5>
        <p className="card-text pb-3">Arena A</p>
        <h5 className="card-title">Surface Name:</h5>
        <p className="card-text pb-3">Rink #1</p>
        <h5 className="card-title">Sport:</h5>
        <p className="card-text pb-3">Hockey</p>
        <h5 className="card-title">Status:</h5>
        <p className="card-text pb-3">OK</p>
        <h5 className="card-title">Server IP:</h5>
        <p className="card-text pb-3">1.1.1.1</p>
      </div>
    </div>
  </>
);

export default DetailsBox;
