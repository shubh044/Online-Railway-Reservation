import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { TicketCard } from  "./TicketCard";
import service from "../../services/bookingService";

export const PnrInfo = (props) => {
  const location = useLocation();
  const data = location.state;
  const [isData, setIsData] = useState({});
  const [isDataLoading, setDataLoading] = useState(false);
  const [error, setError] = useState(null); // Track errors

  const getData = () => {
    service
      .getPnr(data.inputMessage)
      .then((res) => {
        if (res.status === 200) {
          setIsData(res.data);
          setDataLoading(true);
        } else {
          setError("PNR not found or an error occurred.");
        }
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div style={{backgroundColor: "#ff7878"}}>
      {error ? (
        <div>{error}</div>
      ) : isDataLoading ? (
        Object.keys(isData).length === 0 ? (
          <div style={{padding: "20px"}}>
            <h2>
              Sorry, No booking found on this PNR number.
            </h2> 
          </div>
        ) : (
          <TicketCard ticketData={isData} />
        )
      ) : (
        <h1>loading....</h1>
      )}
    </div>
  );
};
