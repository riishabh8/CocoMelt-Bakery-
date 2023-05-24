import React from "react";
import "./cart.css";
import { useState } from "react";

const Cart = ({ cartItems, products, deleteFromCart, checkout }) => {
  let totalCost = 0;
  return (
    <div className="cart">
      <h4>Cart Item:{cartItems.length}</h4>
      <ul>
      {/* Finding the product from productsArray to get the id and cost */}
        {cartItems.map((itemId) => {
          const product = products.find((item) => item.id === itemId.productId);
          totalCost += product.cost * itemId.quantity;
          return (
            <li key={itemId}>
              {product.name}*{itemId.quantity}
              <button onClick={() => deleteFromCart(product.id)}>
                <i class="fa-solid fa-trash icon"></i>
              </button>
            </li>
          );
        })}
      </ul>
      <h5>Total:₹{totalCost}</h5>
      <button className="checkout" onClick={checkout}>Checkout</button>
    </div>
  );
};

export default Cart;
