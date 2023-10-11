import "./TrainList.css";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import TrainDataCard from "./TrainData/TrainDataCard";
import service from "../../services/trainService";
import React from "react";


const TrainList = (props) => {

  const [isData, setIsData] = useState([]);
  const location = useLocation();

  
  const data = location.state;
  
  // console.log(data);
  

  const trainRun = () => {
    service
      .getTrains(data.trainSearchData.from, data.trainSearchData.to)
      .then((res) => {
        setIsData(res.data);
        if (res.status === 200) {
          return res.data;
          console.log(res.data)
          
        } else {
          return res.data.then((data) => {
          });
        }
      })
      .then((data) => {
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  useEffect(() => {
    trainRun();
  }, []);

  return (
    
    <div>
      <div class="ui segment ">
        <h2 class="ui  header">
          <div style={{textAlign: "center"}}class="ui tertiary segment">
            {data && (
              <div>
                <p className="p1">
                  {data.trainSearchData.from.toUpperCase()}
                  <p className="p1"> </p>
                  <i class="arrow right icon"></i>
                </p>
                <p className="p1"> {data.trainSearchData.to.toUpperCase()} |</p>
                <p className="p1"> {data.trainSearchData.classes}</p>
              </div>
            )}
          </div>
        </h2>
        <div class="ui clearing divider"></div>
        <div class="ui padded segment">
          {isData.map((train) => (
            <TrainDataCard trainData={train} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default TrainList;
