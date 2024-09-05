import { NavLink } from "react-router-dom";
export const SideNavbar = () => {

    const imgStyle ={borderRadius:"8px",height:"64px"}
    const navItems ={fontSize :"24px", textDecoration:"none"}

  return (
    <>
      <nav className="navbar">
        <div className="container-fluid">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to={"/"}><img src="/blogger.svg" style={imgStyle}/></NavLink>
            </li>
            <li className="nav-item" style={navItems}>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li className="nav-item"  style={navItems}>
              <NavLink to={"/about"}>About</NavLink>
            </li>
            <li className="nav-item"  style={navItems}>
              <NavLink to={"/product"}>product</NavLink>
            </li>
            <li className="nav-item"  style={navItems}>
              <NavLink to={"/category"}>category</NavLink>
            </li>
            <li className="nav-item"  style={navItems}>
              <NavLink to={"/contact"}>Contact</NavLink>
            </li>
            <li className="nav-item"  style={navItems}>
              <NavLink to={"/settings"}>Settings</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
