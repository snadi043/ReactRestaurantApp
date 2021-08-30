import {useContext} from 'react';
import classes from './headerCardButton.module.css';
import CartIcon from '../Cart/CartIcon';
import CartContext from '../../store/cart-context';

const HeaderCartButton = (props) => {
const cartCtx = useContext(CartContext);

const numberOfCartItems = cartCtx.items.reduce((curNum, item) => {
    return curNum  + item.amount;
}, 0);

    return(
        <button className={classes.button} onClick={props.onClick}>
        <span className={classes.icon}>
            <CartIcon/>
        </span>
        <span >
            Your Cart
        </span>
        <span className={classes.badge}>{numberOfCartItems}</span>
        </button>
    )
}
export default HeaderCartButton;