import React from "react";
import "./Weather.css";
const Weather = (props) => {
  if (props.city != undefined) {
    return (
      <div className="container">
        <div className="jumbotron">
          <h1 class="display-4">
            {props.city},{props.country}'s Weather...
            <i className={`wi ${props.icon}`} />
          </h1>
          <p class="lead">
            {" "}
            {props.celsius} Celcius :{props.main}
          </p>
          <p>{props.description}</p>

          <hr class="my-4"></hr>

          <p className="card-text">
            At Most:{props.temp_max} and At Min:{props.temp_min}
          </p>
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
};
export default Weather;
