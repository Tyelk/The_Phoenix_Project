import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import type { JSX } from "react/jsx-runtime";

export default function PageHeader(): JSX.Element {
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [searchInput, setSearchInput] = useState<string>("");
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Close nav menu and search when another page is navigated to
    setIsMenuOpen(false);
    setIsSearchOpen(false);
  }, [location]);

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

    navigate(`/search?q=${encodeURIComponent(searchInput.trim())}`);
    setIsSearchOpen(false);
    setSearchInput("");
  };

  return (
    <header>
      {/* Logo section */}
      <Link id="header-logo-container" to="/">
        <img src="/src/assets/graphics/logo.png" alt="PCFNZ logo" />
      </Link>

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
            <Link to="/prostate-information">Prostate Information</Link>
          </li>
          <li>
            <Link to="/get-support">Get Support</Link>
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
            <img src="/src/assets/graphics/search.svg" alt="Search icon" />
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

        <Link to="/donate" className="plain-btn">
          Donate
        </Link>
      </div>
    </header>
  );
}
