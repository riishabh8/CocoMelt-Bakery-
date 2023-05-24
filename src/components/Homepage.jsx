import React from "react";
import products from "../Products";
import { useState } from "react";
import Search from "./Search";
import Cart from "./Cart";
import Product from "./Product";
import "./homepage.css";
import Footer from "./Footer.jsx";

function Homepage() {
  //************************************************************************ */

  const [cartItems, setCartItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [cartToggle, setCartToggle] = useState(false);

  //************************************************************************ */
  //************************************************************************ */


  // Functions Related to Search 
  const handleSearch = (value) => {
    setSearchTerm(value);
  };

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase())
  );
  //************************************************************************ */
  //************************************************************************ */
  
  //Functions Related to the cart -> add , delete and toggle 

  const addToCart = (productId) => {
    const existingItem = cartItems.find((item) => item.productId === productId);

    if (existingItem) {
      const updatedCartItems = cartItems.map((item) => {
        if (item.productId === productId) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      setCartItems(updatedCartItems);
    } else {
      const newItem = { productId, quantity: 1 };
      setCartItems([...cartItems, newItem]);
    }
  };

  const deleteFromCart = (productId) => {
    const updatedCartItems = cartItems.filter(
      (item) => item.productId !== productId
    );
    setCartItems(updatedCartItems);
  };

  const checkout = () => {
    console.clear();
    console.log("Checkout:", cartItems);
  };

  const handleToggle = () => {
    setCartToggle(!cartToggle);
  };

  //************************************************************************ */

  return (
    <div>
      <h1>Welcome to CocoMelt Bakery!</h1>
      <Search handleSearch={handleSearch} />

      <Product
        products={filteredProducts}
        addToCart={addToCart}
        deleteFromCart={deleteFromCart}
      />

      {cartToggle && (
        <Cart
          cartItems={cartItems}
          products={products}
          deleteFromCart={deleteFromCart}
          checkout={checkout}
        />
      )}
      <button className="cartToggler" onClick={handleToggle}>
        Cart {cartItems.length}
      </button>

      <Footer />
    </div>
  );
}

export default Homepage;
