import { Component } from "react";
import axios from "axios";
import { CustomSpinner } from "../spinners/tailspin";
import CustomList from "../list/list";
// import { CustomCard } from "../../react-bootstrap/card";
export class Recipe extends Component {
  state = {
    recipe: [],
    loading: true,
    error: false,
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    const { status, data } = await axios.get("https://dummyjson.com/recipes");

    if (status === 200) {
      this.setState({
        recipe: data.recipes,
        loading: false,
      });
    }
  };

  render() {
    return (
      <>
        <h2>Recipes List</h2>

        {this.state.loading ? <CustomSpinner /> : 
          <>
            {
            this.state.recipe.map((eachRecipe) => {
              return (
            
                <div key={eachRecipe.id}>
                  <h3>{eachRecipe.name}</h3>
                  <img src={eachRecipe.image} width={100} height={100}/>
                  <h3>{`Ingredients for ${eachRecipe.name}`}</h3>
                  <CustomList list={eachRecipe.ingredients}  />
                  <h3>{`Instructions for ${eachRecipe.name}`}</h3>
                  <CustomList list={eachRecipe.instructions}  />
                </div>
              );
            })
            }
          </>
        }
      </>
    );
  }
}
