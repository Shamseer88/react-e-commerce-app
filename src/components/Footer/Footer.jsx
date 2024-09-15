import { Typography } from "@mui/material";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-div">
      <div className="footer-text">
        <Typography>
          This is an e-commerce webpage catering to both Men and Women, offering
          a variety of product categories for easy navigation. Users can search
          for products, log in to their accounts, add items to their wish list,
          and seamlessly add products to their shopping cart for purchase.
        </Typography>
      </div>
    </div>
  );
};

export default Footer;
