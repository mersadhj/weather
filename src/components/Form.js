import React from "react";
import "./Form.css";
class Form extends React.Component {
  render() {
    return (
      <div className="container h-100">
        <form onSubmit={this.props.loadWeather}>
          <div className="row">
            <div className="city col-md-3 offset-md-2">
              <input
                type="text"
                name="city"
                placeholder="City"
                className="form-control"
                autoComplete="false"
              />
            </div>
            <div className="country col-md-3">
              <input
                type="text"
                className="form-control"
                name="country"
                autoComplete="false"
                placeholder="Country"
              />
            </div>
            <div className="col-md-3 mt-md-0 mt-2 text-md-left ">
              <button className="btn btn-warning">Get Weather</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
export default Form;
