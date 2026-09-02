import { Button } from "../../components/ui/button";
import { Calendar, Users, Trophy, Code } from "lucide-react";
import { useBACMotion } from "../../hooks/useBACMotion";

export function Hackathon() {
  const { setSectionRef } = useBACMotion();

  const eligibility = [
    "Open to all NYU students (undergraduate and graduate)",
    "Teams of 2-4 members (can form teams at the event)",
    "All skill levels welcome — no prior data science experience required",
    "Must be available for the full 24-hour event",
  ];

  const details = [
    {
      icon: <Calendar className="h-7 w-7" />,
      label: "When",
      value: "Spring 2027 — 24 hours",
      sub: "Exact date TBA",
      color: "var(--bac-primary)",
      soft: "var(--bac-primary-soft)",
    },
    {
      icon: <Users className="h-7 w-7" />,
      label: "Team Size",
      value: "2-4 members per team",
      sub: "All skill levels welcome",
      color: "var(--bac-teal)",
      soft: "var(--bac-teal-soft)",
    },
    {
      icon: <Trophy className="h-7 w-7" />,
      label: "Prizes",
      value: "$5,000+ in prizes",
      sub: "Sponsor awards & swag",
      color: "var(--bac-gold)",
      soft: "var(--bac-gold-soft)",
    },
    {
      icon: <Code className="h-7 w-7" />,
      label: "Challenges",
      value: "Real business problems",
      sub: "Datasets from sponsors",
      color: "var(--bac-primary)",
      soft: "var(--bac-primary-soft)",
    },
  ];

  const schedule = [
    {
      title: "Opening Ceremony",
      body: "Kick off with problem statements from our sponsors, team formation, and an introduction to available datasets and tools.",
    },
    {
      title: "24 Hours of Building",
      body: "Work alongside your team to analyze data, build models, and create compelling visualizations. Mentors and workshops available throughout.",
    },
    {
      title: "Presentations & Judging",
      body: "Present your findings to a panel of industry judges. Top teams present in the final round for cash prizes and sponsor awards.",
    },
    {
      title: "Networking",
      body: "Connect with recruiters from top firms, meet fellow data enthusiasts, and explore career opportunities.",
    },
  ];

  return (
    <div className="bac-page relative overflow-hidden text-[var(--bac-ink)]">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[var(--bac-cream)] py-24">
        <div className="bac-hero-texture absolute inset-0" />
        <div className="bac-blob bac-blob-primary" />
        <div className="bac-blob bac-blob-accent" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="bac-display bac-title mb-6 text-5xl font-black tracking-tight md:text-6xl">
            Annual Hackathon
          </h1>
          <p className="text-xl leading-relaxed mb-8 max-w-2xl" style={{ color: "var(--bac-muted)" }}>
            Our flagship 24-hour data science hackathon where teams collaborate to solve real business challenges,
            compete for prizes, and network with industry sponsors.
          </p>
          <Button size="lg" asChild className="bac-button-primary rounded-full px-6">
            <a href="https://forms.gle/nyubac-hackathon" target="_blank" rel="noopener noreferrer">
              Apply Now
            </a>
          </Button>
        </div>
      </section>

      {/* Eligibility */}
      <section className="bac-section relative bg-[var(--bac-sand)] py-20" ref={setSectionRef(0)}>
        <div className="bac-section-number">01</div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div data-motion-group className="bac-section-heading mb-10">
            <h2 className="bac-display text-3xl font-black" style={{ color: "var(--bac-ink)" }}>
              Eligibility
            </h2>
          </div>
          <div
            data-motion-card
            data-dir="center"
            data-depth="0.6"
            className="bac-scroll-card bac-card relative overflow-hidden rounded-2xl bg-white p-8"
          >
            <ul className="relative z-10 space-y-4">
              {eligibility.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span
                    className="mt-1.5 w-2 h-2 rounded-full flex-shrink-0"
                    style={{ background: "var(--bac-primary)" }}
                  />
                  <span style={{ color: "var(--bac-muted)" }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Event Details */}
      <section className="bac-section relative bg-[var(--bac-cream)] py-20" ref={setSectionRef(1)}>
        <div className="bac-section-number">02</div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div data-motion-group className="bac-section-heading mb-10">
            <h2 className="bac-display text-3xl font-black" style={{ color: "var(--bac-ink)" }}>
              Event Details
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {details.map((d, i) => (
              <div
                key={d.label}
                data-motion-card
                data-dir={i % 2 === 0 ? "left" : "right"}
                data-depth="0.75"
                className="bac-scroll-card bac-card group relative overflow-hidden rounded-2xl bg-white p-6 cursor-pointer"
              >
                <div className="relative z-10">
                  <div className="bac-icon-shell mb-4" style={{ background: d.soft, color: d.color }}>
                    {d.icon}
                  </div>
                  <h3
                    className="text-lg font-bold mb-1 transition-colors"
                    style={{ color: "var(--bac-ink)" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = d.color)}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "var(--bac-ink)")}
                  >
                    {d.label}
                  </h3>
                  <p className="font-semibold text-sm" style={{ color: "var(--bac-muted)" }}>
                    {d.value}
                  </p>
                  <p className="text-sm" style={{ color: "var(--bac-soft)" }}>{d.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="bac-section relative bg-[var(--bac-sand)] py-20" ref={setSectionRef(2)}>
        <div className="bac-section-number">03</div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div data-motion-group className="bac-section-heading mb-10">
            <h2 className="bac-display text-3xl font-black" style={{ color: "var(--bac-ink)" }}>
              What to Expect
            </h2>
          </div>
          <div className="space-y-4">
            {schedule.map((item, i) => (
              <div
                key={item.title}
                data-motion-card
                data-dir={i % 2 === 0 ? "left" : "right"}
                data-depth="0.65"
                className="bac-scroll-card bac-card group relative overflow-hidden rounded-2xl bg-white p-6"
              >
                <div className="relative z-10 flex items-start gap-4">
                  <span className="bac-track-index flex-shrink-0">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h3
                      className="text-lg font-bold mb-2 transition-colors group-hover:text-[var(--bac-primary)]"
                      style={{ color: "var(--bac-ink)" }}
                    >
                      {item.title}
                    </h3>
                    <p style={{ color: "var(--bac-muted)" }}>{item.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
