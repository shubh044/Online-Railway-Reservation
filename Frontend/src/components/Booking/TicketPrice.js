import React from "react";
import { connect } from "react-redux";

export const TicketPrice = (props) => {
  return (
    <div>
      <div className="ui segments">
        <div className="ui tertiary  segment">
          <h2>Fare Summary</h2>
        </div>
        <div className="ui left aligned segment">
          <h4>Ticket Fare : {props.priceData}</h4>
        </div>

        <div className="ui left aligned inverted blue segment">
          <h3>Total Fare : {props.priceData}</h3>
        </div>
      </div>
    </div>
  );
};
