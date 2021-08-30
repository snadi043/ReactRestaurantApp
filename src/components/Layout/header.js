
import {React, Fragment} from 'react';
import mealsImage from '../../Assets/meals.jpeg';
import classes from './header.module.css';
import HeaderCartButton from './headerCartButton';


const Header = (props) => {

return(
    <Fragment>
        <header className={classes.header}>
            <h1>Indian Meals</h1>
            <HeaderCartButton onClick={props.onShowChart}/>
        </header>
        <div className={classes['main-image']}>
        <img  src={mealsImage} alt="Table Full of Tasty Food"/>
        </div>
       
    </Fragment>
)
}
export default Header;