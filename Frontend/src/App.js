import React  from "react";

import { Router, Switch, Route  } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import Profile from "./components/Ticket/BookingProfile";
import BoardUser from "./components/BoardUser";
import BoardAdmin from "./components/BoardAdmin";
import Header from "./components/Header";
import TrainList from "./components/SearchTrain/TrainList";
import AddTrain from "./components/Admin/AddTrain";
import Admin from "./components/Admin/Admin";
import UpdateTrain   from "./components/Admin/UpdateTrain";
import TrainBooking from "./components/Booking/TrainBooking";
import {Review} from "./components/Booking/Review";
import FirstPageLook from "./FirstPageLook";
import { PnrInfo } from "./components/Ticket/PnrInfo";
import Contact from "./StaticHomePage/Contact.";
import FindTrain from "./components/SearchTrain/FindTrain";



import { history } from "./helpers/history";


function App(){
  
  return (
    <Router history={history}>
      <div>
       <Header/>
        <div>
          <Switch>
            <Route exact path={["/", "/home"]} component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/add" component={AddTrain} />
            <Route path="/train-list" component={TrainList } />
            <Route path="/user" component={BoardUser} />
            <Route path="/admin" component={BoardAdmin} />
            <Route path="/adminMain" component={Admin}/>
            <Route path="/update/:id" component={UpdateTrain}/>
            <Route path="/booking" component={TrainBooking}/>
             <Route path="/review" component={Review}/> 
             <Route path="/firstPage" component={FirstPageLook}/>
             <Route path="/train-pnr" component={PnrInfo}/>
             <Route path="/Contact" component={Contact}/>
             <Route path="/find" component={FindTrain}/>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
