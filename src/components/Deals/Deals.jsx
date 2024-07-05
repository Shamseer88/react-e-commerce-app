import "./Deals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";

const Deals = ({ gender, sellerTag, deal }) => {
  const projectId = "ulwb3huij7ys";
  const fetchLink = `https://academics.newtonschool.co/api/v1/ecommerce/clothes/products?filter={"sellerTag":"${sellerTag}","gender":"${gender}"}&limit=50`;

  const [dealProducts, setDealProducts] = useState([]);

  const getDealProducts = async () => {
    try {
      const response = await fetch(fetchLink, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          projectId: projectId,
        },
      });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setDealProducts(data.data);
    } catch (error) {
      console.log("Error fetching products with deals!", error);
    }
  };
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  useEffect(() => {
    getDealProducts();
  }, [fetchLink]);
  return (
    <div className="deals-div">
      <h2 className="deals-h2">{deal}</h2>
      <div className="slider-container">
        <Slider {...settings}>
          {dealProducts.map((product) => (
            <ProductCard
              name={product.name}
              brand={product.brand}
              image={product.displayImage}
              price={product.price}
              key={product._id}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Deals;
