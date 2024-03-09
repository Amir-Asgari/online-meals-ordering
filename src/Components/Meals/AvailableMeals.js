import React, { useEffect, useState } from "react";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";
import Spinner from "../UI/Spinner/Spinner";
import ComboBox from "../UI/SearchMeals.js/SearchMeals";
import axios from "axios";

function AvailableMeals() {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState(null);
  const [filter, setFilter] = useState("all");
  const [SelectedMeal, setSelectedMeal] = useState();

  useEffect(() => {
    fetchMeals()

  }, []);

  const fetchMeals = async () => {
    const response = await axios.get(
      "https://react-http-23a17-default-rtdb.firebaseio.com/meals.json"
    );
    try {
      const responseData = response.data;
      const loadedMeals = [];

      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
          image: responseData[key].image,
          type: responseData[key].type,
          rating:responseData[key].rating,
        });
      }
      setMeals(loadedMeals);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setHttpError("something went wrong");
    }
  };
  const FilterMealsHandler = (event) => {
    setFilter(event);
  };

  const FilteredMeals =
    filter === "all" ? meals : meals.filter((meal) => meal.type === filter);

  const Meals = FilteredMeals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
      image={meal.image}
      rating={meal.rating}
    />
  ));

  const handleChange = (event, newValue) => {
    setSelectedMeal(newValue);
    console.log(SelectedMeal);
  };

  return (
    <section className={classes.section}>
      <Card>
        <div className={classes.buttonGroup}>
          <button onClick={() => FilterMealsHandler("all")}>همه</button>
          <button onClick={() => FilterMealsHandler("pizza")}>پیتزا</button>
          <button onClick={() => FilterMealsHandler("sandwich")}>
            ساندویچ
          </button>
          <button
            style={{ marginRight: "10px" }}
            onClick={() => FilterMealsHandler("salad")}
          >
            سالاد
          </button>
          <ComboBox
            meals={FilteredMeals.map((meal) => meal.name)}
            handleChange={handleChange}
          />
        </div>
        {isLoading && !httpError ? (
          <h3 style={{ display: "flex", justifyContent: "center" }}>
            <Spinner />
          </h3>
        ) : (
          <ul style={{ with: "90%" }}>{Meals} </ul>
        )}
        {httpError ? (
          <div>
            <div>{SelectedMeal}</div>
            <div className={classes.httpError}> {httpError} </div>
            <div className={classes.httpError}>
              <h3 style={{ fontSize: "14px" }}>
                please connect to proxy and reload the page.{" "}
              </h3>
            </div>
          </div>
        ) : null}
      </Card>
    </section>
  );
}
export default AvailableMeals;
