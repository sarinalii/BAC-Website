import { Link } from "react-router";

import {
  ArrowUpRight,
  Instagram,
  Mail,
} from "lucide-react";

const programs = [
  {
    label: "Freshman Liaison Program",
    path: "/programs/freshman-liaison",
  },
  {
    label: "Insight Team",
    path: "/programs/insight-team",
  },
  {
    label: "Quant Team",
    path: "/programs/quant-team",
  },
  {
    label: "Machine Learning Team",
    path: "/programs/ml-team",
  },
];

export function Footer() {
  return (
    <>
      <footer
        style={{
          width: "100%",
          borderTop: "4px solid #66c8ad",
          background: "#34414e",
          color: "#ffffff",
          fontFamily:
            '"Helvetica Neue", Helvetica, Arial, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
        }}
      >
        <div
          style={{
            width: "min(calc(100% - 32px), 1280px)",
            margin: "0 auto",
            padding: "46px 0 24px",
          }}
        >
          <div className="bac-footer-main-grid">
            {/* PROGRAMS */}
            <div>
              <p className="bac-footer-heading">
                Programs
              </p>

              <div className="bac-footer-link-list">
                {programs.map((program) => (
                  <Link
                    key={program.path}
                    to={program.path}
                    className="bac-footer-link"
                  >
                    {program.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* CLUB */}
            <div>
              <p className="bac-footer-heading">
                Club
              </p>

              <div className="bac-footer-link-list">
                <Link
                  to="/"
                  className="bac-footer-link"
                >
                  Home
                </Link>

                <Link
                  to="/our-team"
                  className="bac-footer-link"
                >
                  Our Team
                </Link>

                <Link
                  to="/#contact"
                  className="bac-footer-link"
                >
                  Get In Touch
                </Link>
              </div>
            </div>

            {/* CONNECT */}
            <div>
              <p className="bac-footer-heading">
                Connect
              </p>

              <div
                style={{
                  display: "flex",
                  gap: "8px",
                  marginBottom: "16px",
                }}
              >
                <a
                  href="mailto:analytic@stern.nyu.edu"
                  className="bac-footer-social"
                  aria-label="Email BAC"
                >
                  <Mail
                    style={{
                      width: "17px",
                      height: "17px",
                    }}
                    strokeWidth={1.8}
                  />
                </a>

                <a
                  href="https://www.instagram.com/sternbac"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bac-footer-social"
                  aria-label="BAC Instagram"
                >
                  <Instagram
                    style={{
                      width: "17px",
                      height: "17px",
                    }}
                    strokeWidth={1.8}
                  />
                </a>
              </div>

              <div className="bac-footer-link-list">
                <a
                  href="mailto:analytic@stern.nyu.edu"
                  className="bac-footer-link"
                >
                  analytic@stern.nyu.edu
                </a>

                <a
                  href="https://www.instagram.com/sternbac"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bac-footer-link"
                >
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "5px",
                    }}
                  >
                    @sternbac

                    <ArrowUpRight
                      style={{
                        width: "13px",
                        height: "13px",
                      }}
                      strokeWidth={1.8}
                    />
                  </span>
                </a>
              </div>
            </div>
          </div>

          <div className="bac-footer-bottom-row">
            <span>
              © {new Date().getFullYear()} NYU Business Analytics Club
            </span>

            <span>
              NYU Stern School of Business
            </span>
          </div>
        </div>
      </footer>

      <style>{`
        .bac-footer-main-grid {
          display: grid;
          grid-template-columns: 1.25fr 0.8fr 1fr;
          gap: 60px;
          margin-bottom: 38px;
        }

        .bac-footer-heading {
          margin: 0 0 15px;

          color: #8ad8c2 !important;

          font-size: 0.68rem;
          font-weight: 700;

          letter-spacing: 0.13em;
          text-transform: uppercase;
        }

        .bac-footer-link-list {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 9px;
        }

        .bac-footer-link,
        .bac-footer-link:link,
        .bac-footer-link:visited {
          color: rgba(255, 255, 255, 0.76) !important;
          background: transparent !important;

          font-size: 0.84rem;
          font-weight: 450;
          line-height: 1.4;

          text-decoration: none !important;

          transition:
            color 150ms ease,
            transform 150ms ease;
        }

        .bac-footer-link:hover,
        .bac-footer-link:focus-visible {
          color: #8ad8c2 !important;
          background: transparent !important;
          transform: translateX(3px);
        }

        .bac-footer-social,
        .bac-footer-social:link,
        .bac-footer-social:visited {
          width: 37px;
          height: 37px;

          display: flex;
          align-items: center;
          justify-content: center;

          border: 1px solid rgba(255, 255, 255, 0.28);
          border-radius: 1px;

          background: transparent !important;
          color: rgba(255, 255, 255, 0.86) !important;

          text-decoration: none !important;

          transition:
            background-color 150ms ease,
            border-color 150ms ease,
            color 150ms ease,
            transform 150ms ease;
        }

        .bac-footer-social:hover,
        .bac-footer-social:focus-visible {
          border-color: #66c8ad;

          background: #66c8ad !important;
          color: #17212a !important;

          transform: translateY(-2px);
        }

        .bac-footer-bottom-row {
          display: flex;
          align-items: center;
          justify-content: space-between;

          gap: 20px;

          border-top: 1px solid rgba(255, 255, 255, 0.16);

          padding-top: 20px;

          color: rgba(255, 255, 255, 0.52) !important;

          font-size: 0.72rem;
          line-height: 1.5;
        }

        @media (max-width: 800px) {
          .bac-footer-main-grid {
            grid-template-columns: 1fr 1fr;
            gap: 38px;
          }

          .bac-footer-main-grid > div:first-child {
            grid-column: 1 / -1;
          }
        }

        @media (max-width: 560px) {
          .bac-footer-main-grid {
            grid-template-columns: 1fr;
            gap: 30px;
          }

          .bac-footer-main-grid > div:first-child {
            grid-column: auto;
          }

          .bac-footer-bottom-row {
            flex-direction: column;
            align-items: flex-start;
            gap: 6px;
          }
        }
      `}</style>
    </>
  );
}