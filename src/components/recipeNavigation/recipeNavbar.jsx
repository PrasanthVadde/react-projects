import { NavLink } from "react-router-dom";
export const Navbar = () => {

  const style={textDecoder:"none"}
  const liStyle ={margin:"10px"}
  return (
    <nav className="navbar navbar-expand-sm bg-light">
      <div className="container-fluid">
        <ul className="navbar-nav">
          <li className="nav-item" style={liStyle}>
            <NavLink to={"recipe"} style={style}>Recipes</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};