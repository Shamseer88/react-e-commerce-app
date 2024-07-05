import "./Women.css";
import TopNavbar from "../components/TopNavbar";
import BottomNavbar from "../components/BottomNavbar";
import { Pagination } from "@mui/material";
import ProductCard from "../components/ProductCard/ProductCard";
import CardList from "../components/CardList/CardList";

const Men = () => {
  const baseDomain = "https://academics.newtonschool.co";
  return (
    <>
      <TopNavbar />
      <BottomNavbar />
      <CardList />
      <div className="pagination-div">
        <Pagination count={10} variant="outlined" color="primary" />
      </div>
    </>
  );
};

export default Men;
