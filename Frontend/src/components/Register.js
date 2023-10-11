import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";
import Logo from "../images/signup_image.jpg";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

import { register } from "../actions/auth";

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const validEmail = (value) => {
  if (!isEmail(value)) {
    return (
      <div className="alert alert-danger" role="alert">
        This is not a valid email.
      </div>
    );
  }
};

const vusername = (value) => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className="alert alert-danger" role="alert">
        The username must be between 3 and 20 characters.
      </div>
    );
  }
};

const vpassword = (value) => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className="alert alert-danger" role="alert">
        The password must be between 6 and 40 characters.
      </div>
    );
  }
};



const Register = () => {
  const form = useRef();
  const checkBtn = useRef();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [successful, setSuccessful] = useState(false);

  // handle password eye
 const [passwordEye, setPasswordEye] = useState(false);

 const handlePasswordClick = () => {
   setPasswordEye(!passwordEye);
  }

  const { message } = useSelector(state => state.message);
  const dispatch = useDispatch();

  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };


  const handleRegister = (e) => {
    e.preventDefault();

    setSuccessful(false);

    form.current.validateAll();
    const formData = new FormData(e.target);
    const role = formData.get("role");
 

    if (checkBtn.current.context._errors.length === 0) {
      console.log("Selected Role:", role);
      dispatch(register(username, email, password,role))
        .then(() => {
          setSuccessful(true);
        })
        .catch(() => {
          setSuccessful(false);
        });
    }
  };

  return (
    <div  className="background">
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
        <Form onSubmit={handleRegister} ref={form}>
          {!successful && (
            <div>
              <div   style={{ textAlign: "left", marginLeft:"20p"}} className="form-group">
                <label style={{fontSize:"20px", fontWeight:"bold",color: "black"}} htmlFor="username">Username</label>
                <Input
                  type="text"
                  className="form-control"
                  name="username"
                  value={username}
                  onChange={onChangeUsername}
                  validations={[required, vusername]}
                />
              </div>

              <div style={{ textAlign: "left", marginLeft:"20p"}} className="form-group">
                <label style={{fontSize:"20px", fontWeight:"bold",color: "black"}} htmlFor="email">Email</label>
                <Input
                  type="text"
                  className="form-control"
                  name="email"
                  value={email}
                  onChange={onChangeEmail}
                  validations={[required, validEmail]}
                />
              </div>
              <div className="form-group">
</div>

              <div style={{ textAlign: "left", marginLeft:"20p"}} className="form-group">
                <label style={{fontSize:"20px", fontWeight:"bold",color: "black"}} htmlFor="password">Password</label>
                <Input
                  type="password"
                  className="form-control"
                  name="password"
                  value={password}
                  onChange={onChangePassword}
                  validations={[required, vpassword]}
                />
                 {/* eye section */}
            <div  style={{color: "black", display:"none"}}className="text-2xl absolute top-4 right-5">
                    {passwordEye === false ? (
                      <AiFillEyeInvisible onClick={handlePasswordClick} />
                    ) : (
                      <AiFillEye onClick={handlePasswordClick} />
                    )}
                    </div>
              </div>

      
              
           <div className="form-group">
                <button className="btn btn-primary btn-block">Sign Up</button>
              </div>
            </div>
          )}

          {message && (
            <div className="form-group">
              <div className={ successful ? "alert alert-success" : "alert alert-danger" } role="alert">
                {message}
              </div>
            </div>
          )}
          <CheckButton style={{ display: "none" }} ref={checkBtn} />
        </Form>
      </div>
      </right>
    </div>
  );
};

export default Register;
