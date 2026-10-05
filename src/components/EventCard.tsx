import type { EventDetails } from "../types/EventDetails";

interface EventCardProps {
  data: EventDetails;
}

export default function EventCard({ data }: EventCardProps) {
  return (
    <div key={data.id} className="groups-card">
      <h4>{data.eventName}</h4>
      <p>
        <span className="important-text">Event:</span> {data.eventName}
      </p>
      <p>
        <span className="important-text">Date:</span> {data.eventDate}
      </p>
      <p>
        <span className="important-text">Time:</span> {data.eventTime}
      </p>
      {data.eventDetails && (
        <p>
          <span className="important-text">Details:</span> {data.eventDetails}
        </p>
      )}
    </div>
  );
}
