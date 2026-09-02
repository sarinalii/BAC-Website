import {
  Link,
  useLocation,
  useNavigate,
} from "react-router";

import {
  ChevronDown,
  Menu,
  X,
} from "lucide-react";

import {
  useEffect,
  useRef,
  useState,
} from "react";

import logo from "../../imports/Screenshot_2026-06-07_at_11.21.16.png";

const programs = [
  {
    name: "Freshman Liaison Program",
    shortName: "FLP",
    path: "/programs/freshman-liaison",
  },
  {
    name: "Insight Team",
    shortName: "Insight",
    path: "/programs/insight-team",
  },
  {
    name: "Quant Team",
    shortName: "Quant",
    path: "/programs/quant-team",
  },
  {
    name: "Machine Learning Team",
    shortName: "ML",
    path: "/programs/ml-team",
  },
];

export function Header() {
  const [programsOpen, setProgramsOpen] =
    useState(false);

  const [mobileOpen, setMobileOpen] =
    useState(false);

  const dropdownRef =
    useRef<HTMLDivElement | null>(null);

  const location = useLocation();
  const navigate = useNavigate();

  const programsActive =
    location.pathname.startsWith("/programs/");

  const isActive = (path: string) =>
    location.pathname === path;

  const handleContact = () => {
    setMobileOpen(false);
    setProgramsOpen(false);

    if (location.pathname === "/") {
      document
        .getElementById("contact")
        ?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });

      return;
    }

    navigate({
      pathname: "/",
      hash: "#contact",
    });
  };

  useEffect(() => {
    setProgramsOpen(false);
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleOutsideClick = (
      event: MouseEvent
    ) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(
          event.target as Node
        )
      ) {
        setProgramsOpen(false);
      }
    };

    const handleEscape = (
      event: KeyboardEvent
    ) => {
      if (event.key === "Escape") {
        setProgramsOpen(false);
        setMobileOpen(false);
      }
    };

    document.addEventListener(
      "mousedown",
      handleOutsideClick
    );

    document.addEventListener(
      "keydown",
      handleEscape
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handleOutsideClick
      );

      document.removeEventListener(
        "keydown",
        handleEscape
      );
    };
  }, []);

  return (
    <>
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 80,
          width: "100%",
          background: "#ffffff",
          borderBottom:
            "1px solid rgba(23, 33, 42, 0.13)",
          fontFamily:
            '"Helvetica Neue", Helvetica, Arial, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
        }}
      >
        <div
          style={{
            width:
              "min(calc(100% - 32px), 1280px)",
            height: "60px",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* LOGO */}
          <Link
            to="/"
            aria-label="NYU Business Analytics Club home"
            onClick={() => {
              setProgramsOpen(false);
              setMobileOpen(false);
            }}
            style={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
            }}
          >
            <img
              src={logo}
              alt="NYU Business Analytics Club"
              style={{
                display: "block",
                width: "auto",
                height: "30px",
              }}
            />
          </Link>

          {/* DESKTOP NAV */}
          <nav
            className="bac-header-desktop-nav"
            aria-label="Primary navigation"
            style={{
              height: "100%",
              alignItems: "center",
              gap: "28px",
            }}
          >
            <Link
              to="/"
              className="bac-header-nav-item"
              data-active={
                isActive("/") ? "true" : "false"
              }
            >
              Home
            </Link>

            {/* PROGRAMS */}
            <div
              ref={dropdownRef}
              style={{
                position: "relative",
                height: "100%",
                display: "flex",
                alignItems: "center",
              }}
              onMouseEnter={() =>
                setProgramsOpen(true)
              }
              onMouseLeave={() =>
                setProgramsOpen(false)
              }
            >
              <button
                type="button"
                className="bac-header-nav-item"
                data-active={
                  programsActive
                    ? "true"
                    : "false"
                }
                onClick={() =>
                  setProgramsOpen(
                    (current) => !current
                  )
                }
                aria-haspopup="menu"
                aria-expanded={programsOpen}
                style={{
                  border: 0,
                  background: "transparent",
                  cursor: "pointer",
                  fontFamily: "inherit",
                }}
              >
                Programs

                <ChevronDown
                  style={{
                    width: "14px",
                    height: "14px",
                    marginLeft: "4px",
                    transform: programsOpen
                      ? "rotate(180deg)"
                      : "rotate(0deg)",
                    transition:
                      "transform 150ms ease",
                  }}
                  strokeWidth={1.8}
                />
              </button>

              {programsOpen && (
                <div
                  role="menu"
                  style={{
                    position: "absolute",
                    top: "100%",
                    left: "-18px",
                    width: "270px",
                    background: "#ffffff",
                    border:
                      "1px solid rgba(23, 33, 42, 0.13)",
                    boxShadow:
                      "0 8px 24px rgba(23, 33, 42, 0.10)",
                  }}
                >
                  {programs.map(
                    (program, index) => {
                      const active =
                        location.pathname ===
                        program.path;

                      return (
                        <Link
                          key={program.path}
                          to={program.path}
                          role="menuitem"
                          className="bac-program-dropdown-link"
                          data-active={
                            active
                              ? "true"
                              : "false"
                          }
                          onClick={() =>
                            setProgramsOpen(
                              false
                            )
                          }
                        >
                          <span className="bac-program-dropdown-index">
                            {String(
                              index + 1
                            ).padStart(
                              2,
                              "0"
                            )}
                          </span>

                          <span>
                            {program.name}
                          </span>
                        </Link>
                      );
                    }
                  )}
                </div>
              )}
            </div>

            <Link
              to="/our-team"
              className="bac-header-nav-item"
              data-active={
                isActive("/our-team")
                  ? "true"
                  : "false"
              }
            >
              Our Team
            </Link>

            <button
              type="button"
              onClick={handleContact}
              className="bac-header-contact-button"
            >
              Contact Us
            </button>
          </nav>

          {/* MOBILE TOGGLE */}
          <button
            type="button"
            className="bac-mobile-toggle-button"
            aria-label={
              mobileOpen
                ? "Close navigation"
                : "Open navigation"
            }
            aria-expanded={mobileOpen}
            onClick={() =>
              setMobileOpen(
                (current) => !current
              )
            }
          >
            {mobileOpen ? (
              <X
                style={{
                  width: "21px",
                  height: "21px",
                }}
                strokeWidth={1.8}
              />
            ) : (
              <Menu
                style={{
                  width: "21px",
                  height: "21px",
                }}
                strokeWidth={1.8}
              />
            )}
          </button>
        </div>

        {/* MOBILE NAV */}
        {mobileOpen && (
          <div className="bac-mobile-menu">
            <Link
              to="/"
              className="bac-mobile-main-link"
              onClick={() =>
                setMobileOpen(false)
              }
            >
              Home
            </Link>

            <div
              style={{
                padding: "15px 0",
                borderBottom:
                  "1px solid rgba(23, 33, 42, 0.13)",
              }}
            >
              <span
                style={{
                  display: "block",
                  marginBottom: "8px",
                  color: "#626f7e",
                  fontSize: "0.67rem",
                  fontWeight: 700,
                  letterSpacing: "0.11em",
                  textTransform: "uppercase",
                }}
              >
                Programs
              </span>

              {programs.map(
                (program, index) => {
                  const active =
                    location.pathname ===
                    program.path;

                  return (
                    <Link
                      key={program.path}
                      to={program.path}
                      className="bac-mobile-program-link"
                      data-active={
                        active
                          ? "true"
                          : "false"
                      }
                      onClick={() =>
                        setMobileOpen(false)
                      }
                    >
                      <span
                        style={{
                          width: "30px",
                          flexShrink: 0,
                          color: active
                            ? "#34414e"
                            : "#3daa8d",
                          fontSize:
                            "0.65rem",
                          fontWeight: 700,
                          letterSpacing:
                            "0.06em",
                        }}
                      >
                        {String(
                          index + 1
                        ).padStart(
                          2,
                          "0"
                        )}
                      </span>

                      <span>
                        {program.name}
                      </span>
                    </Link>
                  );
                }
              )}
            </div>

            <Link
              to="/our-team"
              className="bac-mobile-main-link"
              onClick={() =>
                setMobileOpen(false)
              }
            >
              Our Team
            </Link>

            <button
              type="button"
              className="bac-mobile-contact-link"
              onClick={handleContact}
            >
              Contact Us
            </button>
          </div>
        )}
      </header>

      <style>{`
        /* ===============================================
           DESKTOP HEADER
           =============================================== */

        .bac-header-desktop-nav {
          display: flex;
        }

        .bac-header-nav-item {
          position: relative;
          height: 100%;
          display: inline-flex;
          align-items: center;
          justify-content: center;

          color: #34414e;
          text-decoration: none;

          font-size: 0.84rem;
          font-weight: 600;

          transition:
            color 150ms ease,
            background-color 150ms ease;
        }

        .bac-header-nav-item::after {
          content: "";

          position: absolute;
          left: 0;
          right: 0;
          bottom: -1px;

          height: 2px;

          background: #66c8ad;

          transform: scaleX(0);
          transform-origin: left;

          transition: transform 150ms ease;
        }

        .bac-header-nav-item:hover {
          color: #17212a;
        }

        .bac-header-nav-item:hover::after,
        .bac-header-nav-item[data-active="true"]::after {
          transform: scaleX(1);
        }

        .bac-header-nav-item[data-active="true"] {
          color: #17212a;
        }


        /* ===============================================
           PROGRAM DROPDOWN

           IMPORTANT:
           Selected program is explicitly mint,
           NEVER transparent.
           =============================================== */

        .bac-program-dropdown-link {
          min-height: 52px;

          display: grid;
          grid-template-columns: 30px 1fr;
          align-items: center;
          gap: 8px;

          padding: 9px 16px;

          border-bottom:
            1px solid rgba(23, 33, 42, 0.10);

          background: #ffffff;
          color: #53606c;

          text-decoration: none;

          font-size: 0.82rem;
          font-weight: 600;
          line-height: 1.25;

          transition:
            background-color 150ms ease,
            color 150ms ease,
            padding-left 150ms ease;
        }

        .bac-program-dropdown-link:last-child {
          border-bottom: 0;
        }

        .bac-program-dropdown-link:hover {
          background: #dff5ee;
          color: #17212a;

          padding-left: 20px;
        }

        .bac-program-dropdown-link[data-active="true"] {
          background: #ccefe4;
          color: #17212a;

          font-weight: 700;
        }

        .bac-program-dropdown-link[data-active="true"]:hover {
          background: #bce8da;
          color: #17212a;
        }

        .bac-program-dropdown-index {
          color: #3daa8d;

          font-size: 0.64rem;
          font-weight: 700;
          letter-spacing: 0.07em;
        }

        .bac-program-dropdown-link[data-active="true"]
        .bac-program-dropdown-index {
          color: #34414e;
        }


        /* ===============================================
           CONTACT BUTTON
           =============================================== */

        .bac-header-contact-button {
          min-height: 36px;

          border: 1px solid #34414e;
          border-radius: 1px;

          padding: 0 16px;

          background: #34414e;
          color: #ffffff;

          font-family: inherit;
          font-size: 0.81rem;
          font-weight: 600;

          cursor: pointer;

          transition:
            background-color 150ms ease,
            border-color 150ms ease,
            color 150ms ease,
            transform 150ms ease;
        }

        .bac-header-contact-button:hover {
          border-color: #66c8ad;

          background: #66c8ad;
          color: #17212a;

          transform: translateY(-1px);
        }


        /* ===============================================
           MOBILE
           =============================================== */

        .bac-mobile-toggle-button {
          display: none;

          align-items: center;
          justify-content: center;

          border: 0;

          padding: 5px;

          background: transparent;
          color: #17212a;

          cursor: pointer;
        }

        .bac-mobile-menu {
          display: none;

          padding: 8px 16px 20px;

          border-top:
            1px solid rgba(23, 33, 42, 0.13);

          background: #ffffff;
        }

        .bac-mobile-main-link,
        .bac-mobile-contact-link {
          width: 100%;
          min-height: 48px;

          display: flex;
          align-items: center;

          border: 0;
          border-bottom:
            1px solid rgba(23, 33, 42, 0.13);

          padding: 0;

          background: transparent;
          color: #17212a;

          font-family: inherit;
          font-size: 0.94rem;
          font-weight: 600;

          text-decoration: none;
          text-align: left;

          cursor: pointer;
        }

        .bac-mobile-program-link {
          min-height: 43px;

          display: flex;
          align-items: center;

          padding: 0 8px;

          color: #53606c;
          background: transparent;

          font-size: 0.85rem;
          font-weight: 600;

          text-decoration: none;

          transition:
            background-color 150ms ease,
            color 150ms ease;
        }

        .bac-mobile-program-link:hover {
          background: #dff5ee;
          color: #17212a;
        }

        .bac-mobile-program-link[data-active="true"] {
          background: #ccefe4;
          color: #17212a;

          font-weight: 700;
        }


        /* ===============================================
           RESPONSIVE
           =============================================== */

        @media (max-width: 768px) {
          .bac-header-desktop-nav {
            display: none;
          }

          .bac-mobile-toggle-button {
            display: flex;
          }

          .bac-mobile-menu {
            display: block;
          }
        }
      `}</style>
    </>
  );
}