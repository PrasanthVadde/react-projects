import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { userDetails } from "../navigation/navigationStack";

export const ProductsScreen = () => {
  const { userName, salary,count } = useContext(userDetails);

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
      <h5>count {count}</h5>
      <h5>Salary {salary}</h5>
      <h5>Hello {userName}</h5>
      {products.length > 0 && (
        <>
          {products.map((each) => (
            <>
              <h2>
                {each.id}.{each.title}
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
