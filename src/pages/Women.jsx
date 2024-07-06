import "./Women.css";
import TopNavbar from "../components/TopNavbar/TopNavbar";
import BottomNavbar from "../components/BottomNavbar/BottomNavbar";
import { Pagination } from "@mui/material";
import Deals from "../components/Deals/Deals";
import Hero from "../components/Hero/Hero";

const Women = () => {
  return (
    <>
      <TopNavbar />
      <BottomNavbar />
      <Hero gender="women" />
      <Deals
        gender="Women"
        sellerTag="new arrival"
        deal="New Arrival for Women"
      ></Deals>
      <Deals
        gender="Women"
        sellerTag="top rated"
        deal="Top Rated for Women"
      ></Deals>
      <div className="pagination-div">
        <Pagination count={10} variant="outlined" color="primary" />
      </div>
    </>
  );
};

export default Women;
