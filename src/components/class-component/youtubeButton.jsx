import { Component } from "react";
import { successToast,errorToast } from "../toast/toast-helpers.js";


export class Button extends Component {
  state = {
    isSubscribe: false,
    text1: "Subscribe",
    text2: "Subscribed",
  };

  clickHandler = () => {
    this.setState(
      {
        isSubscribe: !this.state.isSubscribe,
      },
      () => {
        if (this.isSubscribe == true) {
          successToast("Successfully Subscribed");
        } else {
          errorToast("Please Subscribe");
        }
      }
    );
  };

  render() {
    return (
      <>
        <button onClick={this.clickHandler}>
          {this.state.isSubscribe ? this.state.text2 : this.state.text1}
        </button>
      </>
    );
  }
}
