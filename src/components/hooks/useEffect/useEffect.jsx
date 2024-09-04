import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { ReusableTable } from "../../table/reusableTable";

export const UseEffect = () => {
  const [data, setData] = useState([]);

  const [type, setType] = useState("products");

  useEffect(() => {
    fetchData();
  }, [type]);



  const fetchData = async () => {
    try {
      const { data, status } = await axios.get(
        `https://fakestoreapi.com/${type}`
      );
      if (status == 200) {
        setData(data);
      }
      
    } catch (err) {
      console.error(err);
    }
  };

  const changeTypeHandler = (eachType) => {
    setType(eachType);
  };
  const heading = data.length > 0 ? Object.keys(data[0]) : []
  console.log(data)
  return (
    <>
      <h3>Use Effect Example</h3>

      {["products", "carts", "users"].map((eachType) => (
        <>
          <button onClick={() => changeTypeHandler(eachType)}>
            {eachType}
          </button>
        </>
      ))}
    <ReusableTable heading={heading} rowData={data}/>
    </>
  );
};
