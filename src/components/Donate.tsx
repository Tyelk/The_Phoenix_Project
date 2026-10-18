import { useState } from "react";
import type { JSX } from "react/jsx-runtime";
import MissingPopup from "./MissingPopup";

export default function Donate(): JSX.Element {
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);

  // toggle missing content popup
  const togglePopup = (): void => {
    setIsPopupOpen((prev) => !prev);
  };

  return (
    <div className="page-content">
      <div id="donate-content">
        <div className="content-main-area-header">
          <h1>Donate</h1>
        </div>

        <div className="donate-input-section">
          <label htmlFor="donation-amount">Amount</label>
          <input type="number" id="donation-amount" placeholder="0.00"></input>
        </div>

        <div className="donate-input-section">
          <label htmlFor="donation-message">Message (Optional)</label>
          <input
            type="text"
            id="donation-message"
            placeholder="Enter a message..."
          ></input>
        </div>

        <div className="donate-input-section">
          <label htmlFor="donation-card-name">Card Name</label>
          <input type="text" id="donation-card-name" placeholder=""></input>
        </div>

        <div className="donate-input-section">
          <label htmlFor="donation-card-number">Card Number</label>
          <input type="number" id="donation-card-number" placeholder=""></input>
        </div>

        <div className="donate-input-section">
          <label htmlFor="donation-card-expirty-date">Card Expiry Date</label>
          <input
            type="text"
            id="donation-card-expirty-date"
            placeholder="MM/YY"
          ></input>
        </div>

        <div className="donate-input-section">
          <label htmlFor="donation-card-cvc">Card CVC</label>
          <input type="number" id="donation-card-cvc" placeholder=""></input>
        </div>

        <div className="donate-input-section">
          <label htmlFor="donation-card-country">Country</label>
          <input type="text" id="donation-card-country" placeholder=""></input>
        </div>

        <div className="donate-input-section">
          <label htmlFor="donation-card-address">Address</label>
          <input type="text" id="donation-card-address" placeholder=""></input>
        </div>

        <div className="donate-input-section">
          <label htmlFor="donation-card-postal-code">Postal Code</label>
          <input
            type="text"
            id="donation-card-postal-code"
            placeholder=""
          ></input>
        </div>

        <button
          type="button"
          className="plain-btn"
          onClick={() => togglePopup()}
        >
          Donate
        </button>
      </div>

      {/* missing popup */}
      {isPopupOpen && <MissingPopup onClose={togglePopup} />}
    </div>
  );
}
