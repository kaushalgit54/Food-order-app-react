import React from "react";
import { useState} from 'react';
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";
import CartProvider from "./Components/Store/CartProvider";
function App(){
  const [cartIshShown, setCartIsShown] = useState(false);
  const showCartHandler = ()=>{
    setCartIsShown(true);
  };
  const hideCartHandler = ()=>{
    setCartIsShown(false);
  };
  return (
   <CartProvider>
       {cartIshShown && <Cart onCloseCart={hideCartHandler}/>}
       <Header onCartShow = {showCartHandler}/>
       <main>
         <Meals/>
       </main>
       </CartProvider>
  );
}

export default App;