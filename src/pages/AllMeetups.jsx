import { useState, useEffect, useContext } from "react";

import MeetupList from "../components/meetups/MeetupList";
import { useMeetup } from "./../store/hooks/hooks";

function AllMeetupsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [meetups, actionsMeetup] = useMeetup();

  useEffect(async () => {
    if (meetups.length === 0) {
      setIsLoading(true);

      const meetupResponese = await fetch("./meetups.json");
      const data = await meetupResponese.json();

      for (const key in data) {
        actionsMeetup.addMeedups({ meetups: data[key] });
      }

      setIsLoading(false);
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
