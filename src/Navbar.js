import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <NavLink to="/" className="logo">
        <span>Design</span> System
      </NavLink>
      <ul className="navbar">
        <li>
          <NavLink to="/" activeClassName="active">
            Buttons
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/colors" activeClassName="active">
            Colors
          </NavLink>
        </li>
        <li>
          <NavLink to="/typography" activeClassName="active">
            Typography
          </NavLink>
        </li>
        <li>
          <NavLink to="/spaces" activeClassName="active">
            Spaces
          </NavLink>
        </li>
        <li>
          <NavLink to="/inputs" activeClassName="active">
            Inputs
          </NavLink>
        </li>
        <li>
          <NavLink to="/grid" activeClassName="active">
            Grid
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default Navbar;
