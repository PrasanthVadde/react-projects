import { Component } from "react";
import axios from "axios";
import { CustomSpinner } from "../spinners/tailspin";
import { CustomCard } from "../../react-bootstrap/card";

export class FakeStore extends Component {
  state = {
    products: [],
    category: [],
    filterData: [],
    isLoading: true,
    error: false,
    selectedCategory: "",
  };

  componentDidMount() {
    this.fetchData();
    this.fetchCategory();
    this.filterCategory();
  }

  fetchData = async () => {
    try {
      const { status, data } = await axios.get(
        "https://fakestoreapi.com/products"
      );
      if (status === 200) {
        this.setState({
          products: data,
          isLoading: false,
        });
      }
    } catch (error) {
      this.setState({
        error: error.message,
        isLoading: false,
      });
    }
  };

  fetchCategory = async () => {
    try {
      const { status, data } = await axios.get(
        "https://fakestoreapi.com/products/categories/"
      );

      if (status === 200) {
        this.setState({
          category: data,
          isLoading: false,
        });
      }
    } catch (error) {
      this.setState({
        error: error.message,
        isLoading: false,
      });
    }
  };

  filterCategory = async (category) => {
    try {
      const { status, data } = await axios.get(
        `https://fakestoreapi.com/products/category/${category}`
      );
      console.log(data);
      if (status === 200) {
        this.setState({
          filterData: data,
          isLoading: false,
        });
      }
    } catch (error) {
      this.setState({
        error: error.message,
        isLoading: false,
      });
    }
  };

  filterDataHandler = (e) => {
    const selectedCategory = e.target.value;
    this.setState(
      {
        selectedCategory: selectedCategory,
      },
      () => {
        this.filterCategory(selectedCategory);
      }
    );
  };

  render() {
    return (
      <>
        {this.state.isLoading ? (
          <CustomSpinner />
        ) : (
          <>
            <div
              style={{ display: "flex", justifyContent: "center", gap: "10px" }}
            >
              {this.state.category.map((eachCategory) => {
                return (
                  <>
                    <button
                      style={{
                        width: "150px",
                        height: "50px",
                        border: "none",
                        borderRadius: "4px",
                      }}
                      value={eachCategory}
                      onClick={this.filterDataHandler}
                    >
                      {eachCategory}
                    </button>
                  </>
                );
              })}

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "10px",
                  justifyContent: "space-evenly",
                }}
              >
                {this.state.filterData.map((eachItem) => (
                  <CustomCard
                    key={eachItem.id}
                    title={eachItem.title}
                    source={eachItem.image}
                    description={eachItem.description}
                    price={`$${eachItem.price}`}
                  />
                ))}
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "10px",
                justifyContent: "space-evenly",
              }}
            >
              {this.state.products.map((eachItem) => {
                return (
                  <CustomCard
                    key={eachItem.id}
                    title={eachItem.title}
                    source={eachItem.image}
                    description={eachItem.description}
                    price={`$ ${eachItem.price}`}
                  />
                );
              })}
            </div>
          </>
        )}
      </>
    );
  }
}
