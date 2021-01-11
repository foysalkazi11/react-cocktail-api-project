import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../contextProvider/Content";
const Cocktail = () => {
  const { isLoading, isError, catagory, dispatch } = useGlobalContext();

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
    <div className="cocktail-container">
      {!catagory.length
        ? dispatch({ type: "ERROR", payload: "No cocktail found" })
        : catagory.map((drink) => {
            const {
              idDrink,
              strDrink,
              strAlcoholic,

              strDrinkThumb,
              strGlass
            } = drink;
            return (
              <div className="inv-cocktail" key={idDrink}>
                <img src={strDrinkThumb} alt="strDrinkThumb" />
                <div className="inv-cocktail-info">
                  <h4>{strDrink}</h4>
                  <h5>{strGlass}</h5>
                  <p>{strAlcoholic}</p>
                  <button>
                    <Link to={`/singleCocktail/${idDrink}`}>Details</Link>
                  </button>
                </div>
              </div>
            );
          })}
    </div>
  );
};

export default Cocktail;
