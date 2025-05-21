import React, { useEffect, useState } from 'react';
import './App.css'; // Import the CSS file

const App = () => {
let [data,setData]=useState(false)
const [TrueState,SetState]=useState(true)
  const [Cart,setCartData]=useState([])
  const handleCategory=(args)=>{

    if (args==="electronics") {
      setData(true)
      SetState(false)
    } else if(args==="Fashion") {
      setData(false)
       SetState(false)
    }
  }
useEffect(()=>{

  // let RawData= JSON.parse(localStorage.getItem("ProductsItems")) || []
  // RawData.push(Cart)
  localStorage.setItem("ProductsItems",JSON.stringify(Cart))
  

// setCartData(RawData)
},[Cart,[]])
  const handleCart=(cartitems)=>{
  if (cartitems  === "mobiles") {
   setCartData(prev=>[...prev,cartitems])
   console.log(Cart)
   
    
  } 
  else if(cartitems === "laptops"){
  setCartData(prev=>[...prev,cartitems])
   console.log(Cart)
  }
  else if(cartitems === "mens"){
  setCartData(prev=>[...prev,cartitems])
   console.log(Cart)
  }
  else if(cartitems === "womens"){
     setCartData(prev=>[...prev,cartitems])
   console.log(Cart)
  }
  

}

let RawData=localStorage.getItem("ProductsItems");


  return (
    <div className="container">

  <div className="button-group">
    <button onClick={() => handleCategory("electronics")} className="category-btn">Electronics</button>
    <button onClick={() => handleCategory("Fashion")} className="category-btn">Fashion</button>
  </div>

  <div className="right-side">
{TrueState ? (
  "Choose Your Category"
) : data ? (
  <div className="subcategory">
    <div className="item-block">
      <p>Mobiles</p>
      <button onClick={() => handleCart("mobiles")} className="add-btn">Add</button>
    </div>
    <div className="item-block">
      <p>Laptops</p>
      <button onClick={() => handleCart("laptops")} className="add-btn">Add</button>
    </div>
  </div>
) : (
  <div className="subcategory">
    <div className="item-block">
      <p>Mens</p>
      <button onClick={() => handleCart("mens")} className="add-btn">Add</button>
    </div>
    <div className="item-block">
      <p>Womens</p>
      <button onClick={() => handleCart("womens")} className="add-btn">Add</button>
    </div>
  </div>
)}


    <div className="cart-section">
      <h1 style={{color:"blue"}}>This Is Your Cart Section</h1>
      {Cart.length === 0 ? (
        <h1 >No items in Cart</h1>
      ) : (
        <ul>
          {Cart.map((x, i) => (
            <h1 key={i}>{x}</h1>
          ))}
        </ul>
      )}
    </div>

  </div>
</div>
  );
};

export default App;

