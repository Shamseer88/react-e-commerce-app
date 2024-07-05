import { NavLink } from "react-router-dom";
import "./BottomNavbar.css";
import { FaOpencart, FaUser, FaHeart, FaShoppingCart } from "react-icons/fa";
import { Badge } from "@mui/material";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import { useEffect, useState } from "react";

const BottomNavbar = () => {
  const projectId = "ulwb3huij7ys";
  const [categories, setCategories] = useState([]);
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  const getCategories = async () => {
    try {
      const response = await fetch(
        "https://academics.newtonschool.co/api/v1/ecommerce/clothes/categories",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            projectId: projectId,
          },
        }
      );
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setCategories(data.data);
    } catch (error) {
      console.log("Error fetching categories", error);
    }
  };
  useEffect(() => {
    getCategories();
  }, []);
  return (
    <div className="bottom-navbar">
      <div className="logo">
        <NavLink to="/">
          <FaOpencart size={50} className="logo-icon" />
        </NavLink>
      </div>
      <div className="menu">
        <PopupState variant="popover" popupId="demo-popup-menu">
          {(popupState) => (
            <>
              <Button
                variant="text"
                {...bindTrigger(popupState)}
                sx={{
                  color: "#00246b",
                  fontFamily: "inherit",
                  fontWeight: 600,
                }}
              >
                Categories
              </Button>
              <Menu
                {...bindMenu(popupState)}
                MenuListProps={{
                  sx: {
                    width: "200px",
                  },
                }}
              >
                {categories.map((category, index) => (
                  <MenuItem
                    onClick={popupState.close}
                    key={index}
                    sx={{
                      color: "#00246b",
                      fontFamily: "inherit",
                      fontSize: "14px",
                    }}
                  >
                    {capitalizeFirstLetter(category)}
                  </MenuItem>
                ))}
              </Menu>
            </>
          )}
        </PopupState>
      </div>
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
