import React, {
  useEffect,
  useReducer,
  useContext,
  createContext,
  useState,
  useCallback
} from "react";
import reducer from "./reducer";

import axios from "axios";
const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const initialState = {
  isLoading: false,
  isError: "",
  data: [],
  singleCocktail: [],
  catagory: [],
  drinkCatagory: ""
};
const dataProvider = createContext();
const Content = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [search, setsearch] = useState("a");

  const fatchData = useCallback(async () => {
    dispatch({ type: "LOADING" });
    try {
      const response = await axios(`${url}${search}`);
      if (response.data.drinks === null) {
        dispatch({ type: "NO_DATA", payload: "No seach cocktail found" });
      } else {
        dispatch({ type: "DISPLAY_DATA", payload: response.data.drinks });
      }
    } catch (error) {
      dispatch({ type: "ERROR", payload: error.message });
    }
  }, [search]);

  useEffect(() => {
    fatchData();
  }, [search, fatchData]);

  return (
    <dataProvider.Provider value={{ ...state, dispatch, setsearch }}>
      {children}
    </dataProvider.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(dataProvider);
};

export { useGlobalContext, Content };
