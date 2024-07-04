import "./NotFoundPage.css";
import { NavLink } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="notfound-div">
      <h1>Page not found</h1>
      <NavLink to="/">Back to Home</NavLink>
    </div>
  );
};

export default NotFoundPage;
