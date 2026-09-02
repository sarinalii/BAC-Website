import { Button } from "../../components/ui/button";
import { useBACMotion } from "../../hooks/useBACMotion";
import { ExternalLink } from "lucide-react";
import InsightPhoto from "../../../imports/Insight_Photo.png";

const pillars = [
  {
    title: "Real Client Work",
    body: "Work on real consulting projects and deliver strategic recommendations to company leadership.",
  },
  {
    title: "Team Projects",
    body: "Work in small teams to complete semester-long data analytics projects for real companies.",
  },
  {
    title: "Technical Training",
    body: "Develop technical proficiency in tools like Python and SQL.",
  },
  {
    title: "Industry Mentorship",
    body: "Receive mentorship from industry professionals.",
  },
  {
    title: "Strategic Recommendations",
    body: "Learn to translate real-world datasets into strategic business recommendations, presented to firm leadership teams.",
  },
];

const projects = [
  {
    title: "2026 NFL Draft Prospect Analysis",
    body: "A predictive model analyzing which pre-draft metrics — athleticism vs. college production — best forecast a quarterback's draft position, applied to predict first-round QB order in the 2026 NFL Draft.",
    href: "https://drive.google.com/file/d/1sl0meiiLnK4K0KovUi0vsS0eQ1QIyZwj/view?usp=drive_link",
  },
  {
    title: "Analyzing Tennis Serve Importance",
    body: "An examination of whether serve-related metrics — particularly speed — can meaningfully explain or predict match outcomes in tennis, using historical US Open data from 2013–2023.",
    href: "https://drive.google.com/file/d/1DEmSzVB6qkY3yaF5fumW5wexICPplzFG/view?usp=drive_link",
  },
];

export function InsightTeam() {
  const { setSectionRef } = useBACMotion();

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
              Insight Team
            </h1>

            <p className="max-w-3xl text-xl leading-[1.7] text-[var(--bac-muted)]">
              The Insight Team is a data analytics program open to students of
              all semesters who are passionate about data and technology.
              Through lectures, hands-on projects, teamwork, and mentorship from
              industry professionals, participants develop skills in data
              modeling, Python, predictive modeling, and visualization while
              preparing for data-driven careers.
            </p>

            <p className="mt-5 text-base font-medium text-[var(--bac-slate-dark)]">
              No prior experience required. Basic understanding of Python is a plus
              <span className="mx-4 text-[var(--bac-soft)]">|</span>
              5–10 hrs/week commitment
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
                  src={InsightPhoto}
                  alt="Insight Team"
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

      {/* PAST PROJECTS */}

      <section
        className="bac-section relative py-24"
        style={{ background: "var(--bac-section-blue)" }}
        ref={setSectionRef(1)}
      >
        <div className="bac-section-number">02</div>

        <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
          <div data-motion-group className="bac-section-heading mb-12">
            <h2 className="bac-display text-5xl font-semibold tracking-[-0.045em] text-[var(--bac-ink)]">
              Past Projects
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-7 md:grid-cols-2">
            {projects.map((project, index) => (
              <div
                key={project.title}
                data-motion-card
                data-dir={index === 0 ? "left" : "right"}
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
    </div>
  );
}