import { ADD_FAV, FILTER, ORDER, REMOVE_FAV, RESET } from "../redux/types";

const initialState = {
  myFavorites: [],
  allCharacters: [],
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_FAV:
      return { ...state, myFavorites: payload, allCharacters: payload };
    case REMOVE_FAV:
      return { ...state, myFavorites: payload };
    case FILTER: {
      const filteredNewFilter = state.allCharacters.filter(
        (myFavorito) => myFavorito.gender === payload
      );
      return {
        ...state,
        myFavorites: filteredNewFilter,
      };
    }
    case RESET: {
      return {
        ...state,
        myFavorites: [...state.allCharacters],
      };
    }
    case ORDER: {
      const sortNewOrder = state.allCharacters.sort((a, b) => {
        if (a.id > b.id) {
          return "Ascendente" === payload ? -1 : 1;
        }
        if (a.id < b.id) {
          return "Descendente" === payload ? -1 : 1;
        }
        return 0;
      });
      return {
        ...state,
        myFavorites: sortNewOrder,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};

export default reducer;
