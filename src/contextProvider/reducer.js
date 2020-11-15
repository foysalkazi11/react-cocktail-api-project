const reducer = (state, action) => {
  if (action.type === "LOADING") {
    return { ...state, isLoading: true };
  }
  if (action.type === "DISPLAY_DATA") {
    let newData;
    if (state.drinkCatagory === "Alcoholic") {
      newData = action.payload
        .filter((data) => data.strAlcoholic !== "Non alcoholic")
        .filter((data) => data.strAlcoholic !== "Optional alcohol");
    }
    if (state.drinkCatagory === "Non alcoholic") {
      newData = action.payload
        .filter((data) => data.strAlcoholic !== "Alcoholic")
        .filter((data) => data.strAlcoholic !== "Optional alcohol");
    }
    if (state.drinkCatagory === "Optional alcohol") {
      newData = action.payload
        .filter((data) => data.strAlcoholic !== "Alcoholic")
        .filter((data) => data.strAlcoholic !== "Non alcoholic");
    }
    if (state.drinkCatagory === "Ordinary Drink") {
      newData = action.payload.filter(
        (data) => data.strAlcoholic !== "Cocktail"
      );
    }
    if (state.drinkCatagory === "Cocktail") {
      newData = action.payload.filter(
        (data) => data.strAlcoholic !== "Ordinary Drink"
      );
    }
    if (state.drinkCatagory === "" || !state.drinkCatagory) {
      newData = action.payload;
    }
    let error;
    if (!newData.length) {
      error = state.isError;
    } else {
      error = "";
    }

    return {
      ...state,
      data: action.payload,
      isLoading: false,
      isError: error,
      catagory: newData
    };
  }
  if (action.type === "NO_DATA") {
    return {
      ...state,
      data: [],
      catagory: [],
      isLoading: false,
      isError: action.payload
    };
  }
  if (action.type === "SINGLE_COCKTAIL") {
    return {
      ...state,

      isLoading: false,
      isError: "",
      singleCocktail: action.payload
    };
  }
  if (action.type === "FILTER_DATA") {
    let newData;
    if (action.payload === "Alcoholic") {
      newData = state.data
        .filter((data) => data.strAlcoholic !== "Non alcoholic")
        .filter((data) => data.strAlcoholic !== "Optional alcohol");
    }
    if (action.payload === "Non alcoholic") {
      newData = state.data
        .filter((data) => data.strAlcoholic !== "Alcoholic")
        .filter((data) => data.strAlcoholic !== "Optional alcohol");
    }
    if (action.payload === "Optional alcohol") {
      newData = state.data
        .filter((data) => data.strAlcoholic !== "Alcoholic")
        .filter((data) => data.strAlcoholic !== "Non alcoholic");
    }
    if (action.payload === "Ordinary Drink") {
      newData = state.data.filter((data) => data.strCategory !== "Cocktail");
    }
    if (action.payload === "Cocktail") {
      newData = state.data.filter(
        (data) => data.strCategory !== "Ordinary Drink"
      );
    }

    if (action.payload === "" || !action.payload) {
      newData = state.data;
    }
    let error;
    if (!newData.length) {
      error = state.isError;
    } else {
      error = "";
    }

    return {
      ...state,
      catagory: newData,
      drinkCatagory: action.payload,
      isError: error
    };
  }
  if (action.type === "ERROR") {
    return { ...state, isError: action.payload, isLoading: false };
  }
  return state;
};

export default reducer;
