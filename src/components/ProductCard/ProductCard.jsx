import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import "./ProductCard.css";
import { FaHeart } from "react-icons/fa";

const ProductCard = () => {
  return (
    <div style={{ padding: "15px" }}>
      <Card sx={{ maxWidth: 250 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="300"
            image="https://images.bewakoof.com/t1080/women-s-white-oversized-casual-pants-589663-1692782254-1.jpg"
            alt="green iguana"
          ></CardMedia>
          <CardContent style={{ padding: "15px 0 0 15px" }}>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                fontFamily: "inherit",
              }}
            >
              Product Name
            </Typography>
            <Typography
              gutterBottom
              variant="body2"
              component="div"
              sx={{
                color: "#00246b",
                fontFamily: "inherit",
                fontSize: "14px",
                fontWeight: 600,
              }}
            >
              Brand Name
            </Typography>
            <div className="card-price-favorite">
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                sx={{
                  color: "#00246b",
                  fontFamily: "inherit",
                  fontWeight: 600,
                  fontSize: "20px",
                }}
              >
                ₹1299
              </Typography>
              <CardActions disableSpacing>
                <IconButton>
                  <FaHeart />
                </IconButton>
              </CardActions>
            </div>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default ProductCard;
