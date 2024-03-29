import classes from './Header.module.css';
import {Fragment} from 'react';
import mealsImage from '../../assets/meals.jpg';
import HeaderCartButton from './HeaderCartButton';
const Header = props =>{
return <Fragment>
    <header className={classes.header}>
        <h1>Food Plaza</h1>
       <HeaderCartButton onClick={props.onCartShow}></HeaderCartButton>
    </header>
    <div className={classes['main-image']}>
        <img src={mealsImage} alt="A table full of delicious food" />
    </div>
    </Fragment>
};
export default Header;
