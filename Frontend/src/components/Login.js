import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { Redirect } from 'react-router-dom';
import Logo from "../images/signup_image.jpg";
import "../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

import { login } from "../actions/auth";

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};
const Login = (props) => {
  const form = useRef();
  const checkBtn = useRef();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

   // handle password eye
 const [passwordEye, setPasswordEye] = useState(false);

 const handlePasswordClick = () => {
   setPasswordEye(!passwordEye);}

  const { isLoggedIn } = useSelector(state => state.auth);
  // const { message } = useSelector(state => state.message);

  const dispatch = useDispatch();

  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

 

  const handleLogin = (e) => {
    e.preventDefault();

    setLoading(true);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      dispatch(login(username, password))
        .then(() => {
          props.history.push("/Home");
          window.location.reload();
        })
        .catch((error) => {
          setLoading(false);
          if (error) {
            const errorMessage = "Wrong username or password";
              setMessage(errorMessage);
            }
           else {
            setMessage("Wrong username or password");
          }
        });
    } else {
      setLoading(false);
    }
  };

  if (isLoggedIn) {
    return <Redirect to="/Home" />;
  }

  return (
    <div className="background">
    <right>
      <div className="box">
      <center>
        <img
          src={Logo}
          style={{
                  width: 90,
                  height: 90,
                  borderRadius: "50%",
                  overflow: "hidden",
                  borderWidth: 3,
                  borderColor: "red",
          }}
        />
        </center>

        <Form onSubmit={handleLogin} ref={form} className="form1">
          <div style={{ textAlign: "left", marginLeft:"20px"}} className="form-group">
            <label style={{fontSize:"20px", fontWeight:"bold",color: "black"}} htmlFor="username">Username</label>
            <Input
              type="text"
              style={{fontSize:"20px", fontWeight:"bold"}}
              className="form-control"
              name="username"
              value={username}
              onChange={onChangeUsername}
              validations={[required]}
            />
          </div>

          <div style={{ textAlign: "left", marginLeft:"20px"}} className="form-group">
            <label style={{fontSize:"20px", fontWeight:"bold",color: "black"}} htmlFor="password">Password</label>
           
            <Input
           
               type={passwordEye === false ? "password" : "text"}
              style={{fontSize:"20px", fontWeight:"bold"}}
              className="form-control"
              name="password"
              value={password}
              onChange={onChangePassword}
              validations={[required]}  
            />
            {/* eye section */}
            <i  style={{color: "black", display: "none"}}className="text-2xl absolute top-4 right-5">
                    {passwordEye === false ? (
                      <AiFillEyeInvisible onClick={handlePasswordClick} />
                    ) : (
                      <AiFillEye onClick={handlePasswordClick} />
                    )}
                    </i>
             
          </div>

          <div style={{ textAlign: "left", marginLeft:"20px"}} className="form-group">
            <button style={{marginTop:"15px"}} className="btn btn-primary btn-block" disabled={loading}>
              {loading && (
                <span style={{fontSize:"20px", fontWeight:"bold"}} className="spinner-border spinner-border-sm"></span>
              )}
              <span>Login</span>
            </button>
          </div>
          <p class="message" style={{color: "lightgrey"}}>
            Not registered? <a style={{color: "white"}} href="/register">SignUp</a>
          </p>

          {message && (
            <div   className="form-group">
              <div className="alert alert-danger" role="alert">
                {message}
              </div>
            </div>
          )}
          <CheckButton  ref={checkBtn} />
        </Form>
      </div>
      </right>
    </div>
  );
};

export default Login;