import type { GroupDetails } from "../types/GroupDetails";

interface GroupCardProps {
  data: GroupDetails;
}

export default function GroupCard({ data }: GroupCardProps) {
  return (
    <div className="groups-card">
      <h4>{data.groupName}</h4>
      <p>
        <span className="important-text">Contact:</span> {data.contactName}
      </p>
      <p>
        <span className="important-text">Phone:</span> {data.phone}
      </p>
      <p>
        <span className="important-text">Email:</span> {data.email}
      </p>
      {data.meetingDetails && (
        <p>
          <span className="important-text">Details:</span> {data.meetingDetails}
        </p>
      )}
    </div>
  );
}
