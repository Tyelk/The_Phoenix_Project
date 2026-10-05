import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="page-content">
      <div className="content-page-main-area">
        <div className="content-main-area-header">
          <h1>404 - Page Not Found</h1>
        </div>

        <div className="centered-content">
          <p>Sorry, that page could not be found.</p>

          <Link to="/" className="plain-btn">
            Go back to Home Page
          </Link>
        </div>
      </div>
    </div>
  );
}
