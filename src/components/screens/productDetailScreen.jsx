import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { userDetails } from "../navigation/navigationStack";

export const DetailedProductScreen = () => {
  const [productData, setProductData] = useState({});
  const {darkHandler} = useContext(userDetails)
  const dynamicPath = useParams();

  useEffect(() => {
    fetchData();
  }, [dynamicPath]);
  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://fakestoreapi.com/products/${dynamicPath.productID}`
      );

      if (response.status == 200) {
        setProductData(response.data);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <h2>Detailed Product screen</h2>

      {Object.keys(productData).length > 0 && (
        <>
          <div style={{backgroundColor:darkHandler?"black":"white"}}>
          <h2 style={{color:darkHandler?"white":"black"}}>{productData.title}</h2>
          <img src={productData.image} width={100} height={100} />
          <p style={{color:darkHandler?"white":"black"}}>{productData.description}</p>
          </div>
        </>
      )}
    </>
  );
};
