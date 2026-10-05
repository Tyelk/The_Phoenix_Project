import type { SearchItem } from "../../../types/SearchItem";

export const SEARCH_ITEM_DATA: SearchItem[] = [
  {
    id: "page-home",
    title: "Home Page",
    snippet: "Welcome to Prostate Health NZ, resources and support.",
    path: "/",
  },
  {
    id: "page-donate",
    title: "Donate & Support",
    snippet: "Help fund prostate cancer research and support networks.",
    path: "/donate",
  },
  {
    id: "page-the-prostate",
    title: "The Prostate",
    snippet:
      "Learn about what the prostate is and where it is located in the body.",
    path: "/prostate-information?tab=the-prostate",
  },
  {
    id: "page-prostate-cancer",
    title: "Prostate Cancer Symptoms & Testing",
    snippet: "Understanding PSA tests, biopsies, and early warning signs.",
    path: "/prostate-information?tab=prostate-cancer",
  },
  {
    id: "idk",
    title: "TEST",
    snippet: "TEST",
    path: "/test?tab=NOPE",
  },
];
