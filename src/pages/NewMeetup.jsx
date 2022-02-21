import { useNavigate } from "react-router-dom";

import { useAddMeetupItem, useMeetups } from "../store/favorites-context";

import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupPage() {
  const navigate = useNavigate();
  const addMeetupItem = useAddMeetupItem();
  const meetups = useMeetups();

  function addMeetupHandler(meetupData) {
    addMeetupItem({ ...meetupData, id: `m${meetups.length + 1}` });
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
