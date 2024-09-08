import { NavLink } from "react-router-dom";
export const Navbar = () => {
  const style = { textDecoder: "none" };
  const liStyle = { margin: "10px" };
  return (
    <nav className="navbar navbar-expand-sm bg-light">
      <div className="container-fluid">
        <ul className="navbar-nav">
          <li className="nav-item" style={liStyle}>
            <NavLink to={"/"} style={style}>
              Home
            </NavLink>
          </li>
          <li className="nav-item" style={liStyle}>
            <NavLink to={"about"} style={style}>
              about
            </NavLink>
          </li>
          <li className="nav-item" style={liStyle}>
            <NavLink to={"category"} style={style}>
              Category
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};
