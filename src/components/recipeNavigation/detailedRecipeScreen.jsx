import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CustomCard } from "../../react-bootstrap/card";

export const DetailedRecipe = () => {
  const [recipe, setRecipe] = useState({});

  const dynamicPath = useParams();

  useEffect(() => {
    fetchData();
  }, [dynamicPath]);
  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://dummyjson.com/recipes/${dynamicPath.recipeId}`
      );

      if (response.status == 200) {
        setRecipe(response.data);
      }
      setTimeout(() => {
        console.log(recipe);
      }, 1000);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <h2>Detailed Recipe Screen</h2>

      {Object.keys(recipe).length > 0 && (
        <>
          <CustomCard source={recipe.image} title={recipe.name} />
        </>
      )}
    </>
  );
};
