import React from 'react'
import Card from '../UI/Card'

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

    const Meals = Dummy_meals.map((meal, index) => (
        <div >
            <li>{meal.name}</li>
            <li>{meal.description}</li>
            <li>{meal.price}</li>
        </div>
    ))
    console.log(Meals);
    return (
        <section >
            <Card >
                <ul>{Meals} </ul>
            </Card>
        </section>
    )
}

export default AvailableMeals