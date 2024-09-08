import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { userDetails } from "../navigation/navigationStack";
export const SideNavbar = () => {
  const imgStyle = { borderRadius: "8px", height: "64px" };
  const navItems = { fontSize: "24px", color: "pink", textDecoration: "none" };
  const { darkTheme } = useContext(userDetails);
  return (
    <>
      <nav
        className={`navbar h-100 navbar-${
          darkTheme ? "dark" : "transparent"
        } bg-${darkTheme ? "dark" : "transparent"}`}
      >
        <div className="container-fluid">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to={"/"}>
                <img src="/blogger.svg" style={imgStyle} />
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink style={navItems} to={"/"}>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink style={navItems} to={"/about"}>
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink style={navItems} to={"/product"}>
                product
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink style={navItems} to={"/category"}>
                category
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink style={navItems} to={"/contact"}>
                Contact
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink style={navItems} to={"/settings"}>
                Settings
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
