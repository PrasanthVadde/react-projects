import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { globalCounter } from "../navigation/navigationStack";
import {
  decrementAction,
  incrementAction,
  resetAction,
} from "../navigation/counterHelper";
import { useAxios } from "../hooks/customHooks/useAxios";

export const CategoryScreen = () => {
  const { dispatch } = useContext(globalCounter);

  const[categories,error,loading]=useAxios("https://fakestoreapi.com/products/categories")
  console.log(categories,"categories")

  const incrementHandler = () => {
    dispatch(incrementAction);
  };

  const decrementHandler = () => {
    dispatch(decrementAction);
  };

  const resetHandler = () => {
    dispatch(resetAction);
  };

  return (
    <>
      <h2>Welcome to Category Page</h2>
      <Link to={"electronics"}>Electronics</Link>
      <Link to={"jewelery"}>jewelery</Link>
      <Outlet />

      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={resetHandler}>Reset</button>
      </div>
    </>
  );
};
