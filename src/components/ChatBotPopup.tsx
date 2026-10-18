import { useState } from "react";
import type { JSX } from "react/jsx-runtime";

export default function ChatBotPopup(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [isAlerting, setIsAlerting] = useState(true);

  // toggle chatbot popup
  const togglePopup = (): void => {
    setIsAlerting(false); // turn of alert once opened
    setIsOpen((prev) => !prev);
  };

  return (
    <div id="chatbot-popup">
      {/* chat bot */}
      {isOpen && (
        <div id="chatbot-container">
          <div id="chatbot-header">
            <p>Prostate Pal</p>
            <button
              type="button"
              onClick={() => togglePopup()}
              className="plain-btn"
            >
              X
            </button>
          </div>

          <div id="chatbot-chat-area">chat area!</div>

          <div id="chatbot-footer">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask a question..."
            ></input>
            <button type="button" className="plain-btn chatbot-btn">
              Ask
            </button>
          </div>
        </div>
      )}

      {/* chat bot button */}
      {!isOpen && (
        <button
          type="button"
          onClick={() => togglePopup()}
          className={`plain-btn chatbot-btn ${isAlerting ? "pulsing-alert-glow" : ""}`}
          id="chatbot-toggle-btn"
        >
          Chat
        </button>
      )}
    </div>
  );
}
