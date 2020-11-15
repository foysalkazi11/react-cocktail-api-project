import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="error">
      <h4>No page found</h4>
      <button className="btn">
        <Link to="/">Back Home</Link>
      </button>
    </div>
  );
};

export default Error;
