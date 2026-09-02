import { useState } from "react";
import { Button } from "../../components/ui/button";
import { useBACMotion } from "../../hooks/useBACMotion";
import QuantPhoto from "../../../imports/Quant_Photo.png";

const pillars = [
  {
    title: "Career Preparation",
    body: "Prepare for a career in quantitative finance and learn about the industry as a whole.",
  },
  {
    title: "Professional Development",
    body: "Participate in trading simulations and probability-based games to develop fast, analytical thinking.",
  },
  {
    title: "Mentorship",
    body: "Learn from past and incoming interns about their academic lives, recruiting experiences, and internships.",
  },
  {
    title: "Community",
    body: "Join a network of highly driven and motivated students looking to grow together.",
  },
  {
    title: "Networking",
    body: "Visit trading firms' offices in New York and understand what goes on day-to-day at a trading firm.",
  },
];

const questions = [
  {
    difficulty: "Easy",
    title: "The Lily Pad Problem",
    body: "A patch of lily pads doubles in size every day. If it covers the entire lake on day 48, on what day does it cover half the lake?",
    acceptedAnswers: ["47", "day47", "day 47"],
  },
  {
    difficulty: "Medium",
    title: "Bridge Crossing",
    body: "Four people must cross a bridge at night using one torch. At most two people can cross at once, and they must always carry the torch. Their individual crossing times are 1, 2, 5, and 10 minutes. When two people cross together, they move at the slower person's pace. What is the minimum total time for all four to cross?",
    acceptedAnswers: ["17", "17minutes", "17min", "17mins"],
  },
  {
    difficulty: "Hard",
    title: "Cats and Dogs on an Infinite Line",
    body: "On an infinite line of animals, 6/7 of all cats are immediately followed by a dog, and 1/4 of all dogs are immediately followed by a cat. What fraction of all animals are dogs?",
    acceptedAnswers: ["24/31", "24 / 31"],
  },
];

function normalize(s: string) {
  return s.trim().toLowerCase().replace(/\s+/g, "");
}

export function QuantTeam() {
  const { setSectionRef } = useBACMotion();

  const [answers, setAnswers] = useState<string[]>(["", "", ""]);
  const [results, setResults] = useState<(boolean | null)[]>([null, null, null]);

  const checkAnswer = (index: number) => {
    const raw = normalize(answers[index]);
    const correct = questions[index].acceptedAnswers.some(
      (a) => normalize(a) === raw
    );
    setResults((prev) => prev.map((r, i) => (i === index ? correct : r)));
  };

  const resetAnswer = (index: number) => {
    setAnswers((prev) => prev.map((a, i) => (i === index ? "" : a)));
    setResults((prev) => prev.map((r, i) => (i === index ? null : r)));
  };

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
              Quant Team
            </h1>

            <p className="max-w-3xl text-xl leading-[1.7] text-[var(--bac-muted)]">
              The Quant Team is designed for students interested in exploring
              quantitative trading. Members learn through hands-on trading games,
              probability practice, and small statistics projects, while
              learning from students who have successfully recruited for and
              participated in trading internships.
            </p>

            <p className="mt-5 text-base font-medium text-[var(--bac-slate-dark)]">
              No prior experience required
              <span className="mx-4 text-[var(--bac-soft)]">|</span>
              5–6 hrs/week commitment
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
                  src={QuantPhoto}
                  alt="Quant Team"
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

      {/* QUANT QUESTIONS */}

      <section
        className="bac-section relative py-24"
        style={{ background: "var(--bac-section-blue)" }}
        ref={setSectionRef(1)}
      >
        <div className="bac-section-number">02</div>

        <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
          <div data-motion-group className="bac-section-heading mb-4">
            <h2 className="bac-display text-5xl font-semibold tracking-[-0.045em] text-[var(--bac-ink)]">
              Quant Questions
            </h2>
          </div>

          <p className="mb-12 text-base text-[var(--bac-muted)]">
            Try your hand at these problems — the kind of questions you might face in a quant interview.
          </p>

          <div className="space-y-5">
            {questions.map((question, index) => (
              <div
                key={question.title}
                data-motion-card
                data-dir={index % 2 === 0 ? "left" : "right"}
                data-depth="0.55"
                className="bac-scroll-card bac-card bg-white p-7 md:p-8"
              >
                <div className="mb-5 flex items-center gap-4">
                  <span className="bac-track-index">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="border border-[var(--bac-border)] bg-[var(--bac-primary-soft)] px-3 py-1.5 text-sm font-semibold text-[var(--bac-slate-dark)]">
                    {question.difficulty}
                  </span>
                </div>

                <h3 className="mb-3 text-lg font-semibold text-[var(--bac-ink)]">
                  {question.title}
                </h3>

                <p className="mb-6 max-w-4xl text-base leading-[1.7] text-[var(--bac-muted)]">
                  {question.body}
                </p>

                <div className="flex flex-col gap-3">
                  <div className="flex gap-3">
                    <input
                      type="text"
                      value={answers[index]}
                      onChange={(e) =>
                        setAnswers((prev) =>
                          prev.map((a, i) => (i === index ? e.target.value : a))
                        )
                      }
                      onKeyDown={(e) => {
                        if (e.key === "Enter" && answers[index].trim()) {
                          checkAnswer(index);
                        }
                      }}
                      placeholder="Your answer..."
                      disabled={results[index] !== null}
                      className="flex-1 border border-[var(--bac-border)] bg-[var(--bac-section-soft)] px-4 py-2.5 text-base text-[var(--bac-ink)] outline-none transition-colors focus:border-[var(--bac-primary)] disabled:opacity-50"
                      style={{ borderRadius: 0 }}
                    />

                    {results[index] === null ? (
                      <button
                        onClick={() => checkAnswer(index)}
                        disabled={!answers[index].trim()}
                        className="bac-button-primary px-6 py-2.5 text-sm font-semibold disabled:opacity-40"
                        style={{
                          background: "var(--bac-primary)",
                          color: "#fff",
                          border: "none",
                          borderRadius: 0,
                          cursor: answers[index].trim() ? "pointer" : "not-allowed",
                        }}
                      >
                        Check
                      </button>
                    ) : (
                      <button
                        onClick={() => resetAnswer(index)}
                        className="px-6 py-2.5 text-sm font-semibold"
                        style={{
                          background: "var(--bac-section-blue)",
                          color: "var(--bac-muted)",
                          border: "1px solid var(--bac-border)",
                          borderRadius: 0,
                          cursor: "pointer",
                        }}
                      >
                        Retry
                      </button>
                    )}
                  </div>

                  {results[index] !== null && (
                    <p
                      className="text-sm font-semibold"
                      style={{
                        color: results[index] ? "#2d7d4f" : "#c0392b",
                      }}
                    >
                      {results[index]
                        ? "Correct!"
                        : "Not quite — give it another try."}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
