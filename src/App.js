import React from 'react';
import Cart from './Cart';
import Navbar from './NavBar';

class App extends React.Component {
  constructor(){
    super();
    this.state={
  products:[
    {name:"Apple",price:100, qty:1,addToCart:false},
    {name:"Banana",price:50, qty:1,addToCart:false},
    {name:"Orange",price:70 , qty:1,addToCart:false},
    {name:"Pineapple",price:150, qty:1,addToCart:false},
  ]}
}
  increaseQty = (product) => {
    this.setState({
      products: this.state.products.map((item) => {
        if (item.name === product.name) {
          return { ...item, qty: item.qty + 1 };
        }
        console.log(item);
        return item;
      }),
    });
  };
  
  decreaseQty=(product)=>{
    this.setState({
      products: this.state.products.map((item) => {
        if(item.qty === 0){
          return item;
        }
        if (item.name === product.name) {
          return { ...item, qty: item.qty - 1 };
        }
        console.log(item);
        return item;
      }),
    });
  }

  totalQty=()=>{
    const {products}=this.state;
    let total=0;
    products.forEach((item)=>{
      if(item.addToCart){
        total+=item.qty;
      }
    })
    return total;
  }

  addToCart=(product)=>{
    this.setState({
      products: this.state.products.map((item) => {
        if (item.name === product.name) {
          return { ...item, addToCart: true };
        }
        console.log(item);
        return item;
      }),
    });
  }

  removeFromCart=(product)=>{
    this.setState({
      products: this.state.products.map((item) => {
        if (item.name === product.name) {
          return { ...item, addToCart: false };
        }
        console.log(item);
        return item;
      }),
    });
  }

    render() {
    return (
      <div>
        <Navbar total={this.totalQty()}/>
        <h1>Shop from it</h1>
        <Cart products={this.state.products}
        increaseQty={this.increaseQty}
        decreaseQty={this.decreaseQty}
        addToCart={this.addToCart}
        removeFromCart={this.removeFromCart}
        />
      </div>
    );
  }
}

export default App;