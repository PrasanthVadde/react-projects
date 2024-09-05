import { Route, Routes } from "react-router-dom"
import { DetailedRecipe } from "./detailedRecipeScreen"
import { Navbar } from "./recipeNavbar"
import { RecipeNavigation } from "./recipeNavigation"



export const RecipeNavigationStack =()=>{

    return(
        <>
        <Navbar/>
        <Routes>
        <Route path="/recipe" element={<RecipeNavigation/>} />
            <Route
              path="recipe/:recipeId"
              element={<DetailedRecipe />}
            />

        
          </Routes>
        </>
    )
}