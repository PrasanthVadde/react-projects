import { useContext } from "react";
import { Weather } from "../weather/weather";
import { userDetails } from "../navigation/navigationStack";

export const SettingsScreen =()=>  {
  const { darkHandler, salaryHandler, counterHandler,} = useContext(userDetails);
  return (
    <>
      <div style={{ display: "flex", width: "50%", height: "100%" }}>
        <Weather />
      </div>
      <br />
      <button onClick={darkHandler} style={{ width: "100px" }}>
        Theme
      </button>
      <br />
      <button onClick={salaryHandler} style={{ width: "100px" }}>
        salary
      </button>
      <br />
      <button   onClick={() => counterHandler("INCREMENT")}  style={{ width: "100px" }}>
        INCREMENT
      </button>
      <br />
      <button   onClick={() => counterHandler("DECREMENT")} style={{ width: "100px" }}>
        DECREMENT
      </button>
      <br />
      <button  onClick={() => counterHandler("RESET")} style={{ width: "100px" }}>
        RESET
      </button>
    </>
  );
};
