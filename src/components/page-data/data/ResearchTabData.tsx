import type { TabItem } from "../../../types/TabItem";
import HeroResearchersTab from "../research-tabs/HeroResearchersTab";
import OurResearchTab from "../research-tabs/OurResearchTab";
import ResearchGrantsTab from "../research-tabs/ResearchGrantsTab";

export const researchTabData: TabItem[] = [
  {
    id: "our-research",
    title: "Our Research",
    content: <OurResearchTab />,
  },
  {
    id: "hero-researchers",
    title: "Hero Researchers",
    content: <HeroResearchersTab />,
  },
  {
    id: "research-grants",
    title: "Research Grants",
    content: <ResearchGrantsTab />,
  },
];
