import { Link, Outlet } from "react-router-dom";

export const CategoryScreen = () => {
  return (
    <>
      <h2>Welcome to Category Page</h2>
      <Link to={"electronics"}>Electronics</Link>
      <Link to={"jewelery"}>jewelery</Link>
      <Outlet />
    </>
  );
};
