import { useState } from "react";
export const BtnType = () => {
  const generateButtons = () => {
    const buttons = [];
    for (let i = 1; i <= 100; i++) {
      buttons.push(
        <button key={i} style={{ width: "100%" }}>
          Button {i}
        </button>
      );
    }
    return buttons;
  };

  const [type] = useState(generateButtons);
  const [BtnType, setBtnType] = useState("null");

  const typeHandler = (typeId) => {
    const BtnType = typeId % 2 == 0 ? "Even" : "Odd";
    setBtnType(BtnType);
  };
  return (
    <>
      <h1>Button is :{BtnType}</h1>
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {type.map((eachType, ind) => {
          return (
            <button
              key={ind}
              style={{ width: "150px" }}
              onClick={() => typeHandler(ind + 1)}
            >
              {eachType}
            </button>
          );
        })}
      </div>
    </>
  );
};
