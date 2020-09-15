import React from "react";
import Weather from "./components/Weather";
import Form from "./components/Form";
import "./App.css";
const Api_Key = "7c7d2b09fb19361cc6aa037e74b9ac9f";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      city: undefined,
      country: undefined,
      icon: undefined,
      celsius: undefined,
      temp_max: undefined,
      temp_min: undefined,
      main: undefined,
      description: "",
      error: false,
    };

    this.weatherIcon = {
      Thunderstorm: "wi-thunderstorm",
      Drizzle: "wi-sleet",
      Rain: "wi-storm-showers",
      Snow: "wi-snow",
      Atmosphere: "wi-fog",
      Clear: "wi-day-sunny",
      Clouds: "wi-day-fog",
    };
  }
  get_WeatherIcon(icons, rangeId) {
    switch (true) {
      case rangeId >= 200 && rangeId < 232:
        this.setState({ icon: icons.Thunderstorm });
        break;
      case rangeId >= 300 && rangeId <= 321:
        this.setState({ icon: icons.Drizzle });
        break;
      case rangeId >= 500 && rangeId <= 521:
        this.setState({ icon: icons.Rain });
        break;
      case rangeId >= 600 && rangeId <= 622:
        this.setState({ icon: icons.Snow });
        break;
      case rangeId >= 701 && rangeId <= 781:
        this.setState({ icon: icons.Atmosphere });
        break;
      case rangeId === 800:
        this.setState({ icon: icons.Clear });
        break;
      case rangeId >= 801 && rangeId <= 804:
        this.setState({ icon: icons.Clouds });
        break;
      default:
        this.setState({ icon: icons.Clouds });
    }
  }

  calCel(temp) {
    let cel = Math.floor(temp - 273.15);
    return cel;
  }
  getWeather = async (e) => {
    e.preventDefault();
    const country = e.target.elements.country.value;
    const city = e.target.elements.city.value;
    if (city && country) {
      const api_call = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${Api_Key}`
      );
      const response = await api_call.json();
      console.log(response);
      this.setState({
        city: response.name,
        country: response.sys.country,
        description: response.weather[0].description,
        temp_max: this.calCel(response.main.temp_max),
        temp_min: this.calCel(response.main.temp_min),
        main: response.weather[0].main,
        celsius: this.calCel(response.main.temp),
      });
      this.get_WeatherIcon(this.weatherIcon, response.weather[0].id);
    } else {
      this.setState({ error: true });
    }
  };

  render() {
    return (
      <div>
        <div className="header">
          <h1 className="titr">Weather App</h1>
        </div>
        <Form loadWeather={this.getWeather}></Form>
        <Weather
          city={this.state.city}
          country={this.state.country}
          main={this.state.main}
          temp_max={this.state.temp_max}
          temp_min={this.state.temp_min}
          icon={this.state.icon}
          description={this.state.description}
          celsius={this.state.celsius}
          error={this.state.error}
        />
      </div>
    );
  }
}
export default App;
