import type { TabItem } from "../../../types/TabItem";
import FrequentlyAskedQuestions from "../prostate-info-tabs/FrequentlyAskedQuestionsTab";
import DealingWithSideEffectsTab from "../prostate-info-tabs/DealingWithSideEffectsTab";
import GettingDiagnosedTab from "../prostate-info-tabs/GettingDiagnosedTab";
import GettingTestedTab from "../prostate-info-tabs/GettingTestedTab";
import ProstateCancerTab from "../prostate-info-tabs/ProstateCancerTab";
import ProstateTab from "../prostate-info-tabs/ProstateTab";
import TreatmentsTab from "../prostate-info-tabs/TreatmentsTab";

export const prostateInfoTabData: TabItem[] = [
  {
    id: "the-prostate",
    title: "The Prostate",
    content: <ProstateTab />,
  },
  {
    id: "prostate-cancer",
    title: "Prostate Cancer",
    content: <ProstateCancerTab />,
  },
  {
    id: "getting-tested",
    title: "Getting Tested",
    content: <GettingTestedTab />,
  },
  {
    id: "getting-diagnosed",
    title: "Getting Diagnosed",
    content: <GettingDiagnosedTab />,
  },
  {
    id: "treatments",
    title: "Treatments",
    content: <TreatmentsTab />,
  },
  {
    id: "dealing-with-side-effects",
    title: "Dealing With Side Effects",
    content: <DealingWithSideEffectsTab />,
  },
  {
    id: "frequently-asked-questions",
    title: "Frequently Asked Questions",
    content: <FrequentlyAskedQuestions />,
  },
];
