import img from "../../images/signup_image.jpg";
import "./BookingProfile.css";
import React, {  useEffect, useState } from "react";
import service from "../../services/bookingService";
import { Redirect } from 'react-router-dom';
import { useSelector } from "react-redux";
import { TicketCard } from "./TicketCard";
const Profile = (props) => {

        
  const [isData, setIsData] = useState([]);

  useEffect(() => {
    service
      .getBooking(currentUser.id)
      .then((res) => {
        console.log(res.data);
        setIsData(res.data);
        console.log("success");
        if (res.status === 200) {
          return res.data;
        } else {
          return res.data.then((data) => {
            console.log(data);
          });
        }
      })
      .then((data) => {})
      .catch((err) => {
        alert(err.message);
      });
  }, []);

  const { user: currentUser } = useSelector((state) => state.auth);
  
      
        if (!currentUser) {
          return <Redirect to="/login" />;
        }
  
  return (
    <div>
      <div class="ui segment">
        <div class="ui segment">
          <div class="ui grid">
            <div class="two wide column">
              <div class="ui small circular rotate left reveal image">
                <img src={img} class="visible content" />
                <img src={img} class="hidden content" />
              </div>
            </div>
            <div class="fourteen wide column">
              <div class="ui  segment">
                <h3><strong>User Profile</strong></h3>
                <div class="ui clearing divider"></div>
                <h3><strong>Username: </strong>{currentUser.username} </h3>
                <div class="ui clearing divider"></div>
                <h3><strong>Email: </strong>{currentUser.email} </h3>
                <strong>Authorities/Role:</strong>
      <ul>
        {currentUser.roles &&
          currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
      </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="ui item menu">
        <a class="item active">All Journeys</a>
      </div>
      {isData.map((ticket, i) => (
        <TicketCard ticketData={ticket} key={i} />
      ))}
      <div class="ui very padded segment">
        <p></p>
      </div>
    </div>
  );
};

export default Profile;