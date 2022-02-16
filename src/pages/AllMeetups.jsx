import { useState, useEffect, useContext } from "react";

import MeetupList from "../components/meetups/MeetupList";
import FavoritesContext from "../store/favorites-context";

function AllMeetupsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const favoritesCtx = useContext(FavoritesContext);

  useEffect(() => {
    if (favoritesCtx.meetups.length === 0) {
      setIsLoading(true);
      fetch("./meetups.json")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          for (const key in data) {            
            favoritesCtx.addMeetupItem(data[key]);
          }

          setIsLoading(false);
        });
    } else setIsLoading(false);
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList meetups={favoritesCtx.meetups} />
    </section>
  );
}

export default AllMeetupsPage;
