import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./TrainList.css";
import TrainDataCard from "./TrainData/TrainDataCard2";
import service from "../../services/trainService"

 const FindTrain = (props) => {
  const location = useLocation();
  const data = location.state;

  console.log(data.inputName);

  const traindata = {
    "train_id": 123456,
	  "total_Seat_sleeper": 100,
	  "total_Seat_ac3": 100,
	  "total_Seat_ac2": 100,
	  "total_Seat_ac1": 100,
	  "price_sleeper": 1000,
	  "price_ac3": 2000,
	  "price_ac2": 3000,
	  "price_ac1": 4000,
	  "train_name": "Rajdhani",
	  "from_station": "Delhi",
    "to_station": "Patna",

  }


  const [isData, setIsData] = useState(traindata);



  const getData = () => {
    service.findByName(data.inputName)
    .then((res)=> {
      
      setIsData(res.data);
      if (res.status === 200) {
        return res.data;
        console.log(res.data);
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
  }
  useEffect(() => {
    getData();
  }, []);

  console.log(isData);
  return (
    <div>
            <TrainDataCard trainData={isData} />
    </div>
  );
};
export default FindTrain;