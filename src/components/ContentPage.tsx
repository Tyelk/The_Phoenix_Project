import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { prostateInfoTabData } from "./page-data/data/ProstateInfoTabData";
import { getSupportTabData } from "./page-data/data/GetSupportTabData";

interface ContentPageProps {
  pageType: "pi" | "gs";
}

export default function ContentPage({ pageType }: ContentPageProps) {
  const [searchParams] = useSearchParams();
  const urlTabId = searchParams.get("tab");
  const [activeTabId, setActiveTabId] = useState(urlTabId || pageType + "1"); // id for first page
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // gets content for tab that is selected
  const currentDataSet =
    pageType === "pi" ? prostateInfoTabData : getSupportTabData;
  const activeTab = currentDataSet.find((tab) => tab.id === activeTabId);

  // tab selected
  const handleTabSelect = (tabId: string): void => {
    // set current tab and hide sidebar on small screens
    setActiveTabId(tabId);
    setIsSidebarOpen(false);
  };

  useEffect(() => {
    if (urlTabId) {
      setActiveTabId(urlTabId);
    }
  }, [urlTabId]);

  return (
    <div className="page-content">
      {/* sidebar toggle button */}
      <button
        type="button"
        className="sidebar-toggle-btn plain-btn"
        onClick={() => setIsSidebarOpen((prev) => !prev)}
        aria-expanded={isSidebarOpen}
        aria-label="Toggle Sidebar Topics"
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
