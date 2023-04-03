import React from "react";
import "./Error.scss";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className="Page_404">
      <div className="container">
        <div className="four_zero_four_bg">
          <h2 className="text-center ">404</h2>
        </div>

        <div className="contant_box_404">
          <h3>Look like you're lost</h3>

          <p>the page you are looking for not avaible!</p>

          <Link to="/" className="link_404 btn-primary">
            Go to Home
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Error;
