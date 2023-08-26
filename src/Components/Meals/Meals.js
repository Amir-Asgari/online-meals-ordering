import React, { Fragment } from 'react'
import AvailableMeals from './AvailableMeals'
import MealsSummary from './MealsSummary'

function Meals() {
    return (
        <Fragment>
            <MealsSummary />
            {/* <MealsFilterButton/> */}
            <AvailableMeals />
        </Fragment>
    )
}

export default Meals