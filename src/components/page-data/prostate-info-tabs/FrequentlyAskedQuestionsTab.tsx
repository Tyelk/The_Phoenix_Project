import { useState } from "react";
import { FREQUENTLY_ASKED_QUESTIONS_DATA } from "../data/FrequentlyAskedQuestionsData";
import headerImage from "../assets/images/header-image-faq.jpg";

export default function FrequentlyAskedQuestionsTab() {
  const [openId, setOpenId] = useState<number | null>(null);

  // toggles faq tab
  const toggleFaq = (id: number) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="page-content">
      <div className="content-page-main-area">
        <div
          className="content-main-area-header"
          style={{
            backgroundImage: `url(${headerImage})`,
          }}
        >
          <h1>Frequently Asked Questions</h1>
        </div>

        <div className="content-main-area-body">
          <p>
            We are regularly contacted by persons directly affected by prostate
            cancer and health professionals, seeking information about prostate
            cancer diagnosis, treatment and post-treatment. Please note, these
            explanations are based on NZ best practice, are not medical advice
            but intended to provide further information, explanation and
            signposting. Please continue to talk with your health professional
            if you have further questions and medical advice. Be aware of
            misinformation and make an individual informed about testing, based
            on the latest evidence and your individual circumstances.
          </p>

          {/* FAQ section */}
          {FREQUENTLY_ASKED_QUESTIONS_DATA.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div key={item.id} className="faq-item">
                <button
                  type="button"
                  className="faq-question-btn"
                  onClick={() => toggleFaq(item.id)}
                >
                  <p className="faq-question">{item.question}</p>
                  <p className="faq-icon">{isOpen ? "−" : "+"}</p>
                </button>

                {isOpen && <div className="faq-answer">{item.answer}</div>}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
