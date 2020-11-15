import React from "react";

import { About, Home, Error } from "./pages/Allpages";
import { Navbar, SingleCocktail } from "./components/AllComponents";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="section">
      <Router>
        <Navbar />
        <Switch>
          <Route exact children={<Home />} path="/" />
          <Route children={<About />} path="/about" />

          <Route children={<SingleCocktail />} path="/singleCocktail/:id" />
          <Route children={<Error />} path="*" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
