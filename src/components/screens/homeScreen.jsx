import { withProfile } from "../hoc/withProfile";
import { useAxios } from "../hooks/customHooks/useAxios";
import { RecipeData } from "../recipeListing/recipeData";

 const HomeScreen = ({profile}) => {


  const[recipes,error,loading]=useAxios('https://dummyjson.com/recipes')
  console.log(recipes,"recipes")

  if(loading){
    return <h2>loading please Wait....</h2>
  }
  if(error){
    return <h2>{JSON.stringify(error)}</h2>
  }

  return (
    <>
    <h1>Welcome to home Screen {profile.firstName}</h1>
      <RecipeData />
    </>
  );
};

export default withProfile(HomeScreen)