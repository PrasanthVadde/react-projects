import { Component } from "react";
import axios from "axios";
import { CustomSpinner } from "../spinners/tailspin";
import { CustomCard } from "../../react-bootstrap/card";

export class FakeStore extends Component {
  state = {
    products: [],
    category: [],
    isLoading: true,
  };

  componentDidMount() {
    this.fetchProducts();
    this.fetchCategories();
  }

  fetchProducts = async () => {
    const { data, status } = await axios.get(
      `https://fakestoreapi.com/products`
    );
    console.log(data);

    if (status === 200) {
      this.setState({
        products: data,
        isLoading: false,
      });
    }
  };

  fetchCategories = async () => {
    const { data, status } = await axios.get(
      `https://fakestoreapi.com/products/categories`
    );
    console.log(data);

    if (status === 200) {
      this.setState({
        category: [...data, "all"],
        isLoading: false,
      });
    }
  };

  categorySelectedHandler = (selectedCategory) => {
    if (selectedCategory === "all") {
      this.fetchProducts();
    } else {
      this.fetchCategoryProducts(selectedCategory);
    }
  };

  fetchCategoryProducts = async (selected) => {
    const { data, status } = await axios.get(
      `https://fakestoreapi.com/products/category/${selected}`
    );

    if (status === 200) {
      this.setState({
        products: data,
      });
    }
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
                      onClick={() => this.categorySelectedHandler(eachCategory)}
                    >
                      {eachCategory}
                    </button>
                  </>
                );
              })}
            </div>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "10px",
                justifyContent: "center",
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
