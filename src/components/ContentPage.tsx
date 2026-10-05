import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { prostateInfoTabData } from "./page-data/data/ProstateInfoTabData";
import { getSupportTabData } from "./page-data/data/GetSupportTabData";
import { getInvolvedTabData } from "./page-data/data/GetInvolvedTabData";
import { eventsAndOutreachTabData } from "./page-data/data/EventsAndOutreachTabData";
import { researchTabData } from "./page-data/data/ResearchTabData";

interface ContentPageProps {
  pageType: "pi" | "gs" | "gi" | "eo" | "r";
}

export default function ContentPage({ pageType }: ContentPageProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const urlTabId = searchParams.get("tab");

  // gets the appropriate set of data
  const currentDataSet =
    pageType === "pi"
      ? prostateInfoTabData
      : pageType === "gs"
        ? getSupportTabData
        : pageType === "gi"
          ? getInvolvedTabData
          : pageType === "eo"
            ? eventsAndOutreachTabData
            : researchTabData;

  // goes to the first tab on the page
  const defaultTabId = currentDataSet[0].id || "";

  const [activeTabId, setActiveTabId] = useState<string>(
    urlTabId || defaultTabId, // goes to selected tab or the default
  );
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  // check which tab is selected
  const activeTab = currentDataSet.find((tab) => tab.id === activeTabId);

  // tab selected
  const handleTabSelect = (tabId: string): void => {
    // set current tab and hide sidebar on small screens
    setActiveTabId(tabId);
    setSearchParams({ tab: tabId }, { replace: true });
    setIsSidebarOpen(false);
  };

  // udpate url to match tab
  useEffect(() => {
    if (urlTabId && urlTabId !== activeTabId) {
      setActiveTabId(urlTabId);
    } else if (!urlTabId) {
      setActiveTabId(defaultTabId);
    }
  }, [urlTabId, defaultTabId]);

  return (
    <div className="page-content">
      {/* sidebar toggle button */}
      <button
        type="button"
        className="sidebar-toggle-btn plain-btn"
        onClick={() => setIsSidebarOpen((prev) => !prev)}
      >
        {">"}
      </button>

      {/* backdrop */}
      {isSidebarOpen && (
        <div
          className="sidebar-backdrop"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      <div className="content-page-container">
        {/* sidebar, shows all the tabs as options */}
        <div
          className={`content-page-tab-sidebar ${
            isSidebarOpen ? "is-open" : ""
          }`}
        >
          {currentDataSet.map((tab) => {
            const isActive = tab.id === activeTabId;
            return (
              <a
                key={tab.id}
                onClick={() => handleTabSelect(tab.id)}
                className={`content-page-tab-option ${isActive ? "selected-tab" : ""}`}
              >
                {tab.title}
              </a>
            );
          })}
        </div>

        {/* content */}
        <div className="content-page-main-area">
          {activeTab ? (
            activeTab.content
          ) : (
            <div>Missing content, please select one of the tabs!</div>
          )}
        </div>
      </div>
    </div>
  );
}
