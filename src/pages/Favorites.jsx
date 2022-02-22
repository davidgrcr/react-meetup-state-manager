import { useTotalFavorites, useGetFavorites } from "./../store/selectors";
import MeetupList from "../components/meetups/MeetupList";

function FavoritesPage() {
  const favorites = useGetFavorites();
  const totalFavorites = useTotalFavorites();

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
