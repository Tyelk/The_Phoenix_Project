export default function EducationResourcesTab() {
  return (
    <>
      <div className="content-main-area-header">
        <h1>Education Resources</h1>
      </div>

      <div className="content-main-area-body">
        <h2>Education Forums</h2>

        <p>A Playlist of Education Forums including:</p>

        <ul>
          <li>Living with advanced prostate cancer</li>
          <li>Prostate Cancer Patients - what they really need</li>
          <li>
            Tell me more about the disease and treatment options – a Clinical
            Nurse Specialist’s perspective
          </li>
          <li>What Can We Do About Erectile Dysfunction?</li>
          <li>Pads Are Not The Only Solution For Urinary Incontinence</li>
        </ul>

        <div className="video-container">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/muPt_O8Yd0c"
            title="Living With Advanced Prostate Cancer and Hormone Therapy"
            allowFullScreen
          ></iframe>
        </div>

        <h2>Webinars</h2>

        <p>A Playlist of Webinars including:</p>

        <ul>
          <li>Live Longer and Stronger with Exercise</li>
          <li>
            Coping with uncertainty of your cancer journey during COVID-19
          </li>
          <li>
            The practicalities of living with prostate cancer during COVID 19
          </li>
          <li>Prostate Cancer in 2020 - an update</li>
        </ul>

        <div className="video-container">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/Y8SazmQPRIU"
            title="Webinar | Live Longer and Stronger with Exercise"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </>
  );
}
