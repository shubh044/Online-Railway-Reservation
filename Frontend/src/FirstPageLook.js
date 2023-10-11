import React from 'react'
import PnrSearch from './components/SearchTrain/PnrSearch';
import SearchTrainForm from './components/SearchTrain/SearchTrainForm';
import logo from "./img/Rlogo.png";
import "./App.css"

 const FirstPageLook = () => {
  return (
    <div>
    <section className="banner" id="top">
        <div className="container">
            <div className="row">
                  <div className="col-md-5"> 
                    <div style={{marginRight: "10px"}} className="left-side">
                        <div class="logo">
                             <img src={logo} alt="Flight Template"/> 
                        </div> 
                        <div >
                            <h1 style={{color: "yellow", fontSize: "75px" ,fontStretch: "extra-condensed" }}>Railway</h1>
                            </div>
                        <div className="tabs-content">
                            <ul className='social-links'>
                              <PnrSearch/> 
                            </ul>
                        </div>
                    </div>
                </div> 
                <div  style={{marginLeft: "150px"}} className="col-md-5 col-md-offset-1">
                    <section id="first-tab-group" className="tabgroup">
                        <div id="tab1">
                            <div style={{width: "110%"}} className="submit-form">
                                <h4>Check availability for <em>Train</em>:</h4>
                                <form  id="form-submit" >
                                    <SearchTrainForm/>
                                </form>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    </section>
   
</div>
  )
}

export default FirstPageLook;
