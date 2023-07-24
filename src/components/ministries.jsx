import React from "react";

var path = process.env.PUBLIC_URL;
var outreach = "/img/outreach.jpg";
var pray = "/img/pray.jpg";
var gospel= "/img/gospel.jpg"

export const Ministries = (props) => {
      
    return (
        <>
         <div id="ministries" className="text-center">
            <div className="container">
               <div className="section-title">
                <h2>Ministries</h2>
               </div>
               <div className="container">
            <div className="row">
                 <div className="col-sm-12 col-md-6 col-lg-4 mb-4"> 
                        <div className="card text-dark card-has-bg click-col card-img d-none"> 
                    <img class="card-img-top" src={path + outreach} alt="outreach"  width={400} height={400}/>
                            <div className="card-img-overlay d-flex flex-colum">
                                <div className="card-body">
                                       <small className="card-meta mb-2">Thought Leadership</small>
                                 <h4 className="card-title mt-0 "><a class="text-dark" href="#features">Outreach Ministry</a></h4>
                                 <small><i className="fa fa-clock-o"></i> October 15, 2020</small>
                                </div>   

                            </div>
                                
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-4 mb-4"> 
                        <div className="card text-dark card-has-bg click-col card-img d-none" > 
                        <img className="card-img d-none" src={path + pray} alt="pray" width={400} height={400}/>

                            <div className="card-img-overlay d-flex flex-colum">
                                <div className="card-body">
                                       <small className="card-meta mb-2">Thought Leadership</small>
                                 <h4 className="card-title mt-0 "><a class="text-dark" href="#features">Prayer Ministry</a></h4>
                                 <small><i className="fa fa-clock-o"></i> October 15, 2020</small>

                                </div>   

                               <div className="card-footer">
                                 <div className="card-media">
                                    <img  src="img/01.jpeg" className="mr-3 rounded-circle" alt="" style={{max: "max-width:50px"}}/>
                                 </div>
                               </div>  
                            </div>     
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-4 mb-4"> 
                        <div className="card text-dark card-has-bg click-col card-img d-none" > 
                        <img class="card-img" src={path + gospel} alt="gospel" width={400} height={400}/>
                            <div className="card-img-overlay d-flex flex-colum">
                                <div className="card-body">
                                       <small className="card-meta mb-2">Thought Leadership</small>
                                 <h4 className="card-title mt-0 "><a class="text-dark" href="#features">Word Ministry</a></h4>
                                 <small><i className="fa fa-clock-o"></i> June 15, 2023</small>
                                </div>   

                               
                            </div>     
                        </div>
                    </div>
             </div>
                  </div>
               </div>
            </div>
        <div>

        </div>
        </>
       
    );
};

