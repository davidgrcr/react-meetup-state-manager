import { useState, useEffect, useContext } from "react";

import MeetupList from "../components/meetups/MeetupList";
import { useAddMeetupItem, useMeetups } from "../store/favorites-context";

function AllMeetupsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const meetups = useMeetups();
  const addMeetupItem = useAddMeetupItem();

  useEffect(() => {
    if (meetups.length === 0) {
      setIsLoading(true);
      fetch("./meetups.json")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          for (const key in data) {
            addMeetupItem(data[key]);
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
      <MeetupList meetups={meetups} />
    </section>
  );
}

export default AllMeetupsPage;
