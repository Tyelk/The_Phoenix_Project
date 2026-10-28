import headerImage from "../assets/images/header-image-prostate-cancer.jpg";
import prostatitisImage from "../assets/images/prostatitis-image.png";

export default function ProstateCancerTab() {
  return (
    <>
      <div
        className="content-main-area-header"
        style={{
          backgroundImage: `url(${headerImage})`,
        }}
      >
        <h1>Prostate Cancer</h1>
      </div>

      <div className="content-main-area-body">
        <h2>Prostate cancer - what is it?</h2>

        <h4>To get checked for prostate cancer please consult with your GP.</h4>

        <p>
          The human body is made up of billions of tiny building blocks called
          cells. Sometimes, cells reproduce in an uncontrolled way and grow into
          a lump, or tumour. There are two kinds of tumours: noncancerous
          (benign) and cancerous (malignant). Benign tumours do not spread to
          other parts of the body and are not life threatening (except in very
          rare situations).
        </p>

        <p>
          Prostate cancer occurs when abnormal cells develop in the prostate.
          These cells have the potential to continue to multiply, and possibly
          spread beyond the prostate. Doctors do not know what causes prostate
          cancer. What they do know however, is that the growth of cancer cells
          in the prostate is stimulated by male hormones, especially
          testosterone. Most prostate cancer growth is influenced by
          testosterone but the speed at which prostate cancer grows varies from
          man to man. In some men the cancer grows very slowly (called
          indolent), in others growth is more rapid (aggressive).
        </p>

        <p>
          Men are more likely to develop prostate cancer as they get older. It
          is also more common in men who have a father or brother with prostate
          cancer, and in families who carry certain genes such as the BRCA1 or
          BRCA2 genes.
        </p>

        <p>
          Anyone with a prostate can get prostate cancer – including transgender
          women, male-assigned non-binary people or intersex people.
        </p>

        <h2>Prostate cancer in New Zealand</h2>

        <p>
          It is our most commonly diagnosed cancer (apart from skin cancers) in
          New Zealand. Every year more than 4000* are diagnosed with the disease
          and over 700* die - the second highest cause of cancer death in men
          behind lung cancer. For all sexes it sits third behind lung and bowel
          cancers.
        </p>

        <p>
          Māori men have a slightly lower incidence of prostate cancer but have
          a higher death rate than other New Zealand men. The reasons for this
          may be a later diagnosis or treatment choices offered to them.
        </p>

        <p>
          Overall, the number of men diagnosed in New Zealand is increasing,
          largely due to increased rates of testing and the death rate is slowly
          dropping, largely due to better outcomes from early diagnosis and
          improved treatments available.
        </p>

        <p>Source: The New Zealand Cancer Registry</p>

        <h2>Types of prostate cancer</h2>

        <p>
          Prostate cancer is described according to where it is located in the
          body. Most grow very slowly and about 95% of men survive at least 5
          years after diagnosis, particularly if diagnosed with localised
          prostate cancer, and about 90% will survive 10 years beyond diagnosis.
        </p>

        <p>
          <span className="important-text">Localised</span> – prostate cancer
          that is confined to the prostate gland.
        </p>

        <p>
          <span className="important-text">Locally advanced</span> – prostate
          cancer that extends into the surrounding tissues near the prostate or
          into the pelvic lymph nodes.
        </p>

        <p>
          <span className="important-text">Advanced or metastatic</span> –
          prostate cancer that has spread to other parts of the body including
          other organs, lymph nodes (outside the pelvis) and bones.
        </p>

        <p>
          <span className="important-text">Benign prostate conditions</span> -
          Prostate problems are often not the result of prostate cancer. Two
          common benign conditions with similar symptoms are:
        </p>

        <p>
          <span className="important-text">
            Benign Prostate Hyperplasia (BPH)
          </span>{" "}
          – enlarged prostate
        </p>

        <p>
          From about the age of 40, a man’s prostate begins to enlarge and
          create a condition called Benign Prostate Hyperplasia (BPH). Benign
          means it is not cancer, and hyperplasia means ‘too much tissue’. The
          likelihood of developing BPH increases with age and eventually 80% of
          men have enlarged prostates, but many will never have symptoms.
        </p>

        <p>
          The enlarged prostate puts pressure on the urethra and causes problems
          urinating. Medicines or surgery are used to treat BPH but only when
          symptoms become troublesome. Remember, BPH is not prostate cancer even
          though most of the symptoms are the same when passing urine.
        </p>

        <h4>Prostatitis</h4>

        <p>
          Is an infection of the prostate which can cause pain, fever, swelling
          of the prostate and, blood and pus in the urine. It may have symptoms
          similar to BPH but is usually treated with antibiotics. Infection of
          the bladder usually occurs at the same time. See your doctor if blood
          appears in the urine (Haematuria).
        </p>

        <img
          className="content-image"
          src={prostatitisImage}
          alt="Image of prostatitis infection"
        />

        <h2>Symptoms of prostate cancer</h2>

        <p>
          Prostate cancer can develop silently and remain undetected for some
          time, without causing symptoms.
        </p>

        <p>
          If symptoms are present they may include the following. But please
          note, many are common in men as they age, often caused by other
          prostate conditions such as an enlarged prostate (benign prostatic
          hyperplasia or BPH). Always see your doctor if you experience any of
          these symptoms.
        </p>

        <ul>
          <li>
            Feeling the frequent or sudden need to urinate, especially at night
          </li>
          <li>
            Finding it difficult to urinate (e.g. trouble starting or not being
            able to urinate when the feeling is there)
          </li>
          <li>Discomfort when urinating</li>
          <li>
            Finding blood in urine or semen{" "}
            <span className="important-text">(never ignore this)</span>
          </li>
          <li>Pain in lower back, upper thighs or hips</li>
          <li>Bone pain</li>
          <li>Unexpected weight loss.</li>
        </ul>

        <p>
          More options are available if prostate cancer is detected before it
          causes symptoms, so a GP visit for a check at least once a year is
          vital.
        </p>
      </div>
    </>
  );
}
