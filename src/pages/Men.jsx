import "./Women.css";
import TopNavbar from "../components/TopNavbar";
import BottomNavbar from "../components/BottomNavbar";
import { Pagination } from "@mui/material";

const Men = () => {
  return (
    <>
      <TopNavbar />
      <BottomNavbar />
      <div className="pagination-div">
        <Pagination count={10} variant="outlined" color="primary" />
      </div>
    </>
  );
};

export default Men;
