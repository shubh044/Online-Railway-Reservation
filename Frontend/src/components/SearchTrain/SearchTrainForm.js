import { Link } from "react-router-dom";
import { useState,useRef} from "react";
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
const SearchTrainForm = (props) => {

  const form = useRef();

  
  const [toMessage, setToMessage] = useState("");
  const [fromMessage, setFromMessage] = useState("");
  const [dateMessage, setDateMessage] = useState();
  const [classMessage, setClassMessage] = useState("");
  const [catMessage, setCatMessage] = useState("");
  const [loading, setLoading] = useState(false);
  
  var curr = new Date();
curr.setDate(curr.getDate() );
var date = curr.toISOString().substring(0,10);
 
  const handleToChange = (event) => {
    setToMessage(event.target.value);
  };

  const handleFromChange = (event) => {
    setFromMessage(event.target.value);
  };

  const handleDateChange = (event) => {
    setDateMessage(event.target.value);
  };

  const handleClassChange = (event) => {
    setClassMessage(event.target.value);
  };

  const handleCatChange = (event) => {
    setCatMessage(event.target.value);
  };

  
  
  const handleClick = (event) => {
    event.preventDefault();
    
    form.current.validateAll();
    setLoading(false);

    if (toMessage.trim().length === 0 || fromMessage.trim().length === 0) {
      setLoading(false);
    }else{
    setLoading(true);
    }
  };

  

  
  const trainSearchData = {
    to: toMessage,
    from: fromMessage,
    dates: dateMessage,
    classes: classMessage,
    category: catMessage,
    };
 
  
  return (
    <Form ref={form}>
      <div className="ui form">
        <h1 className="ui header" style={{ color: "#2B3080" }}>
          BOOK TICKET
        </h1>
        <div className="equal width fields">
          <div className="field">
            <div className="ui icon input">
              {/* <i className="paper plane icon"></i> */}
              <Input
                type="text"
                placeholder="From"
                 required="true"
                onChange={handleFromChange}
                autoComplete="off"
                value={fromMessage}
                 validations={[required]}
                 
              />
            </div>
          </div>
          <div  className="field">
            <div  className="ui icon input">
              
              <Input
                type="text"
                placeholder="To"
                 required="true"
                onChange={handleToChange}
                 autoComplete="off"
                  value={toMessage}
                 validations={[required]}
              />
            </div>
          </div>
        </div>
        <div className="equal width fields">
          {/* <div className="field">
            <input
              type="date"
              placeholder="date"
              onChange={handleDateChange}
              defaultValue={date}
            />
          </div> */}

          <div className="field">

            <select className="ui search dropdown" onChange={handleClassChange}>
              <option value="All classes">All classes</option>
              <option value="SL">Sleeper (SL)</option>
              <option value="1A">AC First Class (1A)</option>
              <option value="2A">AC First Class (2A)</option>
              <option value="3A">AC First Class (3A)</option>
            </select>
          </div>
        </div>
        <div className="field">

          
        </div>
        <button className="ui toggle button" onClick={handleClick} >
        {loading ?
          <Link to={{pathname: "/train-list",
           state: {trainSearchData}}}>
            {<a class="active item">Search</a>}
          </Link> : <a class="active item">Search</a>  }
        </button>
      </div>
    </Form>
  );
};

export default SearchTrainForm;
