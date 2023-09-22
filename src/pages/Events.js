import { Link } from "react-router-dom";

const DUMMY_EVENTS = [
  {
    id: "e1",
    title: "Some event1",
  },
  {
    id: "e2",
    title: "Some event2",
  },
  {
    id: "e3",
    title: "Some event3",
  },
  {
    id: "e4",
    title: "Some event4",
  },
  {
    id: "e5",
    title: "Some event5",
  },
  {
    id: "e6",
    title: "Some event6",
  },
];
function EventsPage() {
  return (
    <>
      <h1>EventsPage</h1>
      <ul>
        {DUMMY_EVENTS.map(
          (event) => (
            <li key={event.id}>
              <Link to={event.id}>{event.title}</Link>
            </li>
          ))
        }
      </ul>
    </>
  );
}

export default EventsPage;
