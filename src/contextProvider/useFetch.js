import axios from "axios";

const useFetch = async (url, dispatch) => {
  dispatch({ type: "LOADING" });
  try {
    const response = await axios(url);
    if (response.data.drinks === null) {
      dispatch({ type: "NO_DATA", payload: "No seach cocktail found" });
    } else {
      dispatch({ type: "DISPLAY_DATA", payload: response.data.drinks });
    }
  } catch (error) {
    dispatch({ type: "ERROR", payload: error.message });
  }
};
export default useFetch;
