export interface SearchItem {
  id: string;
  title: string;
  snippet: string;
  path: string;
}

export const searchItems: SearchItem[] = [
  // Static Pages
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
    id: "pi1",
    title: "The Prostate",
    snippet:
      "Learn about what the prostate is and where it is located in the body.",
    path: "/prostate-information?tab=pi1",
  },
  {
    id: "pi2",
    title: "Prostate Cancer Symptoms & Testing",
    snippet: "Understanding PSA tests, biopsies, and early warning signs.",
    path: "/prostate-information?tab=pi2",
  },
  {
    id: "idk",
    title: "TEST",
    snippet: "TEST",
    path: "/test?tab=NOPE",
  },
];
