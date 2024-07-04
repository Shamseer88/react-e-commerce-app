import React from "react";
import { NavLink } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div>
      <h1>Page not found</h1>
      <button>
        <NavLink to="/">Back to Home</NavLink>
      </button>
    </div>
  );
};

export default NotFoundPage;
