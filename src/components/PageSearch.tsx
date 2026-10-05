import { useSearchParams, Link } from "react-router-dom";
import { SEARCH_ITEM_DATA } from "./page-data/data/SearchItemData";

export default function PageSearch() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || ""; // get query data

  // check both title and snippet for match
  const results = SEARCH_ITEM_DATA.filter((item) => {
    const q = query.toLowerCase();
    return (
      item.title.toLowerCase().includes(q) ||
      item.snippet.toLowerCase().includes(q)
    );
  });

  return (
    <div className="page-content">
      <div className="content-page-main-area">
        <div className="content-main-area-header">
          <h1>Search Results</h1>
        </div>

        <div className="content-main-area-body">
          <p className="results-count">
            (Showing {results.length} result
            {results.length === 1 ? "" : "s"} for{" "}
            <span className="important-text results-count">"{query}"</span>)
          </p>

          {/* Show results in a list / or show message if nothing found */}
          {results.length === 0 ? (
            <p>
              No matches found. Try searching for keywords like "Support",
              "Symptoms", or "Donate".
            </p>
          ) : (
            <div className="search-results-list">
              {results.map((item) => (
                <Link
                  key={item.id}
                  to={item.path}
                  className="search-result-card"
                >
                  <h3>{item.title}</h3>
                  <p>{item.snippet}</p>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
