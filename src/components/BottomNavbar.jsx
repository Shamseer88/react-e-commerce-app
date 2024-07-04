import { NavLink } from "react-router-dom";
import "./BottomNavbar.css";
import { FaOpencart, FaUser, FaHeart, FaShoppingCart } from "react-icons/fa";
import { Badge } from "@mui/material";

const BottomNavbar = () => {
  return (
    <div className="bottom-navbar">
      <div className="logo">
        <NavLink to="/">
          <FaOpencart size={50} className="logo-icon" />
        </NavLink>
      </div>
      <div className="menu"></div>
      <div className="menu-badges">
        <Badge badgeContent={0} color="info">
          <FaUser size={25} />
        </Badge>
        <Badge badgeContent={5} color="secondary">
          <FaHeart size={25} />
        </Badge>
        <Badge badgeContent={5} color="primary">
          <FaShoppingCart size={25} />
        </Badge>
      </div>
    </div>
  );
};

export default BottomNavbar;
