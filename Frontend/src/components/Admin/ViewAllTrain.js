import React, { useState } from "react";
import { Link } from "react-router-dom";
import { deleteTrain } from "../../actions/train";
import { useDispatch } from "react-redux";

const ViewAllTrain = (props) => {
    const dispatch = useDispatch();



  return (
      
    <div className="ui segment">
      <div className="ui tertiary segment">
        <p className="p1">{props.viewAllTrain.train_name.toUpperCase()} |</p>
        <p className="p1">{props.viewAllTrain.train_id}</p>
        <p className="p1">{props.viewAllTrain.from_station}</p>
        <p className="p1">{props.viewAllTrain.to_station}</p>
        
      </div>

      <div className="ui four column  stackable grid">
        <div>
          <div>
            <div className="ui ">
              <div className=" header">
                <div className="line">Sleeper</div>
              </div>
              <div className="paragraph">
                <div className="medium line">
                  {props.viewAllTrain.total_Seat_sleeper}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <div className="ui ">
              <div className=" header">
                <div className="line">AC 3 Tier </div>
              </div>
              <div className="paragraph">
                <div className="medium line">
                  {props.viewAllTrain.total_Seat_ac3}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <div className="ui ">
              <div className=" header">
                <div className="line">AC 2 Tier </div>
              </div>
              <div className="paragraph">
                <div className="medium line">
                  {props.viewAllTrain.total_Seat_ac2}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <div className="ui ">
              <div className=" header">
                <div className="line">AC 1 Tier </div>
              </div>
              <div className="paragraph">
                <div className="medium line">
                  {props.viewAllTrain.total_Seat_ac1}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ui segment">
        <button
          className="ui teal button"
        >
        <Link to={`/update/${props.viewAllTrain.train_id}`} > 
            {<a className="active item"> Update</a>}
          </Link>
        </button>
        <button
        onClick={()=>dispatch(deleteTrain(props.viewAllTrain.train_id) )}
          className="negative ui button"
        >
         Delete
        </button>
      </div>
    </div>
  );
};

export default ViewAllTrain;