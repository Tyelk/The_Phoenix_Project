import { SUPPORT_GROUP_DATA } from "../data/SupportGroupData";
import GroupSearch from "../../GroupSearch";
import headerImage from "../../../assets/images/header-image-support-groups.jpg";

export default function SupportGroupsTab() {
  return (
    <>
      <div
        className="content-main-area-header"
        style={{
          backgroundImage: `url(${headerImage})`,
        }}
      >
        <h1>Support Groups</h1>
      </div>

      <div className="content-main-area-body">
        <h2>Overview</h2>

        <p>
          Our local support leads are here to connect you with trusted,
          compassionate support within your community. Whether you’re newly
          diagnosed, undergoing treatment, living beyond prostate cancer, or
          supporting a loved one, you’re not alone.
        </p>

        <p>
          Each PCFNZ representative brings lived experience and a deep
          understanding of the journey. From regular group meetings to informal
          connections and one‑on‑one conversations, they’re here to support you
          and your whānau in a way that works best for you. Find your local
          contact below and reach out when you’re ready.
        </p>

        <p>
          If you have questions about medical treatment, please contact your
          usual healthcare provider, as they are best placed to give you
          clinical advice.
        </p>

        <GroupSearch dataSet={SUPPORT_GROUP_DATA} />
      </div>
    </>
  );
}
