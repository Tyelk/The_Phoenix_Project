import { useState } from "react";
import type { JSX } from "react/jsx-runtime";
import MissingPopup from "./MissingPopup";

export default function PageFooter(): JSX.Element {
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);

  // toggle missing content popup
  const togglePopup = (): void => {
    setIsPopupOpen((prev) => !prev);
  };

  return (
    <footer>
      {/* Mailing */}
      <div className="footer-links" id="footer-mail">
        <button
          type="button"
          className="plain-btn"
          onClick={() => togglePopup()}
        >
          Join the mailing list!
        </button>
      </div>

      {/* Contacts */}
      <div className="footer-links" id="footer-contact">
        <p className="footer-header">Contact Us</p>
        <ul>
          <li>
            <p>0800 477 678</p>
          </li>
          <li>
            <p>info@prostate.org.nz</p>
          </li>
        </ul>
      </div>

      {/* Socials */}
      <div className="footer-links" id="footer-social">
        <p className="footer-header">Socials</p>
        <ul>
          <li>
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                togglePopup();
              }}
            >
              Facebook
            </a>
          </li>
          <li>
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                togglePopup();
              }}
            >
              Instagram
            </a>
          </li>
          <li>
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                togglePopup();
              }}
            >
              Linkedin
            </a>
          </li>
        </ul>
      </div>

      {/* Details */}
      <div id="footer-details">
        <ul>
          <li>
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                togglePopup();
              }}
            >
              Terms & Conditions
            </a>
          </li>
          <li>
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                togglePopup();
              }}
            >
              Privacy
            </a>
          </li>
        </ul>
        <p>&copy; 2026 Prostate Cancer Foundation NZ</p>
      </div>

      {/* missing popup */}
      {isPopupOpen && <MissingPopup onClose={togglePopup} />}
    </footer>
  );
}
