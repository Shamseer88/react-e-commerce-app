import "./Women.css";
import TopNavbar from "../components/TopNavbar";
import BottomNavbar from "../components/BottomNavbar";
import { Pagination } from "@mui/material";
import Deals from "../components/Deals/Deals";

const Men = () => {
  const baseDomain = "https://academics.newtonschool.co";
  return (
    <>
      <TopNavbar />
      <BottomNavbar />
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
