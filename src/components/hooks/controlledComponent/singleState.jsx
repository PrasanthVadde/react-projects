import { useState } from "react";
import { states } from "./info";
import { CustomTable } from "../../table/reusableTable";

export const SingleState = () => {
    const initialForm ={
        model: "",
        mobileNumber: "",
        state:""
      }
  const [formData, setFormData] = useState(initialForm);
//   const [formError, setFormError] = useState({
//     modelErr: "",
//     mobileErr: "",
//   });

  const [submittedData,setSubmittedData]=useState([])

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });

    switch (name) {
      case "model":
        break;
      case "mobileNumber":
        break;

    }

  };

  const onSubmit = (event) => {
    event.preventDefault();
    const newFormData ={
        data1 : formData.model,
        data2 : formData.mobileNumber,
        data3 : formData.state 
    }
    setSubmittedData([...submittedData,newFormData])
    setFormData(initialForm)
  };

  return (
    <>
    <h1>Samsung Service Form</h1>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="userName">Model Name:</label>
          <input
            type="text"
            className="form-control"
            name="model"
            value={formData.model}
            onChange={changeHandler}
          />
          {/* {formError.modelErr && (
            <span style={{ color: "red" }}>{formError.modelErr}</span>
          )} */}
        </div>

        <div className="form-group">
          <label htmlFor="mobile">Mobile number:</label>
          <input
            name="mobileNumber"
            type="number"
            className="form-control"
            id="mobile"
            value={formData.mobileNumber}
            onChange={changeHandler}
          />
          {/* {formError.mobileErr && (
            <span style={{ color: "red" }}>{formError.mobileErr}</span>
          )} */}
        </div>


          <select value={formData.state} onChange={changeHandler} name="state"> 
          <option value="">Select a state</option>
            {
                states.map((eachState,ind)=>{
                    return(
                        <option value={eachState.name} key={ind}>{eachState.name}</option>
                    )
                })
            }
          </select>



        <button type="submit" className="btn btn-default">
          Submit
        </button>
      </form>


      <CustomTable rowData={submittedData}/>
    </>
  );
};
