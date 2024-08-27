import axios from "axios";
import { Component } from "react";
import { CustomSpinner } from "../spinners/tailspin";

export class Weather extends Component {
  state = {
    result: [],
    coords: {},
    isLoading: true,
    name: "",
    lat: "",
    long: "",
  };

  componentDidMount() {
    this.getLocation();
  }

  getLocation() {
    if (navigator?.geolocation) {
      navigator?.geolocation?.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        if (latitude && longitude) {
          this.fetchData(latitude, longitude);
        }
      });
    } else {
      console.error("Error");
    }
  }

  fetchData = async (lat, long) => {
    const { data } = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=873229bfa3142e94e0ba325058db1d86`
    );
    this.setState({
      result: data.main,
      coords: data.coord,
      name: data.name,
      isLoading: false,
    });
  };

  render() {
    const { lon, lat } = this.state.coords;
    const { temp_max, temp_min } = this.state.result;
    const { name } = this.state;
    return (
      <>
        {this.state.isLoading ? (
          <CustomSpinner />
        ) : (
          <>
            <h3>Longitude: {lon}</h3>
            <h3>Latitude: {lat}</h3>
            <h3>Max-Temperature: {Math.floor(temp_max - 273.15)}° Celsius</h3>
            <h3>Min-Temperature: {Math.floor(temp_min - 273.15)}° Celsius</h3>
            <h3>Location:{name}</h3>
          </>
        )}
      </>
    );
  }
}
