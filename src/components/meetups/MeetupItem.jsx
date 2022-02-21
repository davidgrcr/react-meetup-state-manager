import Card from "../ui/Card";
import classes from "./MeetupItem.module.css";

import { useItemIsFavorite, useRemoveFavorite, useAddFavorite } from "../../store/favorites-context";

function MeetupItem(props) {
  const itemIsFavorite = useItemIsFavorite(props.id);
  const removeFavorite = useRemoveFavorite();
  const addFavorite = useAddFavorite();

  function toggleFavoriteStatusHandler() {
    if (itemIsFavorite) {
      removeFavorite(props.id);
    } else {
      addFavorite({
        id: props.id,
        title: props.title,
        description: props.description,
        image: props.image,
        address: props.address,
      });
    }
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavoriteStatusHandler}>
            {itemIsFavorite ? "Remove from Favorites" : "To Favorites"}
          </button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
