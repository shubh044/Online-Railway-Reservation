import React from "react";

export const TicketCard = (props) => {
 
  return (
    <div>
      <div class="ui segments">
        <div class="ui segments">
          <div class="ui segment">
            <h4>
              {(props.ticketData.bookingDetails.train_name || "").toUpperCase()}
              ({props.ticketData.bookingDetails.train_no} )
            </h4>
            <h5>Seat Class: {props.ticketData.bookingDetails.clas}</h5>
            <h5>
              Source Station:{" "}
              {props.ticketData.bookingDetails.from_station.toUpperCase()}
              <i class="right arrow icon"></i> Destination Station:
              {props.ticketData.bookingDetails.to_station.toUpperCase()}
            </h5>
          </div>
          <div class="ui secondary segment">
            <h5>
              PNR:
              {props.ticketData.bookingDetails.pnr}
            </h5>

            <table class="ui table">
              <tbody>
                <tr>
                  <td>
                    <h3>Name</h3>
                  </td>
                  <td>
                    <h3>Age</h3>
                  </td>
                  <td>
                    <h3>Seat No.</h3>
                  </td>
                  <td>
                    <h3>Gender</h3>
                  </td>
                </tr>
                {props.ticketData.passengerList.map((details) => (
                  <tr>
                    <td>
                      <h5>{details.name}</h5>
                    </td>
                    <td>
                      <h5>{details.age}</h5>
                    </td>
                    <td>
                      <h5>{details.seatNo}</h5>
                    </td>
                    <td>
                      <h5> {details.gender}</h5>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
