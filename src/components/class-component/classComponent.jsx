import { Component } from "react";
import { BasicCard } from "../../react-bootstrap/card";
import { Button } from "react-bootstrap";
export class ClassComponent extends Component {
  state = {
    card: [
      { name: "Tulasi", salary: 10000, role: "Angular dev" },
      { name: "ranjith", salary: 20000, role: "React dev" },
    ],
  };

  clickHandler = () => {
    const newData = { name: "Mukesh", role: "Next js dev", salary: 2000 };
    const updatedData = [...this.state.card, newData];

    this.setState({
      card: updatedData,
    });
  };

  removeHandler = (val) => {
    const filteredData = this.state.card.filter((_,id)=> id !== val)
    this.setState({
      card: filteredData,
    });
  };

  render() {
    return (
      <>
        <Button variant="primary" onClick={this.clickHandler}>
          Add Data
        </Button>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "4px",
            justifyContent: "center",
          }}
        >
          {this.state.card.map((eachEmployee, val) => {
            return (
              <div key={val}>
                <BasicCard
                  title={eachEmployee.name}
                  description={eachEmployee.designation}
                  value={"Delete"}
                  ind={val}
                  removeHandler={this.removeHandler}
                />
              </div>
            );
          })}
        </div>
      </>
    );
  }
}
