import React from "react";


export const Social = (props) => {

return(
    <div id="socials" className="text-center"> 
    <div className="col-md-10 col-md-offset-1 section-title">
          <h2>Socials</h2>
        </div>
    <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div  key={`${d.title}-${i}`} className="col-xs-6 col-md-3">
                  {" "}
                  <a href={d.text}>
                  <i className={d.icon}></i>
                  <h3>{d.title}</h3>
                  <p></p>
                  </a>
                </div>
              ))
            : "Loading..."}
        </div>
    
    </div>
        
    )
}
