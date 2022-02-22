import { createContext, useReducer } from "react";

import reducer from "./reducer";

const initialState = {
  meetups: [],
  favorites: [],
  totalFavorites: 0,
};

const FavoritesContext = createContext(null);

export function FavoritesContextProvider({ children }) {
  return <FavoritesContext.Provider value={useReducer(reducer, initialState)}>{children}</FavoritesContext.Provider>;
}

export default FavoritesContext;
