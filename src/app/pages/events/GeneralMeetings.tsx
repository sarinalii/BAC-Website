import { Button } from "../../components/ui/button";
import { Calendar, MapPin, Clock, Users } from "lucide-react";
import { useBACMotion } from "../../hooks/useBACMotion";

export function GeneralMeetings() {
  const { setSectionRef } = useBACMotion();

  const info = [
    {
      icon: <Calendar className="h-7 w-7" />,
      label: "When",
      value: "Every Wednesday",
      sub: "During Fall & Spring semesters",
      color: "var(--bac-primary)",
      soft: "var(--bac-primary-soft)",
    },
    {
      icon: <Clock className="h-7 w-7" />,
      label: "Time",
      value: "12:30 PM – 1:45 PM",
      sub: "Common Hour",
      color: "var(--bac-teal)",
      soft: "var(--bac-teal-soft)",
    },
    {
      icon: <MapPin className="h-7 w-7" />,
      label: "Location",
      value: "Room T-201",
      sub: "Stern School of Business",
      color: "var(--bac-gold)",
      soft: "var(--bac-gold-soft)",
    },
    {
      icon: <Users className="h-7 w-7" />,
      label: "Who Can Attend",
      value: "Open to all",
      sub: "No prior experience needed",
      color: "var(--bac-primary)",
      soft: "var(--bac-primary-soft)",
    },
  ];

  const agenda = [
    {
      title: "Technical Workshops",
      body: "Hands-on sessions covering data analysis, machine learning, SQL, Python, and other technical skills. Bring your laptop to code along!",
    },
    {
      title: "Industry Speakers",
      body: "Hear from professionals at top firms about their career paths, current projects, and advice for breaking into data science, quant finance, and consulting.",
    },
    {
      title: "Project Showcases",
      body: "See what our teams have been working on as they present their latest projects, from trading algorithms to ML models to consulting deliverables.",
    },
    {
      title: "Networking",
      body: "Connect with fellow members, ask questions to e-board members, and learn about upcoming opportunities and events. Food and refreshments provided!",
    },
    {
      title: "Club Updates",
      body: "Stay informed about recruiting timelines, application deadlines, social events, and other club activities.",
    },
  ];

  const recentTopics = [
    {
      title: "Introduction to Machine Learning",
      sub: "Hands-on workshop building your first ML model",
    },
    {
      title: "Trading at Jane Street",
      sub: "Q&A with quantitative traders",
    },
    {
      title: "SQL for Data Analysis",
      sub: "Essential queries for business analytics",
    },
    {
      title: "Breaking into Consulting",
      sub: "Panel with MBB consultants",
    },
  ];

  return (
    <div className="bac-page relative overflow-hidden text-[var(--bac-ink)]">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[var(--bac-cream)] py-24">
        <div className="bac-hero-texture absolute inset-0" />
        <div className="bac-blob bac-blob-primary" />
        <div className="bac-blob bac-blob-accent" />

        <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.18fr_0.82fr] lg:px-8">
          <div>
            <h1 className="bac-display bac-title mb-6 text-5xl font-black tracking-tight md:text-6xl">
              General Meetings
            </h1>
            <p className="mb-8 text-xl leading-relaxed" style={{ color: "var(--bac-muted)" }}>
              Join us every Wednesday during Common Hour for workshops, speaker events, networking
              opportunities, and updates on club activities. All students are welcome.
            </p>
            <Button size="lg" asChild className="bac-button-primary rounded-full px-6">
              <a href="https://forms.gle/nyubac-mailing-list" target="_blank" rel="noopener noreferrer">
                Get Meeting Notifications
              </a>
            </Button>
          </div>

          <div className="relative mx-auto w-full max-w-[400px] lg:max-w-none">
            <div
              className="bac-card relative overflow-hidden rounded-[2rem] p-3 shadow-2xl shadow-black/10"
              style={{ background: "rgba(255,255,255,0.72)", backdropFilter: "blur(18px)" }}
            >
              <div
                className="bac-photo-placeholder relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-[1.4rem]"
                style={{
                  background: "linear-gradient(135deg, var(--bac-primary-soft), var(--bac-teal-soft), var(--bac-gold-soft))",
                  border: "1px solid var(--bac-border)",
                }}
              >
                <div className="bac-photo-grid" />
                <p className="relative z-10 text-sm font-semibold" style={{ color: "var(--bac-primary)" }}>
                  [Meeting Photo]
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meeting Information */}
      <section className="bac-section relative bg-[var(--bac-sand)] py-20" ref={setSectionRef(0)}>
        <div className="bac-section-number">01</div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div data-motion-group className="bac-section-heading mb-10">
            <h2 className="bac-display text-3xl font-black" style={{ color: "var(--bac-ink)" }}>
              Meeting Information
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {info.map((d, i) => (
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
      <section className="bac-section relative bg-[var(--bac-cream)] py-20" ref={setSectionRef(1)}>
        <div className="bac-section-number">02</div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div data-motion-group className="bac-section-heading mb-10">
            <h2 className="bac-display text-3xl font-black" style={{ color: "var(--bac-ink)" }}>
              What to Expect
            </h2>
          </div>
          <div className="space-y-4">
            {agenda.map((item, i) => (
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

      {/* Recent Topics */}
      <section className="bac-section relative bg-[var(--bac-sand)] py-20" ref={setSectionRef(2)}>
        <div className="bac-section-number">03</div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div data-motion-group className="bac-section-heading mb-10">
            <h2 className="bac-display text-3xl font-black" style={{ color: "var(--bac-ink)" }}>
              Recent Topics
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {recentTopics.map((topic, i) => (
              <div
                key={topic.title}
                data-motion-card
                data-dir={i % 2 === 0 ? "left" : "right"}
                data-depth="0.7"
                className="bac-scroll-card bac-card group relative overflow-hidden rounded-2xl bg-white p-6 cursor-pointer"
              >
                <div className="relative z-10">
                  <h3
                    className="text-base font-bold mb-1 transition-colors group-hover:text-[var(--bac-primary)]"
                    style={{ color: "var(--bac-ink)" }}
                  >
                    {topic.title}
                  </h3>
                  <p className="text-sm" style={{ color: "var(--bac-muted)" }}>{topic.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
