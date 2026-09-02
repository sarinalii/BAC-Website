import { Button } from "../../components/ui/button";
import { useBACMotion } from "../../hooks/useBACMotion";
import { ExternalLink } from "lucide-react";
import MLPhoto from "../../../imports/ML_Photo.png";

const pillars = [
  {
    title: "Program Description",
    body: "Develop skills in applying state-of-the-art models while working with experienced leaders in the machine learning and tech fields.",
  },
  {
    title: "Technical Training",
    body: "Learn supervised and unsupervised learning, feature engineering, model evaluation, and basic deep learning using tools such as PyTorch, TensorFlow, CUDA, and Hugging Face.",
  },
  {
    title: "Applied Projects",
    body: "Work in small teams with an experienced project manager to design, train, and deploy machine learning models on real datasets.",
  },
  {
    title: "Community Involvement",
    body: "Join a collaborative cohort of students passionate about machine learning and contribute to workshops, events, and BAC's broader AI community.",
  },
];

const projects = [
  {
    title: "Accent Adaptation for Professional Communication",
    body: "A real-time speech processing model that dynamically shifts a speaker's accent toward the listener's phonetic style — targeting accent friction in high-stakes remote professional communication.",
    href: "https://docs.google.com/presentation/d/1xZR2l2mAHqvJBgp9hGx0Mk_5_X1k2bmKRQS7go-GETw/edit?usp=sharing",
  },
];

export function MLTeam() {
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
              Machine Learning Team
            </h1>

            <p className="max-w-3xl text-xl leading-[1.7] text-[var(--bac-muted)]">
              The Machine Learning Team is meant for students interested in
              coding, building intelligent systems, and applying data-driven
              models to real-world business and technical problems. Through
              hands-on projects and lectures, participants build a foundation
              in machine learning, Python-based modeling, and applied AI.
            </p>

            <p className="mt-5 text-base font-medium text-[var(--bac-slate-dark)]">
              Basic knowledge of Python required
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
                  src={MLPhoto}
                  alt="Machine Learning Team"
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
        style={{ background: "var(--bac-white)" }}
        ref={setSectionRef(1)}
      >
        <div className="bac-section-number">02</div>

        <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
          <div data-motion-group className="bac-section-heading mb-12">
            <h2 className="bac-display text-5xl font-semibold tracking-[-0.045em] text-[var(--bac-ink)]">
              Past Projects
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-7">
            {projects.map((project) => (
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

      {/* ML POST-GRAD TEAM */}

      <section
        className="bac-section relative py-24"
        style={{ background: "var(--bac-section-soft)" }}
        ref={setSectionRef(2)}
      >
        <div className="bac-section-number">03</div>

        <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
          <div data-motion-group className="bac-section-heading mb-12">
            <h2 className="bac-display text-5xl font-semibold tracking-[-0.045em] text-[var(--bac-ink)]">
              ML Post-Grad Team
            </h2>
          </div>

          <div
            data-motion-card
            data-dir="center"
            data-depth="0.55"
            className="bac-scroll-card bac-card bg-white p-8 md:p-10"
          >
            <div className="max-w-4xl">
              <p className="mb-5 text-lg leading-[1.75] text-[var(--bac-muted)]">
                The ML Post-Grad Team is an advanced continuation of BAC's
                Machine Learning Team for students who have already completed
                the program. Members apply their machine learning skills to
                more complex, real-world projects in collaboration with actual
                companies and external partners.
              </p>

              <p className="text-base font-medium text-[var(--bac-slate-dark)]">
                Completion of the Machine Learning Team required
                <span className="mx-4 text-[var(--bac-soft)]">|</span>
                5–10 hrs/week commitment
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}