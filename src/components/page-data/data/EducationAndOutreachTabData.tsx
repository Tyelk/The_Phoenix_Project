import type { TabItem } from "../../../types/TabItem";
import EducationResourcesTab from "../education-and-outreach-tabs/EducationResourcesTab";
import EventsTab from "../education-and-outreach-tabs/EventsTab";
import RequestAPresentationTab from "../education-and-outreach-tabs/RequestAPresentationTab";

export const educationAndOutreachTabData: TabItem[] = [
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
