import React, { useState,useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateTrain } from "../../actions/train";
import {Link,useHistory} from "react-router-dom";
import {useParams} from 'react-router-dom';
import service from "../../services/trainService"


const UpdateTrain = (props) => {

  const param=useParams();
  const data =param.id;
 
const history = useHistory();
  const [trainById,setTrainById]=useState({});

    const GetTrain = ()=>{
        
            return service.get(data).then((res)=>{
                setTrainById(res);
                return res.data;
            })
    }
    useEffect(()=>{GetTrain();},[]);
    console.log(trainById);

    useEffect(()=>{
      const data =()=>{
        if(trainById.data){
          setTrainId(trainById.data.train_id)
         // console.log(trainById.data.train_id)
          setSleeper(trainById.data.total_Seat_sleeper)
          setAc3(trainById.data.total_Seat_ac3)
          setAc2(trainById.data.total_Seat_ac2)
          setAc1(trainById.data.total_Seat_ac1)
          setName(trainById.data.train_name)
         setPsleeper(trainById.data.price_sleeper)
         setPac3(trainById.data.price_ac3)
         setPac2(trainById.data.price_ac2)
         setPac1(trainById.data.price_ac1)
          setFrom(trainById.data.from_station)
          setTo(trainById.data.to_station)
        }
      }
      data();
    },[trainById.data]);

   
    
  
  const [update, setUpdate] = useState(false);

const [trainId,setTrainId]=useState( );
const [sleeper,setSleeper]=useState();
const [ac3,setAc3]=useState();
const [ac2,setAc2]=useState();
const [ac1,setAc1]=useState();
const [psleeper,setPsleeper]=useState();
const [pac3,setPac3]=useState();
const [pac2,setPac2]=useState();
const [pac1,setPac1]=useState();
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
      dispatch(updateTrain(data,finalData));
      //console.log(finalData);
        setUpdate(true);
      };
      


  return (
    <div class="ui text container">
    {update ? (
    <div class="ui form success">
      <div class="ui success message">
        <div class="header">Added successfully</div>
        <p>You can now visit to admin page to see the changes</p>
        <button  class="ui primary button">
        <Link style={{color: "white"}} to="/adminMain">
      Admin page
      </Link>
             </button>
      </div>
    </div>
    ) : (
        <div style={{marginTop: "75px",borderBlockColor: "GrayText"}} class="ui fluid container">
           <h2 class="ui center aligned icon header">
               <i class="circular train icon"></i>
                       Update Train
           </h2>
            <div class="ui form">
                 <div class="fields">
                    <div class="field">
                          <label>Train Id</label>
                               <input type="text"
                                placeholder="train_id"
                                defaultValue={trainId}
                                onChange={(e)=>trainIdHandler(e)}
                                
                                />
                    </div>
                    <div class="field">
                          <label>Train Name</label>
                               <input type="text" 
                               placeholder="Train Name"
                              defaultValue={name}
                              onChange={(e)=>nameHandler(e)}
                               />
                    </div>
                    <div class="field">
                          <label>Source Station</label>
                               <input type="text" 
                               placeholder="Source Station"
                               defaultValue={from}
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
                               defaultValue={to}
                              onChange={(e)=>toHandler(e)}
                               />
                    </div>
                    <div class="field">
                          <label>Sleeper Class </label>
                               <input type="text"
                                placeholder="Sleeper Class"
                                defaultValue={sleeper}
                                onChange={(e)=>sleeperHandler(e)}
                                />
                    </div>
                    <div class="field">
                          <label>3A Ac Class</label>
                               <input type="text" 
                               placeholder="3A"
                               defaultValue={ac3}
                               onChange={(e)=>ac3Handler(e)}
                               />
                    </div>
                  </div>
            </div>
            <div class="ui form">
                 <div class="fields">
                    <div class="field">
                          <label>2A Ac Class</label>
                               <input type="text"
                                placeholder="2A"
                                defaultValue={ac2}
                               onChange={(e)=>ac2Handler(e)}
                                />
                    </div>
                    <div class="field">
                          <label>1A ac class</label>
                               <input type="text" 
                               placeholder="1A"
                               defaultValue={ac1}
                        onChange={(e)=>ac1Handler(e)}
                               />
                    </div>
                    <div class="field">
                          <label>1A Price</label>
                               <input type="text" 
                               placeholder="1A Price"
                               defaultValue={pac1}
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
                                defaultValue={pac2}
                               onChange={(e)=>pac2Handler(e)}
                                />
                    </div>
                    <div class="field">
                          <label>3A Price</label>
                               <input type="text" 
                               placeholder="3A Price"
                               defaultValue={pac3}
                               onChange={(e)=>pac3Handler(e)}
                               />
                    </div>
                    <div class="field">
                          <label>Sleeper Price</label>
                               <input type="text" 
                               placeholder="Sleeper Price"
                               defaultValue={psleeper}
                               onChange={(e)=>psleeperHandler(e)}
                               />
                    </div>
                
                  </div>
            </div>
            <button  onClick={(e)=>saveTrain(e)} class="ui primary button">
                    Update
             </button>
              <button class="ui button" onClick={history.goBack}>
                     Discard
                  </button>
    
    
            </div>
    )}
    </div>
      )
    };
    

export default UpdateTrain;