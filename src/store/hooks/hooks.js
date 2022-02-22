import meetupActions from "../actions";
import FavoritesContext from "../context-reducer";
import { useContext } from "react";
import { useMeetupState } from "../selectors";

const bindDispatchToActions = (actions, dispatch) => {
  const mappedActions = {};
  for (let key in actions) {
    const action = actions[key];
    if (typeof action === "function") {
      if (action instanceof Promise) {
        mappedActions[key] = function (payload = {}) {
          return action(payload, dispatch);
        };
      } else {
        mappedActions[key] = function (params) {
          return dispatch(action.apply(this, [params, dispatch]));
        };
      }
    }
  }
  return mappedActions;
};

export const useDispatchWithContext = () => {
  const [, dispatch] = useContext(FavoritesContext);
  return dispatch;
};

export const useMeetupActions = (actions) => {
  const [, dispatch] = useContext(FavoritesContext);
  return bindDispatchToActions(actions, dispatch);
};

export const useMeetup = () => {
  const state = useMeetupState();
  const actions = useMeetupActions(meetupActions);

  return [state, actions];
};
