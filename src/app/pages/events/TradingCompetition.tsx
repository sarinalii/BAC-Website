import { Button } from "../../components/ui/button";
import { TrendingUp, Award, BarChart3, Users } from "lucide-react";
import { useBACMotion } from "../../hooks/useBACMotion";

export function TradingCompetition() {
  const { setSectionRef } = useBACMotion();

  const eligibility = [
    "Open to all NYU students (undergraduate and graduate)",
    "Can compete individually or in teams of up to 3",
    "Basic Python programming skills required",
    "Interest in quantitative finance and algorithmic trading",
    "Commitment for the full semester (Fall or Spring)",
  ];

  const details = [
    {
      icon: <TrendingUp className="h-7 w-7" />,
      label: "Duration",
      value: "Full semester (12 weeks)",
      sub: "Fall & Spring competitions",
      color: "var(--bac-primary)",
      soft: "var(--bac-primary-soft)",
    },
    {
      icon: <Users className="h-7 w-7" />,
      label: "Format",
      value: "Individual or team-based",
      sub: "Real market data simulation",
      color: "var(--bac-teal)",
      soft: "var(--bac-teal-soft)",
    },
    {
      icon: <Award className="h-7 w-7" />,
      label: "Prizes",
      value: "Cash prizes for top 3",
      sub: "Recognition from sponsors",
      color: "var(--bac-gold)",
      soft: "var(--bac-gold-soft)",
    },
    {
      icon: <BarChart3 className="h-7 w-7" />,
      label: "Metrics",
      value: "Sharpe ratio, returns",
      sub: "Maximum drawdown, volatility",
      color: "var(--bac-primary)",
      soft: "var(--bac-primary-soft)",
    },
  ];

  const howItWorks = [
    {
      title: "Build Your Strategy",
      body: "Develop algorithmic trading strategies using Python. Access historical market data and technical indicators to inform your approach.",
    },
    {
      title: "Backtest & Optimize",
      body: "Test your strategies against historical data using our backtesting framework. Optimize parameters and ensure robustness across market conditions.",
    },
    {
      title: "Live Competition",
      body: "Submit your strategy to trade in our simulated environment with real market data. Monitor performance on the live leaderboard, updated daily.",
    },
    {
      title: "Learn & Iterate",
      body: "Attend workshops on risk management and portfolio construction. Analyze your performance and refine your approach throughout the semester.",
    },
  ];

  const skills = [
    {
      title: "Technical Skills",
      items: [
        "Algorithmic trading strategy development",
        "Risk management and position sizing",
        "Backtesting methodologies",
        "Performance attribution analysis",
      ],
      color: "var(--bac-primary)",
    },
    {
      title: "Market Knowledge",
      items: [
        "Market microstructure",
        "Statistical arbitrage concepts",
        "Factor models and alpha generation",
        "Transaction cost analysis",
      ],
      color: "var(--bac-teal)",
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
            Trading Competition
          </h1>
          <p className="text-xl leading-relaxed mb-8 max-w-2xl" style={{ color: "var(--bac-muted)" }}>
            Test your quantitative and trading skills in our semester-long algorithmic trading competition.
            Build strategies, manage risk, and compete for rankings on our live leaderboard.
          </p>
          <Button size="lg" asChild className="bac-button-primary rounded-full px-6">
            <a href="https://forms.gle/nyubac-trading-competition" target="_blank" rel="noopener noreferrer">
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
                    style={{ background: "var(--bac-teal)" }}
                  />
                  <span style={{ color: "var(--bac-muted)" }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Competition Details */}
      <section className="bac-section relative bg-[var(--bac-cream)] py-20" ref={setSectionRef(1)}>
        <div className="bac-section-number">02</div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div data-motion-group className="bac-section-heading mb-10">
            <h2 className="bac-display text-3xl font-black" style={{ color: "var(--bac-ink)" }}>
              Competition Details
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

      {/* How It Works */}
      <section className="bac-section relative bg-[var(--bac-sand)] py-20" ref={setSectionRef(2)}>
        <div className="bac-section-number">03</div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div data-motion-group className="bac-section-heading mb-10">
            <h2 className="bac-display text-3xl font-black" style={{ color: "var(--bac-ink)" }}>
              How It Works
            </h2>
          </div>
          <div className="space-y-4">
            {howItWorks.map((item, i) => (
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
                      className="text-lg font-bold mb-2 transition-colors group-hover:text-[var(--bac-teal)]"
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

      {/* What You'll Learn */}
      <section className="bac-section relative bg-[var(--bac-cream)] py-20" ref={setSectionRef(3)}>
        <div className="bac-section-number">04</div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div data-motion-group className="bac-section-heading mb-10">
            <h2 className="bac-display text-3xl font-black" style={{ color: "var(--bac-ink)" }}>
              What You'll Learn
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {skills.map((skill, i) => (
              <div
                key={skill.title}
                data-motion-card
                data-dir={i % 2 === 0 ? "left" : "right"}
                data-depth="0.7"
                className="bac-scroll-card bac-card group relative overflow-hidden rounded-2xl bg-white p-6"
              >
                <div className="relative z-10">
                  <h3
                    className="text-lg font-bold mb-4 transition-colors"
                    style={{ color: "var(--bac-ink)" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = skill.color)}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "var(--bac-ink)")}
                  >
                    {skill.title}
                  </h3>
                  <ul className="space-y-2">
                    {skill.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm">
                        <span
                          className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                          style={{ background: skill.color }}
                        />
                        <span style={{ color: "var(--bac-muted)" }}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
