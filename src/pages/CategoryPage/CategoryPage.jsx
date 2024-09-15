import { useParams } from "react-router-dom";
import "./CategoryPage.css";
import { useState } from "react";

const CategoryPage = () => {
  const { subCategory } = useParams();
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      const response = await fetch(
        `https://academics.newtonschool.co/api/v1/ecommerce/clothes/products?filter={"subCategory":"${subCategory}"}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            projectId: "ulwb3huij7ys",
          },
        }
      );
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setProducts(data.data);
    } catch (error) {
      console.log("Error fetching category products", error);
    }
  };

  useEffect(() => {
    getProducts();
  }, [subCategory]);
  return (
    <div>
      <h2>{subCategory}</h2>
    </div>
  );
};

export default CategoryPage;
