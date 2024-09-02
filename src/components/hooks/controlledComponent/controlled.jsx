import { useState } from "react";

export const ControlledComponent = () => {
  const [model, setModel] = useState("");
  const [modelError, setModelError] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [mobileError, setMobileError] = useState("");

  const modelHandler = (event) => {
    const modelName = event.target.value;
    setModel(modelName);
    const error = modelValidation(modelName);

    if (error) {
      setModelError(error);
    } else {
      setModelError("");
    }
  };

  const mobileHandler = (event) => {
    const mobile = event.target.value;
    setMobileNumber(mobile);
    const error = mobileValidation(mobile);

    if (error) {
      setMobileError(error);
    } else {
      setMobileError("");
    }
  };

  const modelValidation = (value) => {
    let error = "";
    const modelRegex = /^samsung/i;

    if (!value) {
      error = "Please enter model name";
    } else if (!modelRegex.test(value)) {
      error = "please enter proper samsung model";
    }

    return error;
  };

  const mobileValidation = (value) => {
    const mobileRegex = /^[6-9][0-9]{9}/;
    let error = "";
    if (!value) {
      error = "please enter mobile number";
    } else if (!mobileRegex.test(value)) {
      error = "please enter valid mobile number";
    }
    return error;
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (modelError || mobileError) {
      alert("please fill the form properly");
    }
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="userName">Model Name:</label>
          <input
            type="text"
            className="form-control"
            id="userName"
            value={model}
            onChange={modelHandler}
          />
          {modelError && <span>{modelError}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="mobile">Mobile number:</label>
          <input
            type="number"
            className="form-control"
            id="mobile"
            value={mobileNumber}
            onChange={mobileHandler}
          />
          {mobileError && <span>{mobileError}</span>}
        </div>

        <button type="submit" className="btn btn-default">
          Submit
        </button>
      </form>
    </>
  );
};
