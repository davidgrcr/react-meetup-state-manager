import { createContext, useState, useContext } from "react";

const useCtxFavorites = () => {
  const [userFavorites, setUserFavorites] = useState([]);
  const [userMeetups, setUserMeetups] = useState([]);

  function addFavoriteHandler(favoriteMeetup) {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.concat(favoriteMeetup);
    });
  }

  function removeFavoriteHandler(meetupId) {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.filter((meetup) => meetup.id !== meetupId);
    });
  }

  function itemIsFavoriteHandler(meetupId) {
    return userFavorites.some((meetup) => meetup.id === meetupId);
  }

  function addMeetupItemHandler(meetup) {
    setUserMeetups((prevUserMeetups) => {
      return prevUserMeetups.concat(meetup);
    });
  }

  return {
    meetups: userMeetups,
    addMeetupItem: addMeetupItemHandler,
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    itemIsFavorite: itemIsFavoriteHandler,
  };
};

const FavoritesContext = createContext(null);

export function FavoritesContextProvider({ children }) {
  return <FavoritesContext.Provider value={useCtxFavorites()}>{children}</FavoritesContext.Provider>;
}

export default FavoritesContext;

export const useAddMeetupItem = () => useContext(FavoritesContext).addMeetupItem;
export const useMeetups = () => useContext(FavoritesContext).meetups;
export const useTotalFavorites = () => useContext(FavoritesContext).totalFavorites;
export const useFavorites = () => useContext(FavoritesContext).favorites;
export const useItemIsFavorite = (meetupId) => useContext(FavoritesContext).itemIsFavorite(meetupId);
export const useRemoveFavorite = () => useContext(FavoritesContext).removeFavorite;
export const useAddFavorite = () => useContext(FavoritesContext).addFavorite;

