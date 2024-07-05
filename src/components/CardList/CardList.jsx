import ProductCard from "../ProductCard/ProductCard";
import "./CardList.css";

const CardList = () => {
  const getProducts = async () => {
    const response = await fetch(``);
  };
  return (
    <div className="card-list-div">
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  );
};

export default CardList;
