import React from "react";
import "./card.css";
import { useState } from "react";

const Card = ({ product, addToCart, deleteFromCart }) => {
  const [toggle, setToggle] = useState(false);

  const fn = () => {
    setToggle(false);
  };

  setTimeout(fn, 300);

  return (
    <div className="card g-col-6">
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p className="cost">₹{product.cost}.00</p>
      <button
        onClick={() => {
          addToCart(product.id);
          setToggle(!toggle);
        }}
      >
        Add to Cart
      </button>
      <button onClick={() => deleteFromCart(product.id)}>
        Delete from Cart
      </button>
      <br />
      {toggle && <span>Added!!</span>}
    </div>
  );
};

export default Card;
