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
    specificRecipe: [],
    modalShow: false,
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

  ShowMore = (recipe) => {
    this.setState({
      specificRecipe: recipe,
      modalShow: true,
    });
  };

  closeHandler = () => {
    this.setState({
      modalShow: false,
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
              }}
            >
              {this.state.data.map((eachRecipe) => {
                return (
                  <Card style={{ width: "18rem" }} key={eachRecipe.id}>
                    <Card.Img variant="top" src={eachRecipe.image} />
                    <Card.Body>
                      <Card.Title>{eachRecipe.name}</Card.Title>
                      <Card.Text>{eachRecipe.rating}/5</Card.Text>
                      <Card.Text>
                        No.of Persons: {eachRecipe.servings}
                      </Card.Text>
                      <Card.Text>
                        Time: {eachRecipe.prepTimeMinutes} Minutes
                      </Card.Text>
                      <Button
                        variant="primary"
                        onClick={() => this.ShowMore(eachRecipe)}
                      >
                        Show More
                      </Button>
                    </Card.Body>
                  </Card>
                );
              })}
            </div>

            <Modal
              show={this.state.modalShow}
              size="lg"
              aria-labelledby="contained-modal-title-vcenter"
              centered
            >
              <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                  {this.state.specificRecipe.name}
                </Modal.Title>
              </Modal.Header>
              <Modal.Body style={{display:'flex',flexDirection:"column",flexWrap:"wrap"}}>
                <Card.Img variant="top" src={this.state.specificRecipe.image} style={{width:"50%",height:"50%",borderRadius:"16px",alignSelf:"center"}} />
                <p>{this.state.specificRecipe.description}</p>
                <h4>{`Ingredients for:${this.state.specificRecipe.name}`}</h4>
                <CustomList list={this.state.specificRecipe.ingredients} />
                <h4>{`Instructions for:${this.state.specificRecipe.name}`}</h4>
                <CustomList list={this.state.specificRecipe.instructions} />
              </Modal.Body>
              <Modal.Footer>
                <Button onClick={this.closeHandler}>Close</Button>
              </Modal.Footer>
            </Modal>
          </>
        )}
      </>
    );
  }
}
