import React, { useState } from "react";

import { TicketPrice } from "./TicketPrice";
import { useLocation, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import PassengerCard from "./passengerCard";
import service from "../../services/bookingService";
import ReactSnackBar from "react-js-snackbar";
import { Redirect } from 'react-router-dom';
import Alert from 'react-bootstrap/Alert';
import { v4 as uuidv4 } from "uuid";
import "./Success.css";


export const Review = (props) => {
  const history = useHistory();

  const location = useLocation();
  const data = location.state;

   const [state, setState] = useState({
    open: false,
     vertical: "top",
    horizontal: "center",
   });

  const [successMessage, setSuccsessMessage] = useState(true);

   const { vertical, horizontal, open } = state;

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

     setState({ ...state, open: false });
  };

  
  

  const submitHandler = (event) => {
    event.preventDefault();

    let passList = [];
    let pnr = Date.now().toString();

    for (var i = 0; i < data.TrainBookingReview.passengerDetail.length; i++) {
      let obj = {
        id: data.TrainBookingReview.passengerDetail.at(i).id,
        pnr: pnr,
        name: data.TrainBookingReview.passengerDetail.at(i).name,
        age: data.TrainBookingReview.passengerDetail.at(i).age,
        seatNo: data.TrainBookingReview.passengerDetail.at(i).seatNo,
        gender: data.TrainBookingReview.passengerDetail.at(i).gender,
        time: new Date(),
        id_number: "9102764714",
      };
      passList.push(obj);
    }

    console.log(passList);

    const bookingData = {
      bookingDetails: {
        id: data.TrainBookingReview.trainData.train_id.toString(),
        pnr: pnr,
        train_name: data.TrainBookingReview.trainData.train_name,
        train_no: data.TrainBookingReview.trainData.train_id,
        from_station: data.TrainBookingReview.trainData.from_station,
        to_station: data.TrainBookingReview.trainData.to_station,
        clas: data.TrainBookingReview.train_class,
        quota: "general",
        status: "confirm",
        no_of_seats: 10,
        time: new Date(),
      },

      passengerList: passList,

      user: {
        username: currentUser.username,
        email: currentUser.email,
      },
      price: data.TrainBookingReview.price.toString(),
      userId: currentUser.id,
      pnr: pnr,
      status: "confirm",
    };

    service
      .createBooking1(bookingData)
      .then((res) => {
        console.log(res.data);
        console.log("success");
        if (res.status === 200) {
          setState({open: true,vertical: "top",horizontal:"right"});
          return res.data;
        } else {
          return res.data.then((data) => {
            console.log(data);
          });
        }
      })
      .then((data) => {
        setSuccsessMessage(false);
         setState({open:true,vertical:"top",horizontal:"right"});
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  const { user: currentUser } = useSelector((state) => state.auth);

   if (!currentUser) {
     return <Redirect to="/login" />;
   }


  const ShowNext = successMessage ? "none": "block";

  return (
    <div>
    <ReactSnackBar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical, horizontal }}
        key={vertical + horizontal}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Booked Successfully....
        </Alert>
      </ReactSnackBar>
      {!successMessage && (
        <div class="ui success message">
          <div id="myModal" class="modal header" style={{ display: ShowNext }}>
            <div class="modal-content">
              <h2>
                <i
                  class="check circle outline icon"
                  style={{ fontSize: "30px" }}
                ></i>
                Booking Confirm....
              </h2>
              <h4>Thank You For choosing us...</h4>
              <button
                class="ui icon button"
                onClick={history.goBack}
              >
                <a href="/Profile">Continue</a>
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="ui three steps">
        <div className="completed step">
          <i className="user icon"></i>
          <div className="content">
            <div className="title">Passenger Details</div>
          </div>
        </div>
        <div className="completed step">
          <i className="clipboard check icon"></i>
          <div className="content">
            <div className="title">Review Journey</div>
          </div>
        </div>
        <div className="active step">
          <i className=" payment icon"></i>
          <div className="content">
            <div className="title">Payment</div>
          </div>
        </div>
      </div>
      <div class="ui segment">
        <p></p>
      </div>
      <div class="ui internally celled grid">
        <div class="twelve wide column">
          <div class="ui segment">
            <p></p>
            <div class="ui segment">
              <p>
                Train Name: {(data.TrainBookingReview.trainData.train_name || " ").toUpperCase()}
              </p>

              <div>
                <p>CLASS : {data.TrainBookingReview.train_class}</p>
              </div>
            </div>
            <div class="ui secondary segment">
              <div>
                <p className="p1">
                  <p className="p1">
                    {(data.TrainBookingReview.trainData.from_station || " ").toUpperCase()}
                  </p>
                  <i className="arrow right icon"></i>
                </p>
                <p className="p1">
                  {(data.TrainBookingReview.trainData.to_station || "").toUpperCase()} |
                </p>
                <p className="p1">{data.train_class}</p>
                <p className="p1">Quota</p>
                <p className="p1">time</p>
              </div>
            </div>
          </div>

          <div class="ui segment">
            <p></p>
            <table class="ui four column table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Gender</th>
                  <th>Seat No.</th>
                </tr>
              </thead>
            </table>
            {data.TrainBookingReview.passengerDetail.map((detail) => (
              <PassengerCard passengerData={detail} />
            ))}
          </div>

          <div class="ui segment">
            <p></p>
          </div>

          <div class="ui buttons">
            <button class="ui labeled icon button" onClick={history.goBack}>
              <i className="left arrow icon"></i>Back
            </button>
            <div class="or"></div>
            <button
              class="ui positive labeled icon button"
              onClick={submitHandler}
            >
              Pay
              <i class="rupee sign icon"></i>
            </button>
          </div>
        </div>
        <div class="four wide column">
          <div class="ui segment">
            <TicketPrice
              priceData={data.TrainBookingReview.price * data.TrainBookingReview.passengerDetail.length}
            ></TicketPrice>
          </div>
        </div>
      </div>
      <div class="ui segment">
        <p></p>
      </div>
    </div>
  );
};
