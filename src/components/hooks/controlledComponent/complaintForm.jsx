import axios from "axios";
import { useState } from "react";
import { Table } from "react-bootstrap";

export const ComplaintForm = () => {
  const [model, setModel] = useState("");
  const [modelError, setModelError] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [mobileError, setMobileError] = useState("");
  const [complaint, setComplaint] = useState("");
  const [complaintError, setComplaintError] = useState("");
  const [complaintData,setComplaintData] = useState([])

  const modelHandler = (event) => {
    const modelName = event.target.value;
    setModel(modelName);
    const error = modelValidation(modelName);
    setModelError(error);
  };

  const mobileHandler = (event) => {
    const mobile = event.target.value;
    setMobileNumber(mobile);
    const error = mobileValidation(mobile);
    setMobileError(error);
  };

  const complaintHandler = (event) => {
    const complaintText = event.target.value;
    setComplaint(complaintText);
    const error = complaintValidator(complaintText);
    setComplaintError(error);
  };

  const modelValidation = (value) => {
    if (!value) return "Please enter model name";
    if (value === "Choose Samsung mobile model...")
      return "Choose a valid model name";
    return "";
  };

  const mobileValidation = (value) => {
    const mobileRegex = /^[6-9][0-9]{9}$/;
    if (!value) return "Please enter mobile number";
    if (!mobileRegex.test(value)) return "Please enter a valid mobile number";
    return "";
  };

  const complaintValidator = (value) => {
    if (!value || value.length < 5)
      return "Complaint field should not be empty and length more than 5";
    return "";
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const modelError = modelValidation(model);
    const mobileError = mobileValidation(mobileNumber);
    const complaintError = complaintValidator(complaint);
    setModelError(modelError);
    setMobileError(mobileError);
    setComplaintError(complaintError);

    if (modelError || mobileError || complaintError) {
      alert("Please fill the form properly");
      return;
    }
    alert("Form submitted successfully");
    setModel("");
    setMobileNumber("");
    setComplaint("");
    apiPost(model,mobileNumber,complaint)
  };

  const apiPost=async(model,mobileNumber,complaint)=>{
    let val =1
    const {data}=await axios.post("http://localhost:3000/data",{
      id: val,
      model,
      mobileNumber,
      complaint
    })
    val++
    setComplaintData([...complaintData,data])
  }


  return (
    <>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="model">Model Name:</label>
          <select
            className="form-control"
            id="model"
            value={model}
            onChange={modelHandler}
          >
            <option>Choose Samsung mobile model...</option>
            <option>Samsung M31s</option>
            <option>Samsung s24</option>
            <option>Samsung A73</option>
            <option>Samsung s23</option>
          </select>
          {modelError && <span style={{ color: "red" }}>{modelError}</span>}
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
          {mobileError && <span style={{ color: "red" }}>{mobileError}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="complaint">Complaint:</label>
          <textarea
            className="form-control"
            id="complaint"
            value={complaint}
            onChange={complaintHandler}
          />
          {complaintError && (
            <span style={{ color: "red" }}>{complaintError}</span>
          )}
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>


      {complaintData.length > 0 && (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>S.No</th>
              <th>Model Name</th>
              <th>Mobile Number</th>
              <th>Complaint</th>
            </tr>
          </thead>
          <tbody>
            {complaintData.map((eachComplaint, ind) => (
              <tr key={ind}>
                <td>{ind + 1}</td>
                <td>{eachComplaint.model}</td>
                <td>{eachComplaint.mobileNumber}</td>
                <td>{eachComplaint.complaint}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}




    </>
  );
};
