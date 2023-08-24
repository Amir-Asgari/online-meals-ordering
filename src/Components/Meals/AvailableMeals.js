import React, { useEffect, useState } from "react";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";
import Spinner from "../UI/Spinner/Spinner";
import ComboBox from "../UI/SearchMeals.js/SearchMeals";

// import sushi from "../../Assets/sushi.jpg";
// import pasta from "../../Assets/pasta.jpg";
// import fish from "../../Assets/fish-and-chips.jpg";
// import past from "../../Assets/pasta.jpg";

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
  const [httpError, setHttpError] = useState(null);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(
        "https://react-http-23a17-default-rtdb.firebaseio.com/meals.json"
      );

      if (!response.ok) {
        throw new Error("something went wrong");
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
          type: responseData[key].type,
        });
      }
      setMeals(loadedMeals);
      setIsLoading(false);
    };

    fetchMeals().catch((error) => {
      setIsLoading(false);
      setHttpError("something went wrong");
      console.log(httpError);
    });
    // try {
    //   fetchMeals();
    // } catch (error) {
    //   setIsLoading(false)
    //   setHttpError(error.massage)
    // }
  }, []);
  // if (httpError) {
  //   return (
  //     <section>
  //       <p>{httpError}</p>
  //     </section>
  //   )
  // }

  const FilterMealsHandler = (event) => {
    setFilter(event);
  };

  const FilteredMeals =
    filter === "all" ? meals : meals.filter((meal) => meal.type === filter);
  console.log(meals);

  const Meals = FilteredMeals.map((meal) => (
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
        <div className={classes.buttonGroup}>
          <button onClick={() => FilterMealsHandler("all")}>All meals</button>
          <button onClick={() => FilterMealsHandler("meat")}>Meat</button>
          <button onClick={() => FilterMealsHandler("sandwich")}>Sandwich</button>
          <button style={{ marginRight: '10px' }} onClick={() => FilterMealsHandler("Vegetarian")}>
            Vegetarian
          </button>
          <ComboBox meals={FilteredMeals.map(meal => meal.name)} />
        </div>
        {isLoading && !httpError ? (
          <h3 style={{ display: "flex", justifyContent: "center" }}>
            {" "}
            <Spinner />{" "}
          </h3>
        ) : (
          <ul style={{ with: "90%" }}>{Meals} </ul>
        )}
        {httpError ? (
          <div>
            <div className={classes.httpError}> {httpError} </div>
            <div className={classes.httpError}>
              {" "}
              <h3 style={{ fontSize: "14px" }}>
                {" "}
                please connect to proxy and reload the page.{" "}
              </h3>{" "}
            </div>
          </div>
        ) : null}
      </Card>
    </section>
  );
}
export default AvailableMeals;
