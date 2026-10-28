import headerImage from "../assets/images/header-image-prostate.jpg";
import prostateImage from "../assets/images/prostate-diagram.jpg";

export default function ProstateTab() {
  return (
    <>
      <div
        className="content-main-area-header"
        style={{
          backgroundImage: `url(${headerImage})`,
        }}
      >
        <h1>The Prostate</h1>
      </div>

      <div className="content-main-area-body">
        <h2>Know your prostate – the anatomy</h2>

        <p>
          The prostate is a male sex gland located just below the bladder and in
          front of the rectum. Along with the testicles and seminal vesicles, it
          is part of the male reproductive system as shown in the diagram below.
          It surrounds the urethra, the tube that carries urine and semen out of
          the body through the penis.
        </p>

        <p>
          The prostate produces some of the fluid that makes up semen, which
          enriches and protects sperm when men ejaculate. The male hormone
          testosterone, which is made by the testicles, enables the prostate
          gland to grow and develop during puberty. In an adult, the prostate
          gland is usually about the size of a walnut and it is normal for it to
          grow larger as men age. Sometimes this can cause problems, such as
          difficulty with passing urine, and may develop into a benign condition
          called Benign Prostatic Hyperplasia (BPH). Tumours can also develop in
          the prostate, these are known as prostate cancer.
        </p>

        <img
          className="content-image"
          src={prostateImage}
          alt="Diagram of the prostate gland"
        />
      </div>
    </>
  );
}
