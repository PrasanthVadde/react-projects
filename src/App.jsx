import { BrowserRouter } from "react-router-dom";

import { RecipeNavigationStack } from "./components/recipeNavigation/recipeNavigationStack";


function App() {
  return (
    <>
     <BrowserRouter>
     <RecipeNavigationStack/>
     </BrowserRouter>
    </>
  );
}

export default App;
