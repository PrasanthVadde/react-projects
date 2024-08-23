import { Component } from "react";
import { successToast } from "../toasts/toast-helpers.js";

export class Counter extends Component {
  state = {
    count: 0,
  };
  IncrementHandler = () => {
    this.setState(
      {
        count: this.state.count + 1,
      },
      () => {
        successToast(`The current count ${this.state.count}`);
      }
    );
  };

  DecrementHandler = () => {
    if (this.count >= 1) {
      this.setState({
        count: this.state.count - 1,
      });
    }
  };

  ResetHandler = () => {
    this.setState({
      count: 0,
    });
  };

  render() {
    return (
      <>
        <h2>Count {this.state.count}</h2>
        <button onClick={this.IncrementHandler}>Increment</button>
        <button onClick={this.DecrementHandler}>Decrement</button>
        <button onClick={this.ResetHandler}>Reset</button>
      </>
    );
  }
}
