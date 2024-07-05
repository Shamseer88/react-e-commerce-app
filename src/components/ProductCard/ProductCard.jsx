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
import TextDisplay from "../TextDisplay/TextDisplay";

const ProductCard = ({ name, brand, price, image }) => {
  return (
    <div style={{ padding: "15px" }}>
      <Card sx={{ maxWidth: 250 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="300"
            image={`${image}`}
            alt={`${name}`}
          ></CardMedia>
          <CardContent style={{ padding: "15px 0 0 15px" }}>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                fontFamily: "inherit",
                fontSize: "15px",
              }}
            >
              <TextDisplay text={name} numberOfLetters={25} />
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
              <TextDisplay text={brand} numberOfLetters={15} />
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
                ₹{price}
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
