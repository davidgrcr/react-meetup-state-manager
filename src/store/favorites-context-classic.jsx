import { createContext, useState } from "react";
import MeetupItem from "../components/meetups/MeetupItem";

const FavoritesContextReducer = createContext({
  meetups: [],
  addMeetupItem: (meetupItem) => {},
  favorites: [],
  totalFavorites: 0,
  addFavorite: (favoriteMeetup) => {},
  removeFavorite: (meetupId) => {},
  itemIsFavorite: (meetupId) => {},
});

export function FavoritesContextReducerProvider(props) {
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

  const context = {
    meetups: userMeetups,
    addMeetupItem: addMeetupItemHandler,
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    itemIsFavorite: itemIsFavoriteHandler,
  };

  return <FavoritesContextReducer.Provider value={context}>{props.children}</FavoritesContextReducer.Provider>;
}

export default FavoritesContext;
