import React, { useEffect, useState } from "react";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

import sushi from "../../Assets/sushi.jpg";
import pasta from "../../Assets/pasta.jpg";
import fish from "../../Assets/fish-and-chips.jpg";
import past from "../../Assets/pasta.jpg";

// const Dummy_meals = [
//   {
//     id: "m1",
//     name: "Sushi",
//     description: "Finest fish and veggies",
//     price: 22.99,
//     image:sushi,
//   },
//   {
//     id: "m2",
//     name: "Schnitzel",
//     description: "A german specialty!",
//     price: 16.5,
//     image: pasta,
//   },
//   {
//     id: "m3",
//     name: "Sushi2",
//     description: "Finest fish and veggies",
//     price: 22.99,
//     image:fish ,
//   },
//   {
//     id: "m4",
//     name: "Schnitzel3",
//     description: "A german specialty!",
//     price: 16.5,
//     image:sushi,
//   },
// ];

function AvailableMeals() {
  const [meals, setMeals] = useState([]);
  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(
        "https://react-http-23a17-default-rtdb.firebaseio.com/meals.json"
      );
      const responseData = await response.json();
        console.log(responseData);
      const loadedMeals = [];

      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }
      setMeals(loadedMeals);
    };
    fetchMeals();
  }, []);

  const Meals = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
      image={meal.image}
    />
  ));
  return (
    <section>
      <Card>
        <ul style={{ with: "90%" }}>{Meals} </ul>
      </Card>
    </section>
  );
}
export default AvailableMeals;
