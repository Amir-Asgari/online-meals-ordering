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
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState(null)

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(
        "https://react-http-23a17-default-rtdb.firebaseio.com/meals.json"
      );

      if (!response.ok) {
        throw new Error('something went wrong');
      }

      const responseData = await response.json();

      const loadedMeals = [];

      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
          image: responseData[key].image,
        });
      }
      setMeals(loadedMeals);
      setIsLoading(false)
    };

    fetchMeals().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    })
    // try {
    //   fetchMeals();
    // } catch (error) {
    //   setIsLoading(false)
    //   setHttpError(error.massage)
    // }
  }, []);


  if (httpError) {
    return (
      <section>
        <p>{httpError}</p>
      </section>
    )
  }

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

        {isLoading ? (
          <h3> is Loading ... </h3>
        ) : (
          <ul style={{ with: "90%" }}>{Meals} </ul>
        )}


      </Card>
    </section>
  );
}
export default AvailableMeals;
