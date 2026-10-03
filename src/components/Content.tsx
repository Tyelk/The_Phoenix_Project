import { useState } from "react";
import { prostateInfoTabsData } from "./page-data/ProstateInfoTabData";

export default function ContentPage() {
  const [activeTabId, setActiveTabId] = useState("pi1"); // id for first page
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // gets content for tab that is selected
  const activeTab = prostateInfoTabsData.find((tab) => tab.id === activeTabId);

  // tab selected
  const handleTabSelect = (tabId: string): void => {
    // set current tab and hide sidebar on small screens
    setActiveTabId(tabId);
    setIsSidebarOpen(false);
  };

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
          {prostateInfoTabsData.map((tab) => {
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
