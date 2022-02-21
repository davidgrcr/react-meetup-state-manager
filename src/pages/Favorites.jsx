import { useTotalFavorites, useFavorites } from "../store/favorites-context";
import MeetupList from "../components/meetups/MeetupList";

function FavoritesPage() {
  const totalFavorites = useTotalFavorites();
  const favorites = useFavorites();
  const content =
    totalFavorites === 0 ? <p>You got no favorites yet. Start adding some?</p> : <MeetupList meetups={favorites} />;

  return (
    <section>
      <h1>My Favorites</h1>
      {content}
    </section>
  );
}

export default FavoritesPage;
