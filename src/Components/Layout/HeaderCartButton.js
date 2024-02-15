// import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';
import logo from '../../assets/basket.svg';
import CartContext from '../Store/cart-context';
import { useContext, useEffect, useState } from 'react';
const HeaderCartButton = props =>{
    const cartCtx = useContext(CartContext);
    const {items} = cartCtx;
    const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
    const numOfCartItems = cartCtx.items.reduce((curr, item)=>{return curr+item.amount;},0);
    const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump:''}`;
    //useEffect will keep track of the animation class adding at every 300ms and removing it
    useEffect(()=>{
    if(cartCtx.items.length === 0) return;
    setBtnIsHighlighted(true);
     const timer = setTimeout(()=>{
         setBtnIsHighlighted(false);
     },300);
     return () =>{
     clearTimeout(timer);
     };
   },[items]);
   return <button className={btnClasses} onClick={props.onClick}>
        <span className={classes.icon}>
         <img src={logo} alt="A basket" />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>{numOfCartItems}</span>
    </button>
};

export default HeaderCartButton;