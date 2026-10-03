export default function GettingDiagnosedTab() {
  return (
    <>
      <div
        className="content-main-area-header"
        style={{
          backgroundImage:
            "url(/src/assets/images/header-image-getting-diagnosed.jpg)",
        }}
      >
        <h1>Getting Diagnosed</h1>
      </div>

      <h2>Overview</h2>

      <p>
        Going through further testing and a diagnosis can be both physically and
        emotionally challenging. If possible, have someone close to you attend
        the appointments with you, to help recall the discussions. It can also
        help to write down questions you would like answered, and to make notes
        of the information you receive. If all parties agree, you might like to
        record the discussion on your mobile device.
      </p>

      <h4>MRI – Magnetic Resonance Imaging</h4>

      <p>
        An MRI scan is ordered to assess the prostate size and look for any
        abnormal areas. It is used to determine the likelihood that cancer is
        present in the prostate and which part of the prostate is affected. An
        MRI is performed as an outpatient procedure, without the need to be
        admitted to a hospital. Patients lie on a special bed that passes
        through a narrow tunnel while the scans are being taken. If they
        experience claustrophobia, they may require sedation for this scan. It
        is important to tell the doctor about any metallic implants (e.g. screws
        or plates) in your body or medical devices (e.g. pacemaker or cochlear
        implant), or if you have had joint surgery.
      </p>

      <h4>Multiparametric Magnetic Resonance Imaging (mpMRI)</h4>

      <p>
        Is a more accurate and detailed MRI scan that combines the results of at
        least three different scanning techniques to get a clearer picture of
        the prostate. Not all DHBs in New Zealand will provide funded MRI scans
        but they are available for a reasonable cost in private clinics.
      </p>

      <h4>Biopsy</h4>

      <p>
        A biopsy is a surgical procedure where a needle is used to remove
        multiple small samples of tissue from the prostate. There are two ways
        the procedure can be performed:
      </p>

      <ul>
        <li>
          Transrectal ultrasound [TRUS] biopsy, which can be done under local
          anaesthetic in a consulting room or in a hospital.
        </li>
        <li>
          Transperineal biopsy – through the perineum, performed in hospital
          under general anaesthetic.
        </li>
      </ul>

      <p>
        The biopsy samples will be sent to a pathology laboratory to be examined
        where the pathologist will determine if there are cancer cells present
        in the sample. This is how a definitive diagnosis of prostate cancer can
        be made. If the biopsy does not show any cancer, patients will probably
        be monitored with regular ongoing check-ups and repeat PSA tests and, if
        necessary, may need another biopsy or an MRI scan at a later date. A
        biopsy report that confirms the presence of cancer will provide
        information about the type of cancer present.
      </p>

      <h4>CT (Computerised tomography) Scan</h4>

      <p>
        A CT scan uses X-ray beams to create detailed images of the inside of
        the body. The scan may be done to show where in the body the cancer has
        spread, based on locating abnormal features such as enlarged lymph nodes
        or bony outgrowths.
      </p>

      <h4>PSMA-PET scan</h4>

      <p>
        PSMA stands for prostate specific membrane antigen, a protein found on
        the surface of prostate cells. A PSMA-PET scan (also known as a
        ‘gallium’ scan or an ‘F18’ scan) involves injecting a radioactive
        substance attached to a molecule that can stick to PSMA in the body.
        This is a very sensitive and accurate way to image and accurately locate
        prostate cancer wherever it is in the body as cancer cells can show up
        brighter on the operator’s screen during the scan. It is typically used
        to see if cancer cells have migrated away from the prostate gland and
        formed metastases in other sites. Not all DHBs in New Zealand will
        provide funded PSMA-PET scans but they are available in private clinics.
      </p>

      <h4>Bone scan</h4>

      <p>
        This involves injecting a weak radioactive substance into the body to
        see if there are cancer cells damaging the bone. A positive scan may not
        mean you have prostate cancer – it can also be due to other causes of
        bone damage such as an old fracture or inflammation.
      </p>

      <h2>Making a diagnosis</h2>

      <p>
        Once the urologis have the results of the various tests a more accurate
        diagnosis can be made and the treatment options assessed. There are two
        main criteria that will be considered:
      </p>

      <ul>
        <li>
          <span className="important-text">Grade</span> – This assesses the
          aggressiveness of the cancer cells and how quickly they are expected
          to grow. A pathologist works out the grade based on the biopsy
          results. Low grade cancers usually grow slowly and are less likely to
          spread. Higher grade cancers are more likely to grow quickly and
          spread to other parts of the body. There are two systems used for
          grading prostate cancer cells – the Gleason and ISUP grades.
        </li>
        <li>
          <span className="important-text">Stage</span> – This describes the
          cancer’s size and whether it has spread beyond the prostate. The stage
          is based on the digital rectal rectal examination and results of
          imaging scans such as CT, MRI, bone scan and PSMA-PET scans. The
          amount the cancer has spread gives an indication of how extensive the
          cancer is.
        </li>
      </ul>

      <p>
        Localised cancer (T1 and T2) remain within the prostate gland are
        potentially curable with surgery and radiation therapy.Localised
        advanced cancer may include seminal vesicles (T3) and, rectum, bladder,
        local lymph nodes and pelvic wall (T4). These cancers are potentially
        curable with surgery and radiation therapy.Metastatic cancer has spread
        / metastasised to lymph nodes outside of the pelvis or to bones or other
        organs. These Stage 4 cancers are not curable by surgery or radiation
        therapy.
      </p>

      <img
        className="content-image"
        src={"/src/assets/images/isup-gleason-table.png"}
        alt="Image of a bone scane"
      />

      <img
        className="content-image"
        src={"/src/assets/images/staging-table.png"}
        alt="Image of a bone scane"
      />

      <h4>The outlook post-diagnosis</h4>

      <p>
        Following a prostate cancer diagnosis most people want to know whether
        their cancer can be successfully treated. The outcome of the treatment
        will depend on several things such as the type of cancer and whether it
        has spread, how quickly it grows, and how well the treatment works. If
        the prostate cancer is localised to the prostate gland, it is sometimes
        slow growing and may never need treatment. Other localised prostate
        cancers do require treatment and often is it possible to successfully
        get rid of the cancer. If the cancer has spread outside of the prostate
        gland, treatments can often keep it under control for many years.
      </p>

      <p>
        It can be valuable to get a second opinion about the results and
        treatment options. This doesn't mean you have less faith in your doctor,
        but talking it through with another doctor or health professional who
        understands prostate cancer can help clear up any concerns, and help you
        understand the best treatment and support options for you.
      </p>
    </>
  );
}
