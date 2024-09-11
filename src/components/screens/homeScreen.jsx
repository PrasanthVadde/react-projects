import { withProfile } from "../hoc/withProfile";
import { RecipeData } from "../recipeListing/recipeData";

 const HomeScreen = ({profile}) => {

  return (
    <>
    <h1>Welcome to home Screen {profile.firstName}</h1>
      <RecipeData />
    </>
  );
};

export default withProfile(HomeScreen)