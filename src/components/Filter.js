import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../contextProvider/Content";

const Filter = () => {
  const { dispatch } = useGlobalContext();
  const [drinkCatagory, setdrinkCatagory] = useState("");
  useEffect(() => {
    dispatch({ type: "FILTER_DATA", payload: drinkCatagory });
    //eslint-disable-next-line
  }, [drinkCatagory]);

  return (
    <div className="filter">
      <form>
        <label htmlFor="filter">Filter by :</label>
        <select
          className="alcoholic"
          onChange={(e) => setdrinkCatagory(e.target.value)}
        >
          <option value="">Alcohol</option>
          <option value="Alcoholic">Alcoholic</option>
          <option value="Non alcoholic">Non alcoholic</option>
          <option value="Optional alcohol">Optional alcohol</option>
        </select>
        <select
          className="catagory"
          onChange={(e) => setdrinkCatagory(e.target.value)}
        >
          <option value="">Drink</option>
          <option value="Ordinary Drink">Ordinary Drink</option>
          <option value="Cocktail">Cocktail</option>
        </select>
      </form>
    </div>
  );
};

export default Filter;
