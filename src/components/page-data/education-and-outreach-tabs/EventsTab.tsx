import GroupSearch from "../../GroupSearch";
import { EVENTS_DATA } from "../data/EventsData";

export default function EventsTab() {
  return (
    <>
      <div className="content-main-area-header">
        <h1>Events</h1>
      </div>

      <div className="content-main-area-body">
        <GroupSearch dataSet={EVENTS_DATA} />
      </div>
    </>
  );
}
