import { useEffect } from "react";
import { Button } from "../../components/ui/button";
import { useBACMotion } from "../../hooks/useBACMotion";
import { ExternalLink } from "lucide-react";
import FLPPhoto from "../../../imports/FLP_Photo.png";

const pillars = [
  {
    title: "Professional Development",
    body: "Build career readiness through resume workshops, mock interviews, and speaker events with industry professionals.",
  },
  {
    title: "Mentorship",
    body: "Receive personalized guidance from upperclassmen mentors who provide support on academics, recruiting, and skill development.",
  },
  {
    title: "Community Involvement",
    body: "Join a tight-knit cohort of peers and contribute to the club's events, initiatives, and broader Stern community.",
  },
  {
    title: "Data Analytics Projects",
    body: "Gain hands-on experience using Python and other tools to analyze real-world business data and present actionable insights.",
  },
];

const speakerTopics = [
  "Investment Banking",
  "Venture Capital",
  "Startups & Entrepreneurship",
  "Sales & Trading",
  "Technology & Product",
  "Consulting",
  "Data Science",
  "Private Equity",
];

const projects = [
  {
    title: "Diamond Valuation Analysis: Lab-Grown vs. Mined",
    body: "An exploration of how the Four C's impact pricing and value perception between lab-grown and natural diamonds, examining the forces behind De Beers' 40% price cut and the shift in consumer preferences.",
    href: "https://drive.google.com/file/d/1HizCKhFfzY9I5qgcBQKb2U3k8jqSKXNY/view?usp=drive_link",
  },
];

const pastClasses = [
  {
    semester: "Fall 2024",
    shortSemester: "F24",
    members: [
      "Brian Dai",
      "Hodge Dauler",
      "Tony Diao",
      "Melissa",
      "Sarina Li",
      "Vivek Bellam",
      "Aum Narkar",
      "Annika Kumar",
      "Isabella Gu",
    ],
  },
  {
    semester: "Spring 2025",
    shortSemester: "S25",
    members: [
      "Aishwarya Seshadri",
      "Daniel Liang",
      "Eason Wang",
      "Emily Silkina",
      "Jen Chen",
      "Luca Chiappeta",
      "Serena Hu",
      "Tia Mathur",
    ],
  },
  {
    semester: "Fall 2025",
    shortSemester: "F25",
    members: [
      "Andrew Li",
      "Eric Li",
      "Shiven Kunal",
      "Sahil Dua",
      "Nathan Ko",
      "Lily Chen",
      "Tanvi Aemireddy",
      "Riya Goenka",
      "Bhavya Krishnan",
    ],
  },
  {
    semester: "Spring 2026",
    shortSemester: "S26",
    members: [
      "Eden Chen",
      "Sunny Chen",
      "Ayush Patel",
      "Dishi Shah",
      "Tiana Salvi",
      "Ashwath Saravanan",
      "Saranya Mandapaty",
      "Daniel Lee",
      "Olivia Hua",
      "Wilson Quinn",
    ],
  },
];

export function FreshmanLiaison() {
  const { setSectionRef } = useBACMotion();

  useEffect(() => {
    const removePlaceholder = () => {
      const elements = document.querySelectorAll<HTMLElement>("*");

      elements.forEach((element) => {
        const text = element.textContent?.trim() || "";

        if (text.includes("[SEMESTER / YEAR]")) {
          const card = element.closest(".bac-card");

          if (card) {
            card.remove();
          }
        }
      });
    };

    removePlaceholder();

    const observer = new MutationObserver(removePlaceholder);

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bac-page relative overflow-hidden text-[var(--bac-ink)]">
      {/* HERO */}

      <section
        className="relative overflow-hidden border-b border-[var(--bac-border)] py-24 lg:py-28"
        style={{ background: "#f4faf8" }}
      >
        <div
          className="pointer-events-none absolute right-0 top-0 hidden h-full w-[36%] border-l border-[var(--bac-border)] lg:block"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 47px, rgba(98,111,126,0.045) 47px, rgba(98,111,126,0.045) 48px)",
            backgroundColor: "rgba(102,200,173,0.045)",
          }}
        />

        <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.12fr_0.88fr] lg:px-10">
          <div>
            <h1 className="bac-display bac-title mb-6 text-6xl font-semibold leading-[0.98] tracking-[-0.06em] md:text-7xl">
              Freshman Liaison Program
            </h1>

            <p className="max-w-3xl text-xl leading-[1.7] text-[var(--bac-muted)]">
              The Freshman Liaison Program is a 10-week program that introduces first-year students to various industries in business and technology through workshops and speaker events to improve both technical and professional skills. Students are also paired with BAC mentors, connected with club alumni across finance and technology firms, and guided through a flagship data modeling project to build a well-rounded skill set that positions them for success in their careers.
            </p>

            <p className="mt-5 text-base font-medium text-[var(--bac-slate-dark)]">
              No prior experience required
              <span className="mx-4 text-[var(--bac-soft)]">|</span>
              5 hrs/week commitment
            </p>

            <Button
              size="lg"
              disabled
              className="mt-9 cursor-not-allowed rounded-none border border-[var(--bac-border)] bg-[var(--bac-slate-soft)] px-7 py-6 text-base text-[var(--bac-soft)] shadow-none"
            >
              Applications Closed
            </Button>
          </div>

          <div className="mx-auto w-full max-w-[500px]">
            <div className="bac-card bg-white p-4">
              <div className="aspect-[4/3] overflow-hidden border border-[var(--bac-border)]">
                <img
                  src={FLPPhoto}
                  alt="Freshman Liaison Program"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROGRAM */}

      <section
        className="bac-section relative py-24"
        style={{ background: "var(--bac-section-soft)" }}
        ref={setSectionRef(0)}
      >
        <div className="bac-section-number">01</div>

        <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
          <div data-motion-group className="bac-section-heading mb-12">
            <h2 className="bac-display text-5xl font-semibold tracking-[-0.045em] text-[var(--bac-ink)]">
              Program
            </h2>
          </div>

          <div className="space-y-5">
            {pillars.map((item, index) => (
              <div
                key={item.title}
                data-motion-card
                data-dir="left"
                data-depth="0.55"
                className="bac-scroll-card bac-card bg-white p-7 md:p-8"
              >
                <div className="flex items-start gap-5">
                  <span className="bac-track-index flex-shrink-0">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div>
                    <h3 className="mb-2 text-lg font-semibold text-[var(--bac-ink)]">
                      {item.title}
                    </h3>

                    <p className="max-w-4xl text-base leading-[1.7] text-[var(--bac-muted)]">
                      {item.body}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WORKSHOPS & SPEAKERS */}

      <section
        className="bac-section relative py-24"
        style={{ background: "var(--bac-white)" }}
        ref={setSectionRef(1)}
      >
        <div className="bac-section-number">02</div>

        <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
          <div data-motion-group className="bac-section-heading mb-12">
            <h2 className="bac-display text-5xl font-semibold tracking-[-0.045em] text-[var(--bac-ink)]">
              Workshops & Speakers
            </h2>
          </div>

          <div
            data-motion-card
            data-dir="center"
            data-depth="0.5"
            className="bac-scroll-card"
          >
            <div className="grid grid-cols-1 border-t border-[var(--bac-border)] sm:grid-cols-2">
              {speakerTopics.map((topic, index) => (
                <div
                  key={topic}
                  className={`flex min-h-[68px] items-center gap-4 border-b border-[var(--bac-border)] py-5 text-lg font-medium text-[var(--bac-slate-dark)] ${
                    index % 2 === 0
                      ? "sm:border-r sm:pr-10"
                      : "sm:pl-10"
                  }`}
                >
                  <span className="h-2 w-2 flex-shrink-0 bg-[var(--bac-primary)]" />
                  <span>{topic}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PAST PROJECTS */}

      <section
        className="bac-section relative py-24"
        style={{ background: "var(--bac-section-blue)" }}
        ref={setSectionRef(2)}
      >
        <div className="bac-section-number">03</div>

        <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
          <div data-motion-group className="bac-section-heading mb-12">
            <h2 className="bac-display text-5xl font-semibold tracking-[-0.045em] text-[var(--bac-ink)]">
              Past Projects
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-7">
            {projects.map((project, index) => (
              <div
                key={project.title}
                data-motion-card
                data-dir="center"
                data-depth="0.55"
                className="bac-scroll-card bac-card flex min-h-[230px] flex-col bg-white p-8"
              >
                <div className="flex-1">
                  <h3 className="mb-3 text-xl font-semibold text-[var(--bac-ink)]">
                    {project.title}
                  </h3>

                  <p className="mb-6 text-base leading-[1.7] text-[var(--bac-muted)]">
                    {project.body}
                  </p>
                </div>

                {project.href ? (
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-base font-semibold text-[var(--bac-primary-dark)] transition-colors hover:text-[var(--bac-ink)]"
                  >
                    View Project
                    <ExternalLink className="h-4 w-4" />
                  </a>
                ) : (
                  <span className="text-sm font-semibold text-[var(--bac-soft)]">
                    Project link needed
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FLP COMMUNITY */}

      <section
        className="bac-section relative py-24"
        style={{ background: "var(--bac-section-mint)" }}
        ref={setSectionRef(3)}
      >
        <div className="bac-section-number">04</div>

        <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
          <div data-motion-group className="bac-section-heading mb-12">
            <h2 className="bac-display text-5xl font-semibold tracking-[-0.045em] text-[var(--bac-ink)]">
              FLP Community
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {pastClasses.map((cohort, cohortIndex) => (
              <div
                key={cohort.shortSemester}
                data-motion-card
                data-dir={cohortIndex % 2 === 0 ? "left" : "right"}
                data-depth="0.5"
                className="bac-scroll-card bac-card bg-white p-7 md:p-8"
              >
                <div className="mb-6 flex items-start justify-between gap-4 border-b border-[var(--bac-border)] pb-5">
                  <div>
                    <p className="bac-label mb-1.5">
                      {cohort.shortSemester}
                    </p>

                    <h3 className="text-2xl font-semibold tracking-[-0.03em] text-[var(--bac-ink)]">
                      {cohort.semester}
                    </h3>
                  </div>

                  <span className="text-sm font-semibold text-[var(--bac-soft)]">
                    {cohort.members.length} members
                  </span>
                </div>

                <div className="grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
                  {cohort.members.map((name, memberIndex) => (
                    <div
                      key={`${cohort.shortSemester}-${memberIndex}`}
                      className="flex items-center gap-2.5 border-b border-[var(--bac-border)] pb-3 text-base font-medium text-[var(--bac-muted)]"
                    >
                      <span className="h-2 w-2 flex-shrink-0 bg-[var(--bac-primary)]" />
                      <span>{name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}