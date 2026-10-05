import GroupSearch from "../../GroupSearch";
import { PROST_FIT_DATA } from "../data/ProstFitData";

export default function ProstFitTab() {
  return (
    <>
      <div
        className="content-main-area-header"
        style={{
          backgroundImage: "url(/src/assets/images/header-image-prost-fit.jpg)",
        }}
      >
        <h1>Prost-FIT</h1>
      </div>

      <div className="content-main-area-body">
        <h2>Overview</h2>

        <p>
          Research shows that tailored exercise benefits most people with cancer
          - before, during and after treatment. Staying active can help manage
          side effects, speed recovery and improve quality of life. In some
          cases, regular exercise may reduce the risk of cancer returning by up
          60%.
        </p>

        <h4>What is Prost-FIT?</h4>

        <p>
          PCFNZ's Prost-FIT programme is designed specifically for men living
          with prostate cancer, at any stage of diagnosis or treatment.
          Involving both physical and cognitive elements delivered in a
          supporting environment, with an emphasis on fun and social
          interaction. Prost-FIT also offers camaraderie and opportunities for
          shared experiences.
        </p>

        <p>
          Delivered by trained, registered exercise professionals, Prost-FIT
          class numbers are capped to ensure participants receive safe,
          personalised support.
        </p>

        <h4>How much does it cost?</h4>

        <p>
          Prost-FIT is free to attend (T&Cs apply) once a week for 40 weeks per
          calendar year. To be access these funded classes, each man must
          register when joining the programme. If the trainer runs classes
          additional to the funded 40, participants will be charged privately by
          the trainer for those additional sessions*.
        </p>

        <h4>For more information: </h4>

        <p>
          To find out more email prost-fit@prostate.org.nz, call 0800 66 0800.
          Search the directory below to find a class near you.
        </p>

        <p className="important-text">
          *Please ensure that any exercise you do does not replace, or
          contradict, any advice already given to you by your specialist or
          physiotherapist.
        </p>

        <p>Prost-FIT is proudly supported by the Dry July NZ Trust.</p>

        <GroupSearch dataSet={PROST_FIT_DATA} />
      </div>
    </>
  );
}
