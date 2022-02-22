import { ADD_FAVORITES, REMOVE_FAVORITES, GET_FAVORITES, GET_MEETUPS, ADD_MEETUPS } from "./actionTypes";

const reducer = (state, action) => {
  switch (action.type) {
    case ADD_FAVORITES:
      return {
        ...state,
        totalFavorites: state.totalFavorites + 1,
        favorites: [...state.favorites, action.payload],
      };
    case REMOVE_FAVORITES:
      return {
        ...state,
        totalFavorites: state.totalFavorites - 1,
        favorites: state.favorites.filter((meetup) => meetup.id !== action.payload),
      };
    case GET_FAVORITES:
      return {
        ...state.favorites,
      };
    case GET_MEETUPS:
      return {
        ...state.meetups,
      };
    case ADD_MEETUPS:
      return {
        ...state,
        meetups: [...state.meetups, action.payload.meetups],
      };
    default:
      return state;
  }
};

export default reducer;
