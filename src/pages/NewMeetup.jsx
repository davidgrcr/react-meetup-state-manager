import { useNavigate } from "react-router-dom";

import { useContext } from "react";

import FavoritesContext from "../store/favorites-context";

import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupPage() {
  const navigate = useNavigate();
  const favoritesCtx = useContext(FavoritesContext);

  function addMeetupHandler(meetupData) {
    favoritesCtx.addMeetupItem({ ...meetupData, id: `m${favoritesCtx.meetups.length + 1}` });
    navigate("/");
  }

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewMeetupPage;
