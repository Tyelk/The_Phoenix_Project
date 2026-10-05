import type { TabItem } from "../../../types/TabItem";
import CounsellingServiceTab from "../get-support-tabs/CounsellingServiceTab";
import InformationServiceTab from "../get-support-tabs/InformationServiceTab";
import PatientGrantsTab from "../get-support-tabs/PatientGrantsTab";
import ProstFitTab from "../get-support-tabs/ProstFitTab";
import SupportGroupsTab from "../get-support-tabs/SupportGroupsTab";

export const getSupportTabData: TabItem[] = [
  {
    id: "support-groups",
    title: "Support Groups",
    content: <SupportGroupsTab />,
  },
  {
    id: "information-service",
    title: "Information Service",
    content: <InformationServiceTab />,
  },
  {
    id: "counselling-service",
    title: "Counselling Service",
    content: <CounsellingServiceTab />,
  },
  {
    id: "patient-grants",
    title: "Patient Grants",
    content: <PatientGrantsTab />,
  },
  {
    id: "prost-fit",
    title: "Prost-Fit",
    content: <ProstFitTab />,
  },
];
