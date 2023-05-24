import React from "react";
import Card from "./Card";
import "./product.css";

const Product = ({ products, addToCart, deleteFromCart }) => {
  return (
    <div className="container">
      <div className="products grid text-center">
        {products.map((product) => (
          <Card
            key={product.id}
            product={product}
            addToCart={addToCart}
            deleteFromCart={deleteFromCart}
          />
        ))}
      </div>
    </div>
  );
};

export default Product;
