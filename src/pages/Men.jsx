import "./Women.css";

import BottomNavbar from "../components/BottomNavbar/BottomNavbar";
import { Pagination } from "@mui/material";
import Deals from "../components/Deals/Deals";
import Hero from "../components/Hero/Hero";
import TopNavbar from "../components/TopNavbar/TopNavbar";

const Men = () => {
  const baseDomain = "https://academics.newtonschool.co";
  return (
    <>
      <TopNavbar />
      <BottomNavbar />
      <Hero gender="men" />
      <Deals
        gender="Men"
        sellerTag="new arrival"
        deal="New Arrivals for Men"
      ></Deals>
      <Deals
        gender="Men"
        sellerTag="top rated"
        deal="Top Rated for Men"
      ></Deals>
      <div className="pagination-div">
        <Pagination count={10} variant="outlined" color="primary" />
      </div>
    </>
  );
};

export default Men;
