import { Button, ButtonGroup } from "@mui/material";
import "./CategoryButtons.css";
import { useEffect, useState } from "react";

const CategoryButtons = () => {
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
    <div className="button-group-div">
      <ButtonGroup
        variant="contained"
        aria-label="Basic button group"
        size="large"
        className="button-group"
      >
        {categories.map((category, index) => (
          <Button
            key={index}
            sx={{
              fontFamily: "inherit",
              fontSize: "12px",
            }}
          >
            {capitalizeFirstLetter(category)}
          </Button>
        ))}
      </ButtonGroup>
    </div>
  );
};

export default CategoryButtons;
