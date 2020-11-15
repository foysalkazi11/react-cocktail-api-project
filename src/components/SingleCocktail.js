import React, { useEffect, useCallback } from "react";
import DisplaySingleCocktail from "../components/DisplaySingleCocktail";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useGlobalContext } from "../contextProvider/Content";
const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=`;
const SingleCocktail = () => {
  const { singleCocktail, dispatch, isLoading, isError } = useGlobalContext();
  const { id } = useParams();

  console.log(singleCocktail);

  const fatch = useCallback(async () => {
    dispatch({ type: "LOADING" });
    try {
      const response = await axios(`${url}${id}`);
      dispatch({ type: "SINGLE_COCKTAIL", payload: response.data.drinks });
    } catch (error) {
      dispatch({ type: "ERROR", payload: error.message });
    }
  }, [id]);

  useEffect(() => {
    fatch();
  }, [id, fatch]);

  if (isLoading) {
    return (
      <div className="alert">
        <h2>Loading...</h2>
      </div>
    );
  }
  if (isError) {
    return (
      <div className="alert">
        <h4>{isError}...</h4>
      </div>
    );
  }
  return (
    <div className="singleCocktail">
      <DisplaySingleCocktail singleCocktail={singleCocktail} />
    </div>
  );
};

export default SingleCocktail;
