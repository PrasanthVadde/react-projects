import axios from "axios";
import { useEffect, useState } from "react";
import { ReusableTable } from "../table/reusableTable";

export const RecipeNavigation = () => {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetchData();
  }, [query]);

  const fetchData = async () => {
    try {
      const response = await axios.get(`https://dummyjson.com/recipes/search?q=${query}`);
      if (response.status == 200) {
        setData(response.data.recipes);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const inputHandler = (event) => {
    setQuery(event.target.value);
  };

  const heading = data.length > 0 ? Object.keys(data[0]) : [];

  return (
    <>
      <h2>Recipe Home</h2>
      <input type="text" value={query} onChange={inputHandler} />
      <ReusableTable heading={heading} rowData={data} />
    </>
  );
};
