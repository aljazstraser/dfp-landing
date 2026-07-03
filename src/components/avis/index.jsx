import React from "react";
import Image from "next/image";
import HeaderDfp from "@/src/layout/headers/header-dfp";
import FooterTwo from "@/src/layout/footers/footer-2";
import logosImg from "@assets/img/avis/logos-1920w.png";
import surveyImg from "@assets/img/avis/unnamed-1-1920w.png";

const SURVEY_URL = "https://tally.so/r/wzLVkR";

const AvisContent = () => {
  return (
    <>
      <HeaderDfp />
      <main>
        <section id="avis-section" className="tp-avis-area pt-60 pb-120">
          <style jsx>{`
            #avis-section .tp-avis-columns {
              display: flex;
              align-items: flex-start;
              gap: 0;
              overflow: hidden;
            }
            #avis-section .tp-avis-left {
              flex: 0 0 58.333%;
              max-width: 58.333%;
              min-width: 0;
              padding-right: 48px;
              overflow: hidden;
            }
            #avis-section .tp-avis-right {
              flex: 0 0 41.667%;
              max-width: 41.667%;
              min-width: 0;
              padding-left: 48px;
              border-left: 1px solid #e6edf2;
            }
            #avis-section .tp-avis-logos {
              margin-bottom: 24px;
              width: 100%;
              max-width: 68%;
              overflow: hidden;
            }
            #avis-section .tp-avis-logos :global(span) {
              display: block !important;
              width: 100% !important;
              max-width: 100% !important;
            }
            #avis-section .tp-avis-logos :global(img) {
              width: 100% !important;
              max-width: 100% !important;
              height: auto !important;
              display: block;
            }
            #avis-section .tp-avis-title {
              color: #236fa1;
              font-size: 28px;
              line-height: 1.3;
              margin-bottom: 24px;
              font-weight: 700;
            }
            #avis-section .tp-avis-content p {
              text-align: justify;
              font-size: 16px;
              line-height: 29px;
              margin-bottom: 15px;
              color: #5a627d;
            }
            #avis-section .tp-avis-content blockquote {
              margin: 24px 0;
              padding-left: 20px;
              border-left: 3px solid #4e9ee9;
            }
            #avis-section .tp-avis-content blockquote p {
              font-style: italic;
            }
            #avis-section .tp-avis-signature {
              margin-top: 24px;
            }
            #avis-section .tp-avis-right-inner {
              display: flex;
              flex-direction: column;
              align-items: center;
              width: 100%;
            }
            #avis-section .tp-avis-survey-title {
              color: #236fa1;
              text-align: center;
              font-size: 24px;
              line-height: 1.3;
              margin-bottom: 20px;
              width: 100%;
            }
            #avis-section .tp-avis-survey-note {
              text-align: center;
              font-size: 16px;
              line-height: 29px;
              margin-top: 16px;
              margin-bottom: 24px;
              color: #273141;
              width: 100%;
            }
            #avis-section .tp-avis-survey-btn {
              display: flex;
              justify-content: center;
              width: 100%;
            }
            #avis-section .tp-avis-survey-btn .tp-btn {
              background: #273141 !important;
              min-width: 200px;
              text-align: center;
            }
            #avis-section .tp-avis-survey-btn .tp-btn::after {
              background: #48be64 !important;
            }
            #avis-section .tp-avis-survey-btn .tp-btn::before {
              background: #48be64 !important;
            }
            #avis-section .tp-avis-survey-btn .tp-btn:hover {
              color: var(--tp-common-white) !important;
            }
            #avis-section .tp-avis-side-image {
              width: 100%;
              overflow: hidden;
              border-radius: 8px;
            }
            #avis-section .tp-avis-side-image :global(img) {
              width: 100% !important;
              height: auto !important;
              display: block;
              object-fit: cover;
            }
            #avis-section a {
              color: #4e9ee9;
              text-decoration: none;
            }
            #avis-section a:hover {
              text-decoration: underline;
            }
            @media (max-width: 991px) {
              #avis-section .tp-avis-columns {
                flex-direction: column;
              }
              #avis-section .tp-avis-left,
              #avis-section .tp-avis-right {
                flex: 0 0 100%;
                max-width: 100%;
                padding-left: 0;
                padding-right: 0;
              }
              #avis-section .tp-avis-right {
                margin-top: 48px;
                padding-top: 48px;
                border-left: none;
                border-top: 1px solid #e6edf2;
              }
              #avis-section .tp-avis-logos {
                max-width: 100%;
              }
              #avis-section .tp-avis-title {
                font-size: 22px;
              }
              #avis-section .tp-avis-survey-title {
                font-size: 20px;
              }
            }
          `}</style>
          <div className="container">
            <div className="tp-avis-columns">
              <div className="tp-avis-left">
                <div className="tp-avis-logos">
                  <Image
                    src={logosImg}
                    alt="DragonFlyPads and SEMMARIS logos"
                    width={1920}
                    height={404}
                    priority
                    sizes="(max-width: 991px) 100vw, 58vw"
                    style={{ width: "100%", height: "auto", maxWidth: "100%" }}
                  />
                </div>
                <h3 className="tp-avis-title tp-section-title">
                  Subject: Your Feedback on Drone Delivery at Rungis (Study
                  Supported by SEMMARIS)
                </h3>
                <div className="tp-avis-content">
                  <p>
                    <strong>Dear Rungis Market businesses,</strong>
                  </p>
                  <p>
                    As part of a market study conducted in partnership with{" "}
                    <strong>SEMMARIS</strong>, DragonFlyPads is exploring the
                    opportunity for an innovative{" "}
                    <strong>intra-market drone delivery service</strong> at
                    Rungis.
                  </p>
                  <p>
                    We may already know each other: we carried out an initial
                    intervention at Rungis in 2021 with our partner Pilgrim
                    Technology. Today, with the support of SEMMARIS, we want to
                    go further and offer{" "}
                    <strong>fast, efficient, and eco-friendly transport</strong>{" "}
                    for goods weighing less than <strong>5 kg</strong> between
                    key points on the market.
                  </p>
                  <p>
                    Your feedback is essential to assess the interest and needs
                    of businesses like yours.
                  </p>
                  <p>
                    <strong>A project supported by SEMMARIS</strong>
                  </p>
                  <p>
                    We are pleased to share a message from{" "}
                    <strong>
                      Stéphane Layani, President and Chief Executive Officer of
                      SEMMARIS
                    </strong>
                    , who supports this initiative:
                  </p>
                  <blockquote>
                    <p>
                      &ldquo;As part of our CSR policy to decarbonize logistics
                      at the Rungis wholesale market, the solutions offered by
                      DragonFlyPads can meet new logistical constraints and
                      buyer expectations. Beyond delivery, we are also studying
                      the use of drones for building maintenance and flow
                      management at the market. That is why DragonFlyPads will
                      conduct a feasibility study at the market during 2025,
                      engaging directly with you to build an offer adapted to
                      your needs.
                    </p>
                    <p>
                      I would be particularly grateful if you would extend a
                      warm welcome to Ms. Sissel Thorstensen and her team, who
                      will be in touch with you as part of this study.&rdquo;
                    </p>
                  </blockquote>
                  <p>
                    <strong>
                      Stéphane Layani – President and Chief Executive Officer –
                      SEMMARIS
                    </strong>
                  </p>
                  <p>
                    We thank you in advance for your participation and remain
                    at your disposal for any questions.
                  </p>
                  <p className="tp-avis-signature">
                    Have a wonderful day, and we look forward to speaking with
                    you.
                  </p>
                  <p>
                    <strong>Sissel Thorstensen &amp; the DragonFlyPads team</strong>
                  </p>
                  <p>
                    <a href="mailto:contact@dragonflypads.com">
                      contact@dragonflypads.com
                    </a>{" "}
                    |{" "}
                    <a href="tel:+33616646885">+33 (0) 6 16 64 68 85</a>
                  </p>
                </div>
              </div>
              <div className="tp-avis-right">
                <div className="tp-avis-right-inner">
                  <h3 className="tp-avis-survey-title">
                    To complete our survey:
                  </h3>
                  <div className="tp-avis-survey-btn">
                    <a
                      href={SURVEY_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="tp-btn"
                    >
                      Click here
                    </a>
                  </div>
                  <p className="tp-avis-survey-note">
                    <strong>
                      Estimated time to answer the 8 questions: less than 5
                      minutes
                    </strong>
                  </p>
                  <div className="tp-avis-side-image">
                    <Image
                      src={surveyImg}
                      alt="Drone delivery at Rungis wholesale market"
                      sizes="(max-width: 991px) 100vw, 42vw"
                      style={{ width: "100%", height: "auto" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <FooterTwo />
    </>
  );
};

export default AvisContent;
