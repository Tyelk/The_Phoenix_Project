import type { TabItem } from "../../../types/TabItem";
import GettingDiagnosedTab from "../prostate-info-tabs/GettingDiagnosedTab";
import GettingTestedTab from "../prostate-info-tabs/GettingTestedTab";
import ProstateCancerTab from "../prostate-info-tabs/ProstateCancerTab";
import ProstateTab from "../prostate-info-tabs/ProstateTab";
import TreatmentsTab from "../prostate-info-tabs/TreatmentsTab";

export const prostateInfoTabData: TabItem[] = [
  {
    id: "pi1",
    title: "The Prostate",
    content: <ProstateTab />,
  },
  {
    id: "pi2",
    title: "Prostate Cancer",
    content: <ProstateCancerTab />,
  },
  {
    id: "pi3",
    title: "Getting Tested",
    content: <GettingTestedTab />,
  },
  {
    id: "pi4",
    title: "Getting Diagnosed",
    content: <GettingDiagnosedTab />,
  },
  {
    id: "pi5",
    title: "Treatments",
    content: <TreatmentsTab />,
  },
  {
    id: "pi6",
    title: "stuff",
    content: <></>,
  },
  {
    id: "pi7",
    title: "stuff",
    content: <></>,
  },
  {
    id: "pi8",
    title: "stuff",
    content: <></>,
  },
  {
    id: "pi9",
    title: "stuff",
    content: <></>,
  },
];
