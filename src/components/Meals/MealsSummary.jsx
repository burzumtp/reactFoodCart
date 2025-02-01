import React from "react";
import classes from "./MealsSummary.module.css";

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Delicious food,Delivered to you</h2>
      <p>
        Choose your favourite meal from our broad selection of available meals
        and enjoy a delicious lunch or dinner at home.
      </p>
      <p>
        All our meals are cooked with hign quality ingredients, just in time and
        0f course by experienced chefs!
      </p>
    </section>
  );
};

export default MealsSummary;
