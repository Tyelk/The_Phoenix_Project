import type { JSX } from "react/jsx-runtime";

export default function PageFooter(): JSX.Element {
  return (
    <footer>
      {/* Mailing */}
      <div className="footer-links" id="footer-mail">
        <button className="plain-btn">Join the mailing list!</button>
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
            <a href="/">Facebook</a>
          </li>
          <li>
            <a href="/">Instagram</a>
          </li>
          <li>
            <a href="/">Linkedin</a>
          </li>
        </ul>
      </div>

      {/* Details */}
      <div id="footer-details">
        <ul>
          <li>
            <a href="/">Terms & Conditions</a>
          </li>
          <li>
            <a href="/">Privacy</a>
          </li>
        </ul>
        <p>&copy; 2026 Prostate Cancer Foundation NZ</p>
      </div>
    </footer>
  );
}
