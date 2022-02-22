import { useContext } from "react";
import FavoritesContext from "./context-reducer";


export const useTotalFavorites = () => {
  const [state] = useContext(FavoritesContext);
  return state.totalFavorites;
};

export const useGetFavorites = () => {
  const [state] = useContext(FavoritesContext);
  return state.favorites;
};

export const useItemIsFavorite = (meetupId) => {
  const [state] = useContext(FavoritesContext);
  return state.favorites.some((meetup) => meetup.id === meetupId);
};

export const useMeetupState = () => {
  const [state] = useContext(FavoritesContext);
  return state.meetups;
};
