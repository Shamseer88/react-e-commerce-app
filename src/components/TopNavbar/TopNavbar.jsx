import { NavLink } from "react-router-dom";
import "./TopNavbar.css";

const TopNavbar = () => {
  return (
    <div className="topnavbar">
      <div className="topnavbar-left">
        <NavLink to="/men">MEN</NavLink>
      </div>
      <div className="topnavbar-right">
        <NavLink to="/women">WOMEN</NavLink>
      </div>
    </div>
  );
};

export default TopNavbar;
