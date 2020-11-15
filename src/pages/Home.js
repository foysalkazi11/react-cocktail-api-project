import React from "react";

import { Cocktail, SearchCocktail } from "../components/AllComponents";

const Home = () => {
  return (
    <section className="home">
      <SearchCocktail />
      <Cocktail />
    </section>
  );
};

export default Home;
