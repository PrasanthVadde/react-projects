import { Component } from "react";
import axios from "axios";
import { CustomSpinner } from "../spinners/tailspin";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import CustomList from "../list/list";

export class RecipeData extends Component {
  state = {
    data: [],
    isLoading: true,

  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    const { status, data } = await axios.get("https://dummyjson.com/recipes");

    if (status === 200) {
      this.setState({
        data: data.recipes,
        isLoading: false,
      });
    }
  };

  ShowMore = (id) => {
    
    this.state.data.map((recipe) => {
      if (recipe.id == id) {
        console.log(recipe)
        return (
          <>
            <div
              className="modal show"
              style={{ display: "block", position: "initial" }}
            >
              <Modal.Dialog>
                <Modal.Header closeButton>
                  <Modal.Title>{recipe.Name}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                  <Card.Img variant="top" src={recipe.image} />
                </Modal.Body>
                <h2>{`Ingredients for the ${recipe.name}`}</h2>
                <CustomList
                  eachValue={recipe.ingredients}
                  index={recipe.id}
                />
                <h2>{`Instructions for the ${recipe.name}`}</h2>
                <CustomList
                  eachValue={recipe.instructions}
                  index={recipe.id}
                />
              </Modal.Dialog>
            </div>
          </>
        );
      }
      else {
        console.log("No Data"+ recipe.id)
      }
    });
  };

  render() {
    return (
      <>
        {this.state.isLoading ? (
          <CustomSpinner />
        ) : (
          <>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: "10px",
                height:"75vh",
                overflowY:"scroll"
              }}
            >
              {this.state.data.map((eachRecipe) => {
                return (
                  <Card style={{ width: "18rem" }} key={eachRecipe.id}>
                    <Card.Img variant="top" src={eachRecipe.image} />
                    <Card.Body>
                      <Card.Title>{eachRecipe.name}</Card.Title>
                      <Card.Title>{eachRecipe.rating}/5</Card.Title>
                      <Card.Title>
                        No.of Persons: {eachRecipe.servings}
                      </Card.Title>
                      <Card.Title>
                        Time: {eachRecipe.prepTimeMinutes} Minutes
                      </Card.Title>
                      <Button
                        variant="primary"
                        onClick={() => this.ShowMore(eachRecipe.id)}
                      >
                        Show More
                      </Button>
                    </Card.Body>
                  </Card>
                );
              })}
            </div>
          </>
        )}
      </>
    );
  }
}
