import type { TabItem } from "../../../types/TabItem";
import EducationResourcesTab from "../events-and-outreach-tabs/EducationResourcesTab";
import EventsTab from "../events-and-outreach-tabs/EventsTab";
import RequestAPresentationTab from "../events-and-outreach-tabs/RequestAPresentationTab";

export const eventsAndOutreachTabData: TabItem[] = [
  {
    id: "events",
    title: "Events",
    content: <EventsTab />,
  },
  {
    id: "education-resources",
    title: "Education Resources",
    content: <EducationResourcesTab />,
  },
  {
    id: "request-a-presentation",
    title: "Request a Presentation",
    content: <RequestAPresentationTab />,
  },
];
