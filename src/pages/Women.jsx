import "./Women.css";
import TopNavbar from "../components/TopNavbar";
import BottomNavbar from "../components/BottomNavbar";
import { Pagination } from "@mui/material";
import Deals from "../components/Deals/Deals";

const Women = () => {
  return (
    <>
      <TopNavbar />
      <BottomNavbar />
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
