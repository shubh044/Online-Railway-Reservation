import React from 'react'
import {Link} from "react-router-dom";
import ViewAllTrain from "./ViewAllTrain"
import  { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import {retrieveTrain,

} from "../../actions/train";


const Admin = (props) => { 

  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(retrieveTrain());
  },[dispatch]);
  
  const responseData = useSelector((state)=>state.train.trains);
  //  console.log(responseData);
const result = responseData.map((train)=>{
  return(
    <ViewAllTrain viewAllTrain={train}/>
  );
});

  return (
    <div>
      <div style={{marginTop: "30px",borderBlockColor: "GrayText"}}class="ui fluid container">
  <h1 style={{textAlign: "center"}}class="ui header">ADMIN
  <i class="user secret icon"></i>
</h1>
<div class="ui attached stackable menu">
  <div class="ui container">
    <a class="item">
      <i class="train icon"></i> 
      <Link to="/add">
      Add Train
      </Link>
    </a>
    <a class="item">
    <i class="address card outline icon"></i>
    <Link to="/profile">
      Profile
      </Link> 
    </a>
  </div> 
</div>
<div style={{marginTop: "30px",borderBlockColor: "GrayText"}}class="ui fluid container">
  <h2 style={{textAlign: "center"}}class="ui teal header">All Train List
  <i class="train icon"></i>
</h2>
</div>
<div class="ui clearing divider"></div>
        <div class="ui padded segment">
          {result}
        </div>
</div>

</div>
  )
}

export default Admin;