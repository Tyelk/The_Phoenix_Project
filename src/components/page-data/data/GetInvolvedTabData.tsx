import type { TabItem } from "../../../types/TabItem";
import FundraiseForProstateTab from "../get-involved-tabs/FundraiseForProstateTab";
import GiftsInWillsTabs from "../get-involved-tabs/GiftsInWillsTab";
import WaysToGiveTab from "../get-involved-tabs/WaysToGiveTab";

export const getInvolvedTabData: TabItem[] = [
  {
    id: "fundraise-for-prostate",
    title: "Fundraise for Prostate",
    content: <FundraiseForProstateTab />,
  },
  {
    id: "gifts-in-wills",
    title: "Gifts In Wills",
    content: <GiftsInWillsTabs />,
  },
  {
    id: "ways-to-give",
    title: "Ways To Give",
    content: <WaysToGiveTab />,
  },
];
