import type { JSX } from "react/jsx-runtime";
import GameIcon from "./icons/GameIcon";
import HelpIcon from "./icons/HelpIcon";
import ResearchIcon from "./icons/ResearchIcon";
import { Link } from "react-router-dom";

export default function Home(): JSX.Element {
  return (
    <div className="page-content">
      <div
        id="content-first"
        style={{
          backgroundImage: "url(/src/assets/images/pcfnz-grey-man.jpg)",
        }}
      >
        <h1>
          1 in 8 men will be diagnosed with prostate cancer during their
          lifetime
        </h1>
        <div id="content-first-button-section">
          <button type="button" className="plain-btn">
            What is prostate cancer?
          </button>
          <button type="button" className="plain-btn">
            What will happen to my loved one?
          </button>
        </div>
      </div>

      <div id="content-second">
        <h1>More Data</h1>
        <div id="content-second-card-section">
          <div className="home-card">
            <HelpIcon className="card-icon" />
            <p>
              Have too many questions and do not know where to start? Check out
              our frequently asked questions page to get a head start on your
              journey!
            </p>
            <Link
              to="/prostate-information?tab=frequently-asked-questions"
              className="plain-btn"
            >
              FAQ
            </Link>
          </div>

          <div className="home-card">
            <GameIcon className="card-icon" />
            <p>
              Want to learn about prostate cancer in a new and interesting way,
              or want to test your knowledge about the subject? Try out our
              quiz!
            </p>
            <Link to="/play" className="plain-btn">
              Game
            </Link>
          </div>

          <div className="home-card">
            <ResearchIcon className="card-icon" />
            <p>
              Curious as to how the PCFNZ supports prostate cancer research and
              what the donations got to? Check out our research contributions!
            </p>
            <Link to="/research" className="plain-btn">
              Research
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
