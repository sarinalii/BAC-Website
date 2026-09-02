import { useState } from "react";
import { useBACMotion } from "../hooks/useBACMotion";

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
}

/*
  Automatically imports every PNG inside src/imports.

  This means you DO NOT need to manually add:
  import Rayan from "../imports/Rayan_Basheer.png";
  import Vivek from "../imports/Vivek_Bellam.png";
  etc.

  As long as the filename below matches the actual filename,
  the image will load automatically.
*/
const teamImages = import.meta.glob("/src/imports/*.png", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const getImage = (filename: string) =>
  teamImages[`/src/imports/${filename}`];

const initials = (name: string) =>
  name
    .split(" ")
    .map((n) => n[0])
    .join("");

function MemberCard({ member }: { member: TeamMember }) {
  const [hovered, setHovered] = useState(false);
  const imageSrc = getImage(member.image);

  return (
    <div
      data-motion-card
      data-dir="center"
      data-depth="0.7"
      className="bac-scroll-card bac-card group relative cursor-pointer overflow-hidden rounded p-6 text-center"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative z-10">
        {/* PROFILE PHOTO */}
        <div
          className="mx-auto mb-4 flex h-32 w-32 items-center justify-center overflow-hidden rounded-full text-2xl font-black transition-all duration-300"
          style={{
            background: imageSrc
              ? "#c3e3e2"
              : hovered
                ? "linear-gradient(135deg, #3b7c7b, #28595a)"
                : "linear-gradient(135deg, #c3e3e2, #c3e3e2)",
            color: hovered ? "white" : "#3b7c7b",
            transform: hovered ? "scale(1.08)" : "scale(1)",
          }}
        >
          {imageSrc ? (
            <img
              src={imageSrc}
              alt={member.name}
              className="h-full w-full object-cover"
            />
          ) : (
            initials(member.name)
          )}
        </div>

        {/* NAME */}
        <h3
          className="mb-1 text-base font-bold transition-colors"
          style={{
            color: hovered ? "#3b7c7b" : "#1a2e38",
          }}
        >
          {member.name}
        </h3>

        {/* ROLE */}
        <p
          className="mb-2 text-xs font-semibold uppercase tracking-wider"
          style={{
            color: "#7a8e9a",
          }}
        >
          {member.role}
        </p>

        {/* BIO */}
        <div
          className="overflow-hidden transition-all duration-500"
          style={{
            maxHeight: hovered ? "150px" : "0px",
            opacity: hovered ? 1 : 0,
          }}
        >
          <p
            className="text-sm leading-relaxed"
            style={{
              color: "#4b5563",
            }}
          >
            {member.bio}
          </p>
        </div>
      </div>
    </div>
  );
}

export function OurTeam() {
  const { setSectionRef } = useBACMotion();

  /* =========================
     EXECUTIVE BOARD
     ========================= */

  const executives: TeamMember[] = [
    {
      name: "Rayan Basheer",
      role: "Co-President",
      bio: "Rayan is a Finance and Computer Science major from Princeton, NJ. He enjoys playing volleyball, going to concerts, and exploring new parts of the city.",
      image: "Rayan_Basheer.png",
    },
    {
      name: "Siya Jain",
      role: "Co-President",
      bio: "Siya enjoys trying new restaurants, and spending time with friends.",
      image: "Siya_Jain.png",
    },
    {
      name: "Vivek Bellam",
      role: "Vice President",
      bio: "Vivek is a Business, Technology, and Entrepreneurship major from Danville, CA. He enjoys e-biking around New York, making coffee, and going to concerts.",
      image: "Vivek_Bellam.png",
    },
  ];

  /* =========================
     TEAM LEADS
     ========================= */

  const teamLeads: Record<string, TeamMember[]> = {
    "Freshman Liaison Program": [
      {
        name: "Daniel Liang",
        role: "FLP Director",
        bio: "Daniel is a Math and Data Science major from Livingston, NJ. He enjoys running, reading fiction, and eating mangoes.",
        image: "Daniel_Liang.png",
      },
      {
        name: "Aum Narkar",
        role: "FLP Director",
        bio: "Aum is a Business major from Fremont, CA. He enjoys Bollywood dance, road trips, and trying new restaurants in the city.",
        image: "Aum_Narkar.png",
      },
    ],

    "Insight Team": [
      {
        name: "Mitch Cahill",
        role: "Insight Team Director",
        bio: "Mitch is a Finance and Statistics major from Denton, TX. He enjoys weightlifting, acting, and pickleball.",
        image: "Mitch_Cahill.png",
      },
      {
        name: "Tanzim Ali",
        role: "Insight Team Director",
        bio: "Tanzim is a Finance and Data Science major from New York City, NY. He enjoys nature, trying out new restaurants, and live music.",
        image: "Tanzim_Ali.png",
      },
    ],

    "Quant Team": [
      {
        name: "Joseph Cheng",
        role: "Quant Team Director",
        bio: "Joseph is a Math and Computer Science major from Naperville, IL. He enjoys playing games with friends, basketball, volleyball, and playing the piano.",
        image: "Joseph_Cheng.png",
      },
      {
        name: "Eshaan Saxena",
        role: "Quant Team Director",
        bio: "Eshaan is a Math major from Bergen County, NJ. In his free time, he enjoys fishing, cooking, and football.",
        image: "Eshaan_Saxena.png",
      },
    ],

    "Machine Learning Team": [
      {
        name: "Jean Park",
        role: "Machine Learning Team Director",
        bio: "Jean is a Math and Computer Science major from Vienna, VA. She enjoys playing piano and reading.",
        image: "Jean_Park.png",
      },
      {
        name: "Vayun Malik",
        role: "Machine Learning Team Director",
        bio: "Vayun is a Finance, Math, and Computer Science major from McLean, VA. He enjoys playing pickleball, poker, and discovering new restaurants on Beli.",
        image: "Vayun_Malik.png",
      },
      {
        name: "Owen Leung",
        role: "Machine Learning Team Director",
        bio: "Owen is a Math and Computer Science major from Houston, TX. He enjoys playing tennis and trying new coffee shops.",
        image: "Owen_Leung.png",
      },
    ],
  };

  /* =========================
     GENERAL E-BOARD
     ========================= */

  const generalBoard: TeamMember[] = [
    {
      name: "Jai Paradkar",
      role: "Technology Chair",
      bio: "Jai is a Finance, Data Science, and Math major from Scarsdale, NY. In his free time, he enjoys watching Manchester United, playing chess, and watching David Fincher movies.",
      image: "Jai_Paradkar.png",
    },
    {
      name: "Sahil Dua",
      role: "Treasurer",
      bio: "Sahil is a Finance and Data Science major from Westford, MA. He enjoys watching NFL games, playing pickleball, and adding restaurants to his Beli.",
      image: "Sahil_Dua.png",
    },
    {
      name: "Saranya Mandapaty",
      role: "Marketing Director",
      bio: "Saranya is a Data Science major with a minor in BEMT from Princeton, NJ. She enjoys making crafts, trying new coffee spots in NYC, and rewatching the Pitch Perfect franchise.",
      image: "Saranya_Mandapaty.png",
    },
    {
      name: "Ashwath Saravanan",
      role: "Director of Events",
      bio: "Ashwath is an Economics major from Basking Ridge, NJ. He is a member of the men's soccer team on campus and enjoys traveling, playing golf, and watching CW shows.",
      image: "Ashwath_Saravanan.png",
    },
    {
      name: "Bhavya Krishnan",
      role: "Director of Events",
      bio: "Bhavya is an Economics major from the Bay Area, CA. She loves painting, hiking, and exploring cafés around the city.",
      image: "Bhavya_Krishnan.png",
    },
    {
      name: "Aishwarya Seshadri",
      role: "Social Chair",
      bio: "Aishwarya is a Data Science major from Monroe, NJ. She enjoys going to the beach, traveling to new cities, and live music.",
      image: "Aishwarya_Seshadri.png",
    },
    {
      name: "Tanvi Aemireddy",
      role: "Director of Operations",
      bio: "Tanvi is a Finance and Data Science major from Dallas, TX. She enjoys trying new cafés, drinking matcha, and walking around the city.",
      image: "Tanvi_Aemireddy.png",
    },
  ];

  return (
    <div className="bac-page relative overflow-hidden text-[var(--bac-ink)]">
      {/* =========================
          HERO
          ========================= */}

      <section className="relative overflow-hidden bg-[var(--bac-cream)] py-16">
        <div className="bac-hero-texture absolute inset-0" />
        <div className="bac-blob bac-blob-primary" />
        <div className="bac-blob bac-blob-accent" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="bac-display bac-title mb-2 text-5xl font-black tracking-tight md:text-7xl">
            Our Team
          </h1>
        </div>
      </section>

      {/* =========================
          EXECUTIVE BOARD
          ========================= */}

      <section
        className="bac-section relative bg-[var(--bac-sand)] py-16"
        ref={setSectionRef(0)}
      >
        <div className="bac-section-number">01</div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div
            data-motion-group
            className="bac-section-heading mb-8 text-center"
          >
            <h2
              className="bac-display text-4xl font-black"
              style={{
                color: "var(--bac-ink)",
              }}
            >
              Executive Board
            </h2>
          </div>

          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-5 md:grid-cols-3">
            {executives.map((member) => (
              <MemberCard
                key={member.name}
                member={member}
              />
            ))}
          </div>
        </div>
      </section>

      {/* =========================
          TEAM LEADS
          ========================= */}

      <section
        className="bac-section relative bg-[var(--bac-cream)] py-16"
        ref={setSectionRef(1)}
      >
        <div className="bac-section-number">02</div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div
            data-motion-group
            className="bac-section-heading mb-8 text-center"
          >
            <h2
              className="bac-display text-4xl font-black"
              style={{
                color: "var(--bac-ink)",
              }}
            >
              Team Leads
            </h2>
          </div>

          <div className="space-y-9">
            {Object.entries(teamLeads).map(([teamName, leads]) => (
              <div key={teamName}>
                <p
                  className="bac-label mb-4 text-center"
                  style={{
                    color: "var(--bac-primary)",
                  }}
                >
                  {teamName}
                </p>

                <div
                  className={`mx-auto grid grid-cols-1 gap-5 ${
                    leads.length === 1
                      ? "max-w-sm"
                      : leads.length === 2
                        ? "max-w-2xl md:grid-cols-2"
                        : "max-w-4xl md:grid-cols-3"
                  }`}
                >
                  {leads.map((member) => (
                    <MemberCard
                      key={member.name}
                      member={member}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================
          GENERAL E-BOARD
          ========================= */}

      <section
        className="bac-section relative bg-[var(--bac-sand)] py-16"
        ref={setSectionRef(2)}
      >
        <div className="bac-section-number">03</div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div
            data-motion-group
            className="bac-section-heading mb-8 text-center"
          >
            <h2
              className="bac-display text-4xl font-black"
              style={{
                color: "var(--bac-ink)",
              }}
            >
              General E-Board
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-5">
            {generalBoard.map((member) => (
              <div
                key={member.name}
                className="w-full md:w-[calc(50%-0.625rem)] lg:w-[calc(33.333%-0.834rem)]"
              >
                <MemberCard member={member} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}