import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const ProductsScreen = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");

      if (response.status == 200) {
        setProducts(response.data);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <h2>products Screen</h2>

      {products.length > 0 && (
        <>
          {products.map((each) => (
            <>
              <h2>
                {each.id}.{each.title}{" "}
                <button>
                  <Link to={`${each.id}`}>View More</Link>
                </button>
              </h2>
            </>
          ))}
        </>
      )}
    </>
  );
};
