import { Fragment } from "react";
import MealsSummary from "./MealsSummary";
import AvailableMeals from "./AvailableMeals";
// import Card from '../UI/Card';

const Meals = (props) => {
    return(
        <Fragment>
           
            <MealsSummary/>
            <AvailableMeals/>
    
           
        </Fragment>
    )
}
export default Meals;