import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTrain } from "../../actions/train";
import {Link,useHistory} from "react-router-dom";

const AddTrain = () => {
  
  const [submitted, setSubmitted] = useState(false);

  const history = useHistory();

const [trainId,setTrainId]=useState(0);
const [sleeper,setSleeper]=useState(0);
const [ac3,setAc3]=useState(0);
const [ac2,setAc2]=useState(0);
const [ac1,setAc1]=useState(0);
const [psleeper,setPsleeper]=useState(0);
const [pac3,setPac3]=useState(0);
const [pac2,setPac2]=useState(0);
const [pac1,setPac1]=useState(0);
const [name,setName]=useState("");
const [from,setFrom]=useState("");
const [to,setTo]=useState("");

const trainIdHandler = (e)=>{
  setTrainId(e.target.value);
};

const sleeperHandler = (e)=>{
  setSleeper(e.target.value);
}
const ac3Handler = (e)=>{
  setAc3(e.target.value);
}
const ac2Handler = (e)=>{
  setAc2(e.target.value);
}
const ac1Handler =(e)=>{
  setAc1(e.target.value);
}
const psleeperHandler = (e)=>{
  setPsleeper(e.target.value);
}
const pac3Handler = (e)=>{
  setPac3(e.target.value);
}
const pac2Handler = (e)=>{
  setPac2(e.target.value);
}
const pac1Handler =(e)=>{
  setPac1(e.target.value);
}
const nameHandler =(e)=>{
  setName(e.target.value);
}
const fromHandler=(e)=>{
  setFrom(e.target.value);
}
const toHandler=(e)=>{
  setTo(e.target.value);
}

  const dispatch = useDispatch();

  const saveTrain = (e) => {
    e.preventDefault();
      
       const finalData= {
            train_id: trainId,
            total_Seat_sleeper: sleeper,
            total_Seat_ac3: ac3,
            total_Seat_ac2: ac2,
            total_Seat_ac1: ac1,
            price_sleeper: psleeper,
            price_ac3: pac3,
            price_ac2: pac2,
            price_ac1: pac1,
            train_name: name,
            from_station:from,
            to_station: to
        };
      dispatch(addTrain(finalData));
      //console.log(finalData);
        setSubmitted(true);
      };
      


  return (
    <div class="ui text container">
    {submitted ? (
    <div class="ui form success">
      <div class="ui success message">
        <div class="header">Added successfully</div>
        <p>You have currently added a train. For adding another train click on Add New</p>
        <button  class="ui primary button">
        <Link style={{color: "white"}} to="/Home">
      Admin page
      </Link>
             </button>
      </div>
    </div>
    ) : (
        <div style={{marginTop: "75px",borderBlockColor: "GrayText"}} class="ui fluid container">
           <h2 class="ui center aligned icon header">
               <i class="circular train icon"></i>
                       Add Train
           </h2>
            <div class="ui form">
                 <div class="fields">
                    <div class="field">
                          <label>Train Id</label>
                               <input type="text"
                                placeholder="train_id"
                                onChange={(e)=>trainIdHandler(e)}
                                />
                    </div>
                    <div class="field">
                          <label>Train Name</label>
                               <input type="text" 
                               placeholder="Train Name"
                              onChange={(e)=>nameHandler(e)}
                               />
                    </div>
                   
         
                    
                    <div class="field">
                          <label>Source Station</label>
                               <input type="text" 
                               placeholder="Source Station"
                              onChange={(e)=>fromHandler(e)}
                               />
                    </div>
                  </div>
            </div>
            <div class="ui form">
                 <div class="fields">
                    <div class="field">
                          <label>Destination Station</label>
                               <input type="text" 
                               placeholder="Destination Station"
                              onChange={(e)=>toHandler(e)}
                               />
                    </div>
                    <div class="field">
                          <label>Sleeper Class Seats</label>
                               <input type="text"
                                placeholder="Sleeper Class"
                                onChange={(e)=>sleeperHandler(e)}
                                />
                    </div>
                    <div class="field">
                          <label>3AC Class Seats</label>
                               <input type="text" 
                               placeholder="3A"
                               onChange={(e)=>ac3Handler(e)}
                               />
                    </div>
                  </div>
            </div>
            <div class="ui form">
                 <div class="fields">
                    <div class="field">
                          <label>2AC Class Seats</label>
                               <input type="text"
                                placeholder="2A"
                               onChange={(e)=>ac2Handler(e)}
                                />
                    </div>
                    <div class="field">
                          <label>1AC Class Seats</label>
                               <input type="text" 
                               placeholder="1A"
                               onChange={(e)=>ac1Handler(e)}
                               />
                    </div>
                    <div class="field">
                          <label>1A Price</label>
                               <input type="text" 
                               placeholder="1A Price"
                               onChange={(e)=>pac1Handler(e)}
                               />
                    </div>
                
                  </div>
            </div>
            <div class="ui form">
                 <div class="fields">
                    <div class="field">
                          <label>2A Price</label>
                               <input type="text"
                                placeholder="2A Price"
                               onChange={(e)=>pac2Handler(e)}
                                />
                    </div>
                    <div class="field">
                          <label>3A Price</label>
                               <input type="text" 
                               placeholder="3A Price"
                               onChange={(e)=>pac3Handler(e)}
                               />
                    </div>
                    <div class="field">
                          <label>Sleeper Price</label>
                               <input type="text" 
                               placeholder="Sleeper Price"
                               onChange={(e)=>psleeperHandler(e)}
                               />
                    </div>
                
                  </div>
            </div>
            <button  onClick={(e)=>saveTrain(e)} class="ui primary button">
                          Save
             </button>
              <button class="ui button" onClick={history.goBack}>
                     Discard
                  </button>
    
    
            </div>
    )}
    </div>
      )
    };
    

export default AddTrain;