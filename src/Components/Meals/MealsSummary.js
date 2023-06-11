import React, { Fragment } from 'react'
import Card from '../UI/Card'

function MealsSummary(props) {
    return (
        <Fragment >
        <Card width='200' >
            <h1>Delicious Food, Delivered To You</h1>
            <p>
                Choose your favorite meal from our broad selection of available meals
                and enjoy a delicious lunch or dinner at home.
            </p>
            <p>
                All our meals are cooked with high-quality ingredients, just-in-time and
                of course by experienced chefs!
            </p>
        </Card>
        </Fragment>

    )
}

export default MealsSummary