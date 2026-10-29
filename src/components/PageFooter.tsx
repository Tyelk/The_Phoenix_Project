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
        <a
          href="https://fundraising.vega.works/widget?WID=236fc402-3f49-4ecd-972f-4b1d049baf11&WType=Registration&OID=AC509CD9-8DF7-4773-8BCF-520636B28A1F"
          className="plain-btn"
          onClick={(e) => {
            e.preventDefault();
            togglePopup();
          }}
        >
          Join the mailing list!
        </a>
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
              href="https://www.facebook.com/ProstateCancerFoundationofNewZealand"
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
              href="https://www.instagram.com/prostatecancernz/"
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
              href="https://www.linkedin.com/login/?session_redirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2F18908428%2Fadmin%2Ffeed%2Fposts%2F"
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
              href="https://prostate.org.nz/terms-and-conditions"
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
              href="https://prostate.org.nz/privacy-statement"
              onClick={(e) => {
                e.preventDefault();
                togglePopup();
              }}
            >
              Privacy
            </a>
          </li>
        </ul>
        <p>
          &copy; 2026 Prostate Cancer Foundation NZ <br />
          (Made for demonstration purposes only, all content is owned by the
          PCFNZ)
        </p>
      </div>

      {/* missing popup */}
      {isPopupOpen && <MissingPopup onClose={togglePopup} />}
    </footer>
  );
}
