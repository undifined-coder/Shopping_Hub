import React from "react";

function CartItem(props) {   
    const {product,increaseQty,decreaseQty}=props;
    return (
        <div style={
            { border: "1px solid black",
             margin: "10px",
              padding: "10px" 
              ,height:"150px",
              width:"250px",
              display:"flex",
              flexDirection:"row",}}>
                <div>
            <h3>{product.name}</h3>
            <h4>Price: {product.price}</h4>
            <h4>{product.qty}</h4>
            </div>
            <div style={{margin:"auto"}}>
            <div style={{margin:"10px"}}>
            <button style={{ marginLeft: "10px" }} onClick={() => increaseQty(product)}>+</button>
            <button style={{ marginLeft: "10px" }} onClick={()=>decreaseQty(product)}>-</button>
            </div>
            <button style={{marginTop:"10px"}} onClick={()=>props.addToCart(product)}>Add to Cart</button>
            <button style={{marginTop:"10px"}} onClick={()=>props.removeFromCart(product)}>Remove from Cart</button>
            </div>
        </div>
    );
}

export default CartItem;