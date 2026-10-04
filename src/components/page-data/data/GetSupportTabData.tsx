import type { TabItem } from "../../../types/TabItem";
import ProstFitTab from "../get-support-tabs/ProstFitTab";
import SupportGroupsTab from "../get-support-tabs/SupportGroupsTab";

export const getSupportTabData: TabItem[] = [
  {
    id: "gs1",
    title: "Support Groups",
    content: <SupportGroupsTab />,
  },
  {
    id: "gs2",
    title: "Prostate Cancer",
    content: <></>,
  },
  {
    id: "gs3",
    title: "stuff",
    content: <></>,
  },
  {
    id: "gs4",
    title: "stuff",
    content: <></>,
  },
  {
    id: "gs5",
    title: "Prost-Fit",
    content: <ProstFitTab />,
  },
  {
    id: "gs6",
    title: "stuff",
    content: <></>,
  },
];
