import React from 'react'
import Card from '../UI/Card'
import MealItem from './MealItem/MealItem';

const Dummy_meals = [
    {
        id: 'm1',
        name: 'Sushi',
        description: 'Finest fish and veggies',
        price: 22.99
    },
    {
        id: 'm2',
        name: 'Schnitzel',
        description: 'A german specialty!',
        price: 16.5,
    }
]
function AvailableMeals() {

    const Meals = Dummy_meals.map((meal) => (
        <MealItem
            key={meal.id}
            id={meal.id}
            name={meal.name}
            description={meal.description}
            price={meal.price}
        />
    ))
    return (
        <section >
            <Card >
                <ul style={{with:'20rem'}}>{Meals} </ul>
            </Card>
        </section>
    )
}
export default AvailableMeals;