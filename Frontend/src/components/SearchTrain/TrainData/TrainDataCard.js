import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const TrainData = (props) => {
  
  const [classData, setClassData] = useState("");
  const [trainNoData, setTrainNoData] = useState(0);
  const [classClickSL, setClassClickSL] = useState(false);
  const [classClickA3, setClassClickA3] = useState(false);
  const [classClickA2, setClassClickA2] = useState(false);
  const [classClickA1, setClassClickA1] = useState(false);
  const [classClick, setClassClick] = useState(true);

  const handleClick = (data, e) => {
    e.preventDefault();
    
    setClassData(data);
    setClassClick(false);
    setTrainNoData(props.trainData.train_id);
  };
  //console.log({ classClickSL, classClickA3, classClickA2, classClickA1 });


  useEffect(() => {
    setClassClickSL(false);
    setClassClickA3(false);
    setClassClickA2(false);
    setClassClickA1(false);

    if (classData === "SL") {
      setClassClickSL(true);
    }

    if (classData === "3A") {
      setClassClickA3(true);
    }

    if (classData === "2A") {
      setClassClickA2(true);
    }

    if (classData ==="1A") {
      setClassClickA1(true);
    }

   
  });

  const trainBookingData = {
    train_class: classData,
    train_no: trainNoData,
  };
  //console.log(trainBookingData);

 
  const addStyleSL = classClickSL
    ? "ui raised blue inverted segment"
    : "ui raised  segment";
  const addStyleA3 = classClickA3
    ? "ui raised blue inverted segment"
    : "ui raised  segment";
  const addStyleA2 = classClickA2
    ? "ui raised blue inverted segment"
    : "ui raised  segment";
  const addStyleA1 = classClickA1
    ? "ui raised blue inverted segment"
    : "ui raised  segment";

    const { user: currentUser } = useSelector((state) => state.auth);

    const {
      total_Seat_sleeper,
      total_Seat_ac3,
      total_Seat_ac2,
      total_Seat_ac1,
      price_sleeper,
      price_ac3,
      price_ac2,
      price_ac1,
    } = props.trainData;
  
    const isSleeperAvailable = total_Seat_sleeper > 0;
    const isAC3Available = total_Seat_ac3 > 0;
    const isAC2Available = total_Seat_ac2 > 0;
    const isAC1Available = total_Seat_ac1 > 0;


  return (
    //    <div>{props.trainData.train_id}</div>
    <div className="ui segment">
      <div className="ui tertiary segment">
        <p className="p1">{props.trainData.train_name.toUpperCase()} |</p>
        <p className="p1">{props.trainData.train_id}</p>
      </div>

      <div className="ui four column stackable grid">
        {isSleeperAvailable && (
          <div
            className="column"
            onClick={(e) => {
              handleClick("SL", e);
            }}
          >
            {/* Render Sleeper class if available */}
            <div className={addStyleSL}>
            <div className="ui ">
              <div className=" header">
                <div className="line">Sleeper (SL)</div>
              </div>
              <div className="paragraph">
                  <h5>Available Seat: {props.trainData.total_Seat_sleeper}</h5>
                  <h6>Price: {props.trainData.price_sleeper}</h6>
              </div>
            </div>
          </div>
            {/* ... Rest of your code ... */}
          </div>
        )}

        {isAC3Available && (
          <div
            className="column"
            onClick={(e) => {
              handleClick("3A", e);
            }}
          >
            {/* Render AC3 class if available */}
            <div className={addStyleA3}>
            <div className="ui ">
              <div className=" header">
                <div className="line">AC 3 Tier (3A)</div>
              </div>
              <div className="paragraph">
                  <h5>Available Seat: {props.trainData.total_Seat_ac3}</h5>
                  <h6>Price: {props.trainData.price_ac3}</h6>
              </div>
            </div>
          </div>
            {/* ... Rest of your code ... */}
          </div>
        )}

        {isAC2Available && (
          <div
            className="column"
            onClick={(e) => {
              handleClick("2A", e);
            }}
          >
            {/* Render AC2 class if available */}
            <div className={addStyleA2}>
            <div className="ui ">
              <div className=" header">
                <div className="line">AC 2 Tier (2A)</div>
              </div>
              <div className="paragraph">
                 <h5>Available Seat: {props.trainData.total_Seat_ac2}</h5>
                 <h6>Price: {props.trainData.price_ac2}</h6>
              </div>
            </div>
          </div>
            {/* ... Rest of your code ... */}
          </div>
        )}

        {isAC1Available && (
          <div
            className="column"
            onClick={(e) => {
              handleClick("1A", e);
            }}
          >
            {/* Render AC1 class if available */}
            <div className={addStyleA1}>
            <div className="ui ">
              <div className=" header">
                <div className="line">AC 1 Tier (1A)</div>
              </div>
              <div className="paragraph">
                  <h5>Available Seat: {props.trainData.total_Seat_ac1}</h5>
                  <h6>Price: {props.trainData.price_ac1}</h6>
              </div>
            </div>
          </div>
            {/* ... Rest of your code ... */}
          </div>
        )}
      </div>

      <div className="ui segment">
        <button
        style={{color: "blue"}}
          className="ui button"
          disabled={classClick}
          // onClick={handleSubmitClick}
        >
         {currentUser ? 
         (<Link to={{ pathname:"/booking", state: {trainBookingData}}}>
            {<a  style={{color: "darkblue"}} className="active item"> Book Now</a>}
          </Link>) : (<a href="/login" style={{color: "darkblue"}} className="active item"> Book Now</a>)}
        </button>
      </div>
    </div>
  );
};

export default TrainData;