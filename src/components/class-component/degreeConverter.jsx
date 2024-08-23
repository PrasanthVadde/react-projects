import { Component } from "react";

export class DegreeConvertor extends Component {
  state = {
    celsius: "",
    fahrenheit: "",
  };

  convertToFahrenheit = (celsius) => {
    return (celsius * (9/5)) + 32;
  };
  convertToCelsius = (fahrenheit) => {
    return (fahrenheit - 32) * (5 / 9);
  };


  fahrenheitConversion = (e) => {
    const value = Number(e.target.value);
    this.setState({
      celsius: this.value,
      fahrenheit: this.convertToFahrenheit(value),
    });
  };

  celsiusConversion =(e)=>{
    const value = Number(e.target.value);
    this.setState({
      celsius: this.convertToCelsius(value),
      fahrenheit: this.value,
    });
  }


  render() {
    return (
      <>
        <form action="">
          <input
            type="text"
            onChange={this.fahrenheitConversion}
            name="celsius"
            placeholder="Enter Celsius"
            value= {this.state.celsius}
          />

          <input
            type="text"
            onChange={this.celsiusConversion}
            name="fahrenheit"
            placeholder="Enter Fahrenheit"
            value= {this.state.fahrenheit}
          />
        </form>
      </>
    );
  }
}
