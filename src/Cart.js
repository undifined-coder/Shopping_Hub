import React from "react";
import  CartItem from "./CartItem";

function Cart(props) {
    const {products,increaseQty,decreaseQty,addToCart,removeFromCart}=props;

    return (
        <div>
        <h2>Cart</h2>
        {products.map((product) => (
        <CartItem product={product}
        increaseQty={increaseQty}
        decreaseQty={decreaseQty}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        />
        ))}
        </div>
    );
    }

export default Cart;