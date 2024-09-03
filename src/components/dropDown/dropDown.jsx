import { useState } from "react";

const countryStates = {
  India: ["Delhi", "Mumbai", "Kolkata"],
  USA: ["New York", "California", "Texas"],
  UK: ["London", "Manchester", "Birmingham"],
};

const countries = ["India", "USA", "UK"];

export const DropDown = () => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [states, setStates] = useState([]);

  const handleCountryChange = (event) => {
    const country = event.target.value;
    setSelectedCountry(country);
    setStates(countryStates[country]);
  };

  return (
    <>
      <select onChange={handleCountryChange} value={selectedCountry}>
        <option value="">Select Country</option>
        {countries.map((eachCountry, index) => {
          return (
            <option key={index} value={eachCountry}>
              {eachCountry}
            </option>
          );
        })}
      </select>

      <select>
        <option value="">Select State</option>
        {states.map((state, index) => (
          <option key={index} value={state}>
            {state}
          </option>
        ))}
      </select>
    </>
  );
};
