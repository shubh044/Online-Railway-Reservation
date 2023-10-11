import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import Input from "react-validation/build/input";
import Form from "react-validation/build/form";

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const validatePNR = (value) => {
  if (!/^[0-9]{13}$/.test(value)) {
    return (
      <div className="alert alert-danger" role="alert">
        PNR must be a 13-digit number!
      </div>
    );
  }
};

const PnrSearch = () => {
  const [inputMessage, setInputMessage] = useState("");
  const [inputName, setInputName] = useState("");
  const [loading, setLoading] = useState(false);
  const [nloading, setNloading] = useState(false);

  const inputRef = useRef();
  const formRef = useRef();

  const handleClick = (event) => {
    event.preventDefault();

    inputRef.current.validateAll();

    if (inputMessage.trim().length === 0 || !inputRef.current.state.error) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  };

  const handleName = (event) => {
    event.preventDefault();

    formRef.current.validateAll();

    if (inputName.trim().length === 0 || !formRef.current.state.error) {
      setNloading(true);
    } else {
      setNloading(false);
    }
  };

  return (
    <div>
      <h2 className="ui header" style={{ color: "pink" }}>
        PNR SEARCH
      </h2>
      <Form ref={inputRef}>
        <div className="ui fluid action input">
          <Input
            type="number"
            pattern="[0-9]{13}"
            placeholder="Enter PNR Number"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            validations={[required, validatePNR]}
          />
        </div>
        <button className="ui toggle button" onClick={handleClick}>
          {loading ? (
            <Link
              to={{
                pathname: "/train-pnr",
                state: { inputMessage },
              }}
            >
              {<div className="active item">Search</div>}
            </Link>
          ) : (
            <div className="active item">Search</div>
          )}
        </button>
      </Form>

    </div>
  );
};

export default PnrSearch;