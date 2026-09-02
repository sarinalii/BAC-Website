import {
  Link,
  useLocation,
} from "react-router";

import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";

import {
  Calendar,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Users,
} from "lucide-react";

import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type CSSProperties,
} from "react";

/* IMAGES */

import BACCommunity1 from "../../imports/BAC_Community_1.png";
import BACCommunity2 from "../../imports/BAC_Community_2.png";
import BACCommunity3 from "../../imports/BAC_Community_3.png";
import BACCommunity4 from "../../imports/BAC_Community_4.png";
import BACCommunity5 from "../../imports/BAC_Community_5.png";
import BACCommunity6 from "../../imports/BAC_Community_6.png";
import BACCommunity7 from "../../imports/BAC_Community_7.png";
import BACCommunity8 from "../../imports/BAC_Community_8.png";
import BACCommunity9 from "../../imports/BAC_Community_9.png";

import BACAlumniGraphic from "../../imports/BAC_Alumni_Graphic.png";

import InsightPhoto from "../../imports/Insight_Photo.png";
import MLPhoto from "../../imports/ML_Photo.png";
import FLPPhoto from "../../imports/FLP_Photo.png";
import QuantPhoto from "../../imports/Quant_Photo.png";

type ScrollMetrics = {
  y: number;
  progress: number;
};

type CSSVars =
  CSSProperties &
  Record<`--${string}`, string>;

export function Home() {
  const [isReady, setIsReady] =
    useState(false);

  const communityWindowRef = useRef<HTMLDivElement>(null);
  const communityPausedRef = useRef(false);

  const [
    scrollMetrics,
    setScrollMetrics,
  ] = useState<ScrollMetrics>({
    y: 0,
    progress: 0,
  });

  const location = useLocation();

  const sectionRefs =
    useRef<
      (HTMLElement | null)[]
    >([]);

  const programs = useMemo(
    () => [
      {
        name:
          "Freshman Liaison Program",
        shortName:
          "Freshman Liaison Program",
        description:
          "Build foundational analytics skills, develop professionally, and learn from upperclassmen mentors in a close-knit first-year cohort.",
        path:
          "/programs/freshman-liaison",
        applicationsOpen: false,
        image: FLPPhoto,
      },
      {
        name: "Insight Team",
        shortName: "Insight Team",
        description:
          "Work in small teams on semester-long analytics projects for real companies and turn complex data into strategic business recommendations.",
        path:
          "/programs/insight-team",
        applicationsOpen: false,
        image: InsightPhoto,
      },
      {
        name: "Quant Team",
        shortName: "Quant Team",
        description:
          "Explore quantitative trading through probability, trading games, mentorship, recruiting preparation, and exposure to trading firms.",
        path:
          "/programs/quant-team",
        applicationsOpen: false,
        image: QuantPhoto,
      },
      {
        name:
          "Machine Learning Team",
        shortName:
          "Machine Learning Team",
        description:
          "Learn modern machine learning through technical instruction and team projects that apply Python-based models to real-world problems.",
        path:
          "/programs/ml-team",
        applicationsOpen: false,
        image: MLPhoto,
      },
    ],
    []
  );

  const events = useMemo(
    () => [
      {
        name: "Hackathon",
        description:
          "Our annual build sprint where students use data, technology, and analytical thinking to solve real business problems.",
      },
      {
        name:
          "Trading Competition",
        description:
          "A competitive environment for students to test market judgment, probability, risk management, and decision-making under pressure.",
      },
    ],
    []
  );

  const communityPhotos =
    useMemo(
      () => [
        {
          id: 1,
          src: BACCommunity1,
          alt: "BAC Community 1",
        },
        {
          id: 2,
          src: BACCommunity2,
          alt: "BAC Community 2",
        },
        {
          id: 3,
          src: BACCommunity3,
          alt: "BAC Community 3",
        },
        {
          id: 4,
          src: BACCommunity4,
          alt: "BAC Community 4",
        },
        {
          id: 5,
          src: BACCommunity5,
          alt: "BAC Community 5",
        },
        {
          id: 6,
          src: BACCommunity6,
          alt: "BAC Community 6",
        },
        {
          id: 7,
          src: BACCommunity7,
          alt: "BAC Community 7",
        },
        {
          id: 8,
          src: BACCommunity8,
          alt: "BAC Community 8",
        },
        {
          id: 9,
          src: BACCommunity9,
          alt: "BAC Community 9",
        },
      ],
      []
    );

  const setSectionRef =
    (index: number) =>
    (
      element:
        | HTMLElement
        | null
    ): void => {
      sectionRefs.current[index] =
        element;
    };

  const delayStyle = (
    index: number
  ): CSSVars =>
    ({
      "--delay": `${
        index * 90
      }ms`,
    }) as CSSVars;

  /* SCROLL TO TOP / HASH NAVIGATION */

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "auto",
      });

      return;
    }

    const targetId =
      location.hash.replace(
        "#",
        ""
      );

    window.setTimeout(() => {
      const element =
        document.getElementById(
          targetId
        );

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 0);
  }, [location.pathname, location.hash]);

  /* SECTION VISIBILITY */

  useEffect(() => {
    setIsReady(true);

    const observer =
      new IntersectionObserver(
        (entries) => {
          entries.forEach(
            (entry) => {
              entry.target.classList.toggle(
                "is-visible",
                entry.isIntersecting
              );
            }
          );
        },
        {
          threshold: 0.14,
          rootMargin:
            "0px 0px -10% 0px",
        }
      );

    sectionRefs.current.forEach(
      (section) => {
        if (section) {
          observer.observe(section);
        }
      }
    );

    return () => {
      observer.disconnect();
    };
  }, []);

  /* SCROLL MOTION */

  useEffect(() => {
    let frame = 0;

    const clamp = (
      value: number,
      min: number,
      max: number
    ) =>
      Math.min(
        Math.max(
          value,
          min
        ),
        max
      );

    const updateMotion = () => {
      const reduceMotion =
        window.matchMedia(
          "(prefers-reduced-motion: reduce)"
        ).matches;

      const scrollTop =
        window.scrollY ||
        window.pageYOffset;

      const maxScroll =
        document.documentElement
          .scrollHeight -
        window.innerHeight;

      const pageProgress =
        maxScroll > 0
          ? clamp(
              scrollTop /
                maxScroll,
              0,
              1
            )
          : 0;

      setScrollMetrics({
        y: scrollTop,
        progress:
          pageProgress,
      });

      document
        .querySelectorAll<HTMLElement>(
          "[data-motion-group]"
        )
        .forEach((group) => {
          const viewportHeight =
            window.innerHeight ||
            1;

          const rect =
            group.getBoundingClientRect();

          const progress =
            clamp(
              (
                viewportHeight *
                  0.86 -
                rect.top
              ) /
                (
                  viewportHeight +
                  rect.height
                ),
              0,
              1
            );

          const center =
            rect.top +
            rect.height / 2;

          const focus =
            clamp(
              1 -
                Math.abs(
                  center -
                    viewportHeight /
                      2
                ) /
                  (
                    viewportHeight /
                    2
                  ),
              0,
              1
            );

          group.style.setProperty(
            "--group-progress",
            progress.toFixed(4)
          );

          group.style.setProperty(
            "--group-focus",
            focus.toFixed(4)
          );
        });

      document
        .querySelectorAll<HTMLElement>(
          "[data-motion-card]"
        )
        .forEach((card) => {
          const viewportHeight =
            window.innerHeight ||
            1;

          const rect =
            card.getBoundingClientRect();

          const center =
            rect.top +
            rect.height / 2;

          const focus =
            clamp(
              1 -
                Math.abs(
                  center -
                    viewportHeight /
                      2
                ) /
                  (
                    viewportHeight /
                    2
                  ),
              0,
              1
            );

          const reveal =
            clamp(
              (
                viewportHeight *
                  0.92 -
                rect.top
              ) /
                (
                  viewportHeight *
                  0.72
                ),
              0,
              1
            );

          const dirValue =
            card.dataset.dir ||
            "center";

          const direction =
            dirValue === "right"
              ? 1
              : dirValue ===
                    "left"
                ? -1
                : 0;

          const depth =
            Number(
              card.dataset
                .depth ||
                "1"
            );

          const x =
            reduceMotion
              ? 0
              : direction *
                (1 - reveal) *
                14 *
                depth;

          const y =
            reduceMotion
              ? 0
              : (1 - reveal) *
                12 *
                depth;

          const scale =
            reduceMotion
              ? 1
              : 0.995 +
                focus *
                  0.005;

          const opacity =
            reduceMotion
              ? 1
              : 0.88 +
                reveal *
                  0.12;

          card.style.setProperty(
            "--card-x",
            `${x.toFixed(
              2
            )}px`
          );

          card.style.setProperty(
            "--card-y",
            `${y.toFixed(
              2
            )}px`
          );

          card.style.setProperty(
            "--card-scale",
            scale.toFixed(4)
          );

          card.style.setProperty(
            "--card-opacity",
            opacity.toFixed(3)
          );

          card.style.setProperty(
            "--card-focus",
            focus.toFixed(4)
          );

          card.style.setProperty(
            "--card-reveal",
            reveal.toFixed(4)
          );
        });
    };

    const requestUpdate = () => {
      if (frame) {
        return;
      }

      frame =
        window.requestAnimationFrame(
          () => {
            updateMotion();
            frame = 0;
          }
        );
    };

    updateMotion();

    window.addEventListener(
      "scroll",
      requestUpdate,
      {
        passive: true,
      }
    );

    window.addEventListener(
      "resize",
      requestUpdate
    );

    return () => {
      window.removeEventListener(
        "scroll",
        requestUpdate
      );

      window.removeEventListener(
        "resize",
        requestUpdate
      );

      if (frame) {
        window.cancelAnimationFrame(
          frame
        );
      }
    };
  }, []);

  /* COMMUNITY AUTO-SCROLL */

  useEffect(() => {
    const el = communityWindowRef.current;
    if (!el) return;
    let raf: number;
    let lastTime = 0;
    const speed = 55; // px/sec

    const step = (time: number) => {
      if (lastTime !== 0 && !communityPausedRef.current) {
        const dt = (time - lastTime) / 1000;
        el.scrollLeft += speed * dt;
        const half = el.scrollWidth / 2;
        if (el.scrollLeft >= half) {
          el.scrollLeft -= half;
        }
      }
      lastTime = time;
      raf = requestAnimationFrame(step);
    };

    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div className="bac-page relative overflow-hidden">
      <div
        className="bac-scroll-progress"
        style={{
          transform: `scaleX(${scrollMetrics.progress})`,
        }}
      />

      {/* HERO */}

      <section className="bac-hero">
        <div
          className={`bac-hero-content relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 transition-all duration-1000 sm:px-6 lg:grid-cols-[1.03fr_0.97fr] lg:px-8 ${
            isReady
              ? "translate-y-0 opacity-100"
              : "translate-y-6 opacity-0"
          }`}
        >
          <div
            className="pt-8 text-center lg:pt-10 lg:text-left"
            style={{
              transform: `translate3d(0, ${
                scrollMetrics.y *
                -0.01
              }px, 0)`,
            }}
          >
            <h1 className="bac-display bac-hero-title bac-title">
              Business Analytics
              Club
            </h1>

            <p className="bac-hero-description mx-auto lg:mx-0">
              Where data meets
              business. Build
              analytical, technical,
              and strategic skills
              through hands-on
              projects, professional
              development, and a
              community of students
              excited by technology.
            </p>

            <div className="mt-9 flex flex-wrap justify-center gap-3 lg:justify-start">
              <Button
                asChild
                className="bac-button-primary px-6 py-3 text-base"
              >
                <a href="#programs">
                  Explore Programs
                </a>
              </Button>

              <Button
                asChild
                variant="outline"
                className="bac-button-secondary px-6 py-3 text-base"
              >
                <a href="#contact">
                  Get Involved
                </a>
              </Button>
            </div>
          </div>

          <div
            data-motion-group
            className="bac-hero-visual relative mx-auto h-[430px] w-full max-w-[540px]"
            style={{
              transform: `translate3d(0, ${
                scrollMetrics.y *
                0.008
              }px, 0)`,
            }}
          >
            <div className="bac-overview-card">
              <div className="mb-6 flex items-start justify-between gap-4">
                <div>
                  <p className="bac-label mb-2">
                    Programs
                  </p>

                  <h3 className="text-2xl font-semibold tracking-[-0.035em] text-[var(--bac-ink)]">
                    Four ways to
                    build
                  </h3>
                </div>

                <span className="bac-pill">
                  4 Programs
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {programs.map(
                  (program) => (
                    <Link
                      key={
                        program.path
                      }
                      to={
                        program.path
                      }
                      className="bac-team-tile flex items-center justify-center text-center no-underline"
                    >
                      <strong>
                        {
                          program.shortName
                        }
                      </strong>
                    </Link>
                  )
                )}
              </div>

              <div className="bac-hero-stats mt-7 grid grid-cols-3 gap-5">
                <div>
                  <span>4</span>
                  <p>Programs</p>
                </div>

                <div>
                  <span>2</span>
                  <p>
                    Flagship Events
                  </p>
                </div>

                <div>
                  <span>1</span>
                  <p>
                    Community
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GET INVOLVED */}

      <section
        id="contact"
        className="bac-section bac-section-soft relative scroll-mt-24 py-24"
        ref={setSectionRef(
          0
        )}
      >
        <div className="bac-section-number">
          01
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div
            data-motion-group
            className="bac-section-heading"
          >
            <h2 className="bac-display mb-5 text-center text-4xl font-semibold text-[var(--bac-ink)] md:text-5xl">
              Get Involved
            </h2>
          </div>

          <div
            data-motion-card
            data-dir="center"
            data-depth="0.35"
            className="bac-scroll-card mx-auto mb-8 flex max-w-3xl flex-col items-center justify-center gap-5 border-y border-[var(--bac-border)] py-5 text-center sm:flex-row sm:gap-10 sm:text-left"
          >
            <div className="flex items-center gap-3">
              <div className="bac-info-icon">
                <Calendar
                  className="h-5 w-5 text-[var(--bac-primary-dark)]"
                  strokeWidth={1.8}
                />
              </div>

              <div>
                <p className="mb-1 text-xs font-semibold uppercase tracking-[0.09em] text-[var(--bac-soft)]">
                  General Meetings
                </p>

                <p className="font-semibold text-[var(--bac-ink)]">
                  Wednesdays, Common Hour
                </p>
              </div>
            </div>

            <div className="hidden h-10 w-px bg-[var(--bac-border)] sm:block" />

            <div className="flex items-center gap-3">
              <div className="bac-info-icon">
                <MapPin
                  className="h-5 w-5 text-[var(--bac-primary-dark)]"
                  strokeWidth={1.8}
                />
              </div>

              <div>
                <p className="mb-1 text-xs font-semibold uppercase tracking-[0.09em] text-[var(--bac-soft)]">
                  Location
                </p>

                <p className="font-semibold text-[var(--bac-ink)]">
                  Room T-201, Stern
                </p>
              </div>
            </div>
          </div>

          <div
            data-motion-group
            className="grid grid-cols-2 gap-6 md:grid-cols-4"
          >
            <Card
              data-motion-card
              data-dir="left"
              data-depth="0.7"
              className="bac-scroll-card bac-card bac-contact-card group overflow-hidden p-8 text-center"
              style={delayStyle(0)}
            >
              <div className="relative z-10">
                <div className="bac-icon-shell mx-auto mb-5">
                  <Facebook
                    className="h-7 w-7 text-[var(--bac-slate-dark)]"
                    strokeWidth={1.8}
                  />
                </div>

                <h3 className="mb-2 text-xl font-semibold text-[var(--bac-ink)]">
                  Facebook
                </h3>

                <p className="mb-5 text-sm leading-relaxed text-[var(--bac-muted)]">
                  Follow our Facebook page for
                  announcements and event updates.
                </p>

                <Button
                  variant="outline"
                  asChild
                  className="bac-button-secondary"
                >
                  <a
                    href="https://www.facebook.com/SternBAC/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    SternBAC
                  </a>
                </Button>
              </div>
            </Card>

            <Card
              data-motion-card
              data-dir="left"
              data-depth="0.65"
              className="bac-scroll-card bac-card bac-contact-card group overflow-hidden p-8 text-center"
              style={delayStyle(1)}
            >
              <div className="relative z-10">
                <div className="bac-icon-shell mx-auto mb-5">
                  <Instagram
                    className="h-7 w-7 text-[var(--bac-slate-dark)]"
                    strokeWidth={1.8}
                  />
                </div>

                <h3 className="mb-2 text-xl font-semibold text-[var(--bac-ink)]">
                  Instagram
                </h3>

                <p className="mb-5 text-sm leading-relaxed text-[var(--bac-muted)]">
                  Follow BAC for program
                  applications, events, speaker
                  sessions, and club updates.
                </p>

                <Button
                  variant="outline"
                  asChild
                  className="bac-button-secondary"
                >
                  <a
                    href="https://www.instagram.com/sternbac"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    @sternbac
                  </a>
                </Button>
              </div>
            </Card>

            <Card
              data-motion-card
              data-dir="right"
              data-depth="0.65"
              className="bac-scroll-card bac-card bac-contact-card group overflow-hidden p-8 text-center"
              style={delayStyle(2)}
            >
              <div className="relative z-10">
                <div className="bac-icon-shell mx-auto mb-5">
                  <Mail
                    className="h-7 w-7 text-[var(--bac-slate-dark)]"
                    strokeWidth={1.8}
                  />
                </div>

                <h3 className="mb-2 text-xl font-semibold text-[var(--bac-ink)]">
                  Email Us
                </h3>

                <p className="mb-5 text-sm leading-relaxed text-[var(--bac-muted)]">
                  Questions about programs,
                  recruiting, partnerships, or
                  upcoming events?
                </p>

                <Button
                  variant="outline"
                  asChild
                  className="bac-button-secondary"
                >
                  <a href="mailto:analytic@stern.nyu.edu">
                    Contact BAC
                  </a>
                </Button>
              </div>
            </Card>

            <Card
              data-motion-card
              data-dir="right"
              data-depth="0.7"
              className="bac-scroll-card bac-card bac-contact-card group overflow-hidden p-8 text-center"
              style={delayStyle(3)}
            >
              <div className="relative z-10">
                <div className="bac-icon-shell mx-auto mb-5">
                  <Users
                    className="h-7 w-7 text-[var(--bac-slate-dark)]"
                    strokeWidth={1.8}
                  />
                </div>

                <h3 className="mb-2 text-xl font-semibold text-[var(--bac-ink)]">
                  Coffee Chat
                </h3>

                <p className="mb-5 text-sm leading-relaxed text-[var(--bac-muted)]">
                  Speak with a member of BAC
                  to learn more about our
                  programs and community.
                </p>

                <Button
                  variant="outline"
                  asChild
                  className="bac-button-secondary"
                >
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSc43qdeUS2S1XmHiNdGX9MirEr5gUX_fOtnPERZYiJwrfyH9g/viewform?usp=dialog"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Schedule Chat
                  </a>
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* FEATURED EVENTS */}

      <section
        className="bac-section bac-section-blue relative py-24"
        ref={setSectionRef(
          1
        )}
      >
        <div className="bac-section-number">
          02
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div
            data-motion-group
            className="bac-section-heading"
          >
            <h2 className="bac-display mb-12 text-center text-4xl font-semibold text-[var(--bac-ink)] md:text-5xl">
              Featured Events
            </h2>
          </div>

          <div data-motion-group>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {events.map(
                (
                  event,
                  index
                ) => (
                  <Card
                    key={
                      event.name
                    }
                    data-motion-card
                    data-dir={
                      index %
                        2 ===
                      0
                        ? "left"
                        : "right"
                    }
                    data-depth="0.7"
                    className="bac-scroll-card bac-card bac-event-card group relative overflow-hidden p-8"
                    style={delayStyle(
                      index
                    )}
                  >
                    <div className="bac-event-inner relative z-10 grid grid-cols-1 items-center gap-6 lg:grid-cols-[1fr_180px]">
                      <div>
                        <p className="bac-label mb-3">
                          Featured Event
                        </p>

                        <h3 className="mb-4 text-2xl font-semibold tracking-[-0.035em] text-[var(--bac-ink)]">
                          {
                            event.name
                          }
                        </h3>

                        <p className="leading-relaxed text-[var(--bac-muted)]">
                          {
                            event.description
                          }
                        </p>
                      </div>

                      <div className="bac-event-art-wrap">
                        {event.name ===
                        "Hackathon" ? (
                          <div
                            className="bac-hackathon-art"
                            aria-hidden="true"
                          >
                            <div className="bac-code-window">
                              <span />
                              <span />
                              <span />
                            </div>

                            <div className="bac-code-lines">
                              <i />
                              <i />
                              <i />
                              <i />
                            </div>
                          </div>
                        ) : (
                          <div
                            className="bac-trading-art"
                            aria-hidden="true"
                          >
                            <div className="bac-candle bac-candle-1" />
                            <div className="bac-candle bac-candle-2" />
                            <div className="bac-candle bac-candle-3" />
                            <div className="bac-candle bac-candle-4" />
                          </div>
                        )}
                      </div>
                    </div>
                  </Card>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* COMMUNITY */}

      <section
        className="bac-section bac-community-section relative py-24"
        ref={setSectionRef(
          2
        )}
      >
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div
            data-motion-group
            className="bac-section-heading bac-community-heading"
          >
            <h2 className="bac-display mb-12 text-center text-4xl font-semibold text-white md:text-5xl">
              Our Community
            </h2>
          </div>

          <div
            ref={communityWindowRef}
            className="bac-community-window"
            onMouseEnter={() => { communityPausedRef.current = true; }}
            onMouseLeave={() => { communityPausedRef.current = false; }}
            onTouchStart={() => { communityPausedRef.current = true; }}
            onTouchEnd={() => { communityPausedRef.current = false; }}
          >
            <div className="bac-community-track pb-4">
              {[
                ...communityPhotos,
                ...communityPhotos,
              ].map(
                (
                  photo,
                  index
                ) => (
                  <div
                    key={`${photo.id}-${index}`}
                    className="bac-community-card group relative overflow-hidden"
                  >
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      loading="lazy"
                    />
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ALUMNI */}

      <section
        className="bac-section bac-section-mint relative py-24"
        ref={setSectionRef(
          3
        )}
      >
        <div className="bac-section-number">
          03
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div
            data-motion-group
            className="bac-section-heading"
          >
            <h2 className="bac-display mb-8 text-center text-4xl font-semibold text-[var(--bac-ink)] md:text-5xl">
              Alumni Destinations
            </h2>
          </div>

          <div
            data-motion-group
            data-motion-card
            data-dir="center"
            data-depth="0.55"
            className="bac-scroll-card bac-alumni-card mx-auto max-w-4xl overflow-hidden"
          >
            <img
              src={BACAlumniGraphic}
              alt="BAC Alumni Destinations"
              className="block h-auto w-full object-contain"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* PROGRAMS */}

      <section
        id="programs"
        className="bac-section bac-section-light relative scroll-mt-24 py-24"
        ref={setSectionRef(
          4
        )}
      >
        <div className="bac-section-number">
          04
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div
            data-motion-group
            className="bac-section-heading"
          >
            <h2 className="bac-display mb-4 text-center text-4xl font-semibold text-[var(--bac-ink)] md:text-5xl">
              Our Programs
            </h2>
          </div>

          <div
            data-motion-group
            className="relative space-y-6"
          >
            {programs.map(
              (
                program,
                index
              ) => (
                <Card
                  key={
                    program.name
                  }
                  data-motion-card
                  data-dir={
                    index %
                      2 ===
                    0
                      ? "left"
                      : "right"
                  }
                  data-depth="0.6"
                  className="bac-scroll-card bac-card bac-program-card group relative overflow-hidden p-7 md:p-8"
                  style={delayStyle(
                    index
                  )}
                >
                  <div className="relative z-10 grid grid-cols-1 items-center gap-7 md:grid-cols-3">
                    <div className="md:col-span-1">
                      <div className="bac-photo-placeholder aspect-video overflow-hidden border border-[var(--bac-border)] bg-[var(--bac-off-white)]">
                        <img
                          src={
                            program.image
                          }
                          alt={`${program.name} team`}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                          loading="lazy"
                        />
                      </div>
                    </div>

                    <div className="md:col-span-2">
                      <div className="mb-3 flex items-center gap-3">
                        <span className="bac-track-index">
                          {String(
                            index +
                              1
                          ).padStart(
                            2,
                            "0"
                          )}
                        </span>

                        <h3 className="text-2xl font-semibold tracking-[-0.035em] text-[var(--bac-ink)]">
                          {
                            program.name
                          }
                        </h3>
                      </div>

                      <p className="mb-6 max-w-2xl leading-relaxed text-[var(--bac-muted)]">
                        {
                          program.description
                        }
                      </p>

                      <div className="flex flex-wrap gap-3">
                        <Button
                          asChild
                          variant="outline"
                          className="bac-button-secondary"
                        >
                          <Link
                            to={
                              program.path
                            }
                          >
                            Learn More
                          </Link>
                        </Button>

                        {program.applicationsOpen ? (
                          <Button
                            asChild
                            className="bac-button-primary"
                          >
                            <a
                              href={`mailto:analytic@stern.nyu.edu?subject=${encodeURIComponent(
                                `${program.name} Application Interest`
                              )}`}
                            >
                              Application Interest
                            </a>
                          </Button>
                        ) : (
                          <Button
                            disabled
                            className="rounded-none border border-[var(--bac-border)] bg-[var(--bac-slate-soft)] text-[var(--bac-soft)] shadow-none"
                          >
                            Applications Closed
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </Card>
              )
            )}
          </div>
        </div>
      </section>
    </div>
  );
}