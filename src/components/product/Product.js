import React from "react";
import "./Product.scss";
import dummyImg from "../../assets/naruto.jpeg";

const Product = () => {
  return (
    <div className="Product">
      <div className="product-container">
        <div className="product-img">
          <div className="img-container">
            <img src={dummyImg} id="img" alt="dummyimg" />
          </div>
        </div>
        <div className="product-info">
          <p className="title">Delux Wall Manager 23", 23x23 Solid Color</p>
          <p className="price">₹ 549 </p>
        </div>
      </div>
    </div>
  );
};

export default Product;
