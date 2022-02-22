import { ADD_MEETUPS, ADD_FAVORITES, REMOVE_FAVORITES } from "./actionTypes";

import { useDispatchWithContext } from "./hooks/hooks";

const meetupActions = {
  addMeedups: (meetup) => ({
    type: ADD_MEETUPS,
    payload: meetup,
  }),
};

export const useFavoriteActions = () => {
  const dispatch = useDispatchWithContext();

  return {
    addFavorite: (meetup) =>
      dispatch({
        type: ADD_FAVORITES,
        payload: meetup,
      }),
    removeFavorite: (id) =>
      dispatch({
        type: REMOVE_FAVORITES,
        payload: id,
      }),
  };
};

export default meetupActions;
