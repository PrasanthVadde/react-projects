import { Component } from "react";
import { employeeDetails } from "../data/employeesData";
import { BasicCard } from "../../react-bootstrap/card";
export class ClassComponent extends Component {
  state = {
    card: [],
  };

  

  render() {
    return (
      <div style={{display:"flex", flexWrap:"wrap",gap:"4px",justifyContent:"center"}}>

        {
            employeeDetails.map((eachEmployee,val)=>{
                return(
                    <div key={val}>
                     <BasicCard title={eachEmployee.name} description={eachEmployee.designation} value={"Delete"}/>
                    </div>
                )
            })
        }



      </div>
    );
  }
}
