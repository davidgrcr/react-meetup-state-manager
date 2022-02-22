import { useNavigate } from "react-router-dom";
import { useMeetup } from "../store/hooks/hooks";
import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupPage() {
  const navigate = useNavigate();
  const [meetups, meetupActions] = useMeetup();

  function addMeetupHandler(meetupData) {
    meetupActions.addMeedups({ meetups: { ...meetupData, id: `m${meetups.length + 1}` } });
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
