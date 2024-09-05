import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const DetailedProductScreen = () => {
  const [productData, setProductData] = useState({});

  const dynamicPath = useParams();
  console.log(dynamicPath);

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
          <h2>{productData.title}</h2>
          <img src={productData.image} width={100} height={100} />
          <p>{productData.description}</p>
        </>
      )}
    </>
  );
};
