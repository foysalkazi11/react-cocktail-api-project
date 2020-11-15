import React from "react";
import { Link } from "react-router-dom";

const DisplaySingleCocktail = ({ singleCocktail }) => {
  return (
    <>
      {singleCocktail.map((drink) => {
        const {
          dateModified,
          idDrink,
          strDrink,
          strAlcoholic,
          strCategory,
          strDrinkThumb,
          strGlass,
          strInstructions,
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
          strIngredient5,
          strIngredient6,
          strIngredient7,
          strIngredient8,
          strIngredient9,
          strIngredient10
        } = drink;
        const ingredient = [
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
          strIngredient5,
          strIngredient6,
          strIngredient7,
          strIngredient8,
          strIngredient9,
          strIngredient10
        ];
        return (
          <div className="single-cocktail-container" key={idDrink}>
            <h2>{strDrink}</h2>
            <div className="underline"></div>
            <div className="single-cocktail-info">
              <img src={strDrinkThumb} alt="drink Img" />
              <div className="cocktail-info">
                <p>
                  <span>Modified Data : </span> {dateModified.slice(0, 10)}
                </p>
                <p>
                  <span>Name : </span> {strDrink}
                </p>
                <p>
                  <span>Glass : </span> {strGlass}
                </p>
                <p>
                  <span>Catagory : </span> {strCategory}
                </p>
                <p>
                  <span>Alcoholic : </span> {strAlcoholic}
                </p>
                <p>
                  <span>Ingredient : </span>
                  {ingredient.map((ing, index) => {
                    return ing ? <span key={index}>{`${ing} `}</span> : null;
                  })}
                </p>
                <p>Instructions : {strInstructions}</p>
                <button>
                  <Link to="/">Back Home</Link>
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default DisplaySingleCocktail;
