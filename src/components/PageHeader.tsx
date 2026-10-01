import { useState } from "react";
import type { JSX } from "react/jsx-runtime";

export default function PageHeader(): JSX.Element {
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [searchInput, setSearchInput] = useState<string>("");

  // toggle search dropdown
  const toggleSearch = (): void => {
    setIsSearchOpen((prev) => !prev);
  };

  // toggle nav menu visibility
  const toggleMenu = (): void => {
    setIsMenuOpen((prev) => !prev);
  };

  // search text
  const handleSearch = (searchText: String): void => {
    if (!searchText.trim()) return;

    console.log("Searching for:", searchText);
    // DO SEARCH
    setIsSearchOpen(false);
    setSearchInput("");
  };

  return (
    <header>
      {/* Logo section */}
      <a id="header-logo-container" href="/">
        <img src="/src/assets/logo.png" alt="PCFNZ logo" />
      </a>

      {/* Hamburger menu toggle */}
      <button type="button" id="hamburger-btn" onClick={toggleMenu}>
        <span className="hamburger-bar"></span>
        <span className="hamburger-bar"></span>
        <span className="hamburger-bar"></span>
      </button>

      {/* Navigation links */}
      <nav className={isMenuOpen ? "nav-open" : ""}>
        <ul>
          <li>
            <a href="/">Prostate Information</a>
          </li>
          <li>
            <a href="/">Get Support</a>
          </li>
          <li>
            <a href="/">Get Involved</a>
          </li>
          <li>
            <a href="/">Education & Outreach</a>
          </li>
          <li>
            <a href="/">Research</a>
          </li>
        </ul>
      </nav>

      {/* Search/Donate section */}
      <div id="header-button-container">
        <div id="header-search-container">
          <button type="button" onClick={toggleSearch}>
            <img src="/src/assets/search.svg" alt="Search icon" />
          </button>

          {/* Search Dropdown */}
          {isSearchOpen && (
            <div id="search-dropdown">
              <input
                type="text"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                placeholder="Search..."
                maxLength={20}
              />
              <button
                className="plain-btn"
                type="button"
                onClick={() => handleSearch(searchInput)}
              >
                Search
              </button>
            </div>
          )}
        </div>

        <button className="plain-btn">Donate</button>
      </div>
    </header>
  );
}
