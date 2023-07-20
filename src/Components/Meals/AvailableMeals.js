import React, { useEffect, useState } from "react";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const Dummy_meals = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Sushi2",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m4",
    name: "Schnitzel3",
    description: "A german specialty!",
    price: 16.5,
  },
];

function AvailableMeals() {
  const [meals, setMeals] = useState([]);
//   useEffect(() => {
//     const fetchMeals = async () => {
//       const response = await fetch(
//         "https://react-http-6b4a6.firebase.com/meals.json"
//       );
//       const responseData = await response.json();

//       const loadedMeals = [];

//       for (const key in responseData) {
//         loadedMeals.push({
//           id: key,
//           name: responseData[key].name,
//           description: responseData[key].description,
//           price: responseData[key].price,
//         });
//       }
//       setMeals(loadedMeals);
//     };
//     fetchMeals();
//   }, []);

  const Meals = Dummy_meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section>
      <Card>
        <ul style={{ with: "20rem" }}>{Meals} </ul>
      </Card>
    </section>
  );
}
export default AvailableMeals;
