"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { useState } from "react"

const generalLeadership = [
  {
    name: "bianca ashar",
    position: "co-president",
    email: "bianca.ashar@stern.nyu.edu",
    image: "/bianca-ashar.JPG",
    description: "Co-president of the Business Analytics Club, leading strategic initiatives and club operations.",
  },
  {
    name: "anusha khandpur",
    position: "co-president",
    email: "anusha.khandpur@stern.nyu.edu",
    image: "/anusha-khandpur.JPG",
    description: "Co-president of the Business Analytics Club, overseeing club governance and member engagement.",
    objectPosition: "center 10%",
  },
  {
    name: "nihar shah",
    position: "vice president",
    email: "nihar_shah@stern.nyu.edu",
    image: "/nihar-shah.JPG",
    description: "Vice President supporting club operations and strategic planning initiatives.",
  },
]

const flpLeads = [
  {
    name: "aditi raju",
    position: "director",
    email: "aditi.raju@stern.nyu.edu",
    image: "/aditi-raju.JPG",
    description: "Director of the Freshman Liaison Program, guiding first-year students in data analytics.",
    objectPosition: "center 10%",
  },
  {
    name: "brian zhou",
    position: "director",
    email: "brian.zhou@stern.nyu.edu",
    image: "/brian-zhou.JPG",
    description: "Director of the Freshman Liaison Program, mentoring newcomers in business analytics.",
    objectPosition: "center 10%",
  },
]

const insightLeads = [
  {
    name: "prisha ray",
    position: "director",
    email: "prisha.ray@nyu.edu",
    image: "/prisha-ray.JPG",
    description: "Director of the Insight Team, leading advanced analytics projects and strategic consulting.",
    objectPosition: "center 20%",
  },
  {
    name: "luca ruggiero",
    position: "director",
    email: "lgr9245@nyu.edu",
    image: "/luca-ruggiero.JPG",
    description: "Director of the Insight Team, managing real-world business analytics consulting projects.",
    objectPosition: "center 20%",
  },
]

const mlLeads = [
  {
    name: "ritvik rallapalli",
    position: "director",
    email: "ritvik.rallapalli@nyu.edu",
    image: "/ritvik-rallapalli.JPG",
    description: "Director of the Machine Learning Team, leading technical workshops and AI projects.",
  },
  {
    name: "eshaan saxena",
    position: "director",
    email: "es6206@nyu.edu",
    image: "/eshaan-saxena.JPG",
    description: "Director of the Machine Learning Team, overseeing data science and ML initiatives.",
  },
]

const quantLeads = [
  {
    name: "matthew liu",
    position: "director",
    email: "matthew.liu@stern.nyu.edu",
    image: "/matthew-liu.JPG",
    description: "Director of the Quant Team, leading quantitative finance and trading strategies.",
  },
  {
    name: "rahul jayachandran",
    position: "director",
    email: "rahul.jayachandran@nyu.edu",
    image: "/rahul-jayachandran.JPG",
    description: "Director of the Quant Team, managing mathematical modeling and risk analysis.",
    objectPosition: "center 5%",
  },
]

const otherEboard = [
  {
    name: "sarina li",
    position: "director of operations",
    email: "sarina.li@stern.nyu.edu",
    image: "/sarina-li.JPG",
    description: "Director of Operations, managing club logistics and administrative functions.",
    objectPosition: "center 20%",
  },
  {
    name: "shriya dani",
    position: "director of marketing",
    email: "shriyadani@nyu.edu",
    image: "/shriya-dani.JPG",
    description: "Director of Marketing, leading brand strategy and promotional campaigns.",
    objectPosition: "center 15%",
  },
  {
    name: "navya garg",
    position: "director of marketing",
    email: "navyagarg@stern.nyu.edu",
    image: "/navya-garg.jpeg",
    description: "Director of Marketing, managing social media and community outreach.",
  },
  {
    name: "amelia liu",
    position: "director of events",
    email: "al8384@nyu.edu",
    image: "/amelia-liu.JPG",
    description: "Director of Events, organizing workshops, networking sessions, and club activities.",
  },
  {
    name: "aishwarya seshadri",
    position: "director of events",
    email: "as19210@nyu.edu",
    image: "/aishwarya-seshadri.JPG",
    description: "Director of Events, coordinating speaker series and professional development programs.",
  },
  {
    name: "rayan basheer",
    position: "treasurer",
    email: "rayan.basheer@stern.nyu.edu",
    image: "/rayan-basheer.jpeg",
    description: "Treasurer, managing club finances and budget allocation for all programs.",
    objectPosition: "center 5%",
  },
]

function FlippableCard({ member }: { member: any }) {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <div
      className="relative h-[500px] cursor-pointer perspective-1000"
      onClick={() => setIsFlipped(!isFlipped)}
      onKeyDown={(e) => e.key === "Enter" && setIsFlipped(!isFlipped)}
      role="button"
      tabIndex={0}
    >
      <div
        className={`relative w-full h-full transition-transform duration-500 transform-style-3d ${
          isFlipped ? "rotate-y-180" : ""
        }`}
      >
        {/* Front of card */}
        <Card
          className={`absolute w-full h-full backface-hidden border-border/40 bg-card hover:shadow-2xl hover:border-[rgb(72,134,159)]/50 transition-all duration-300 ${
            isFlipped ? "pointer-events-none" : ""
          }`}
        >
          <CardContent className="p-6 flex flex-col h-full">
            <div className="w-full h-96 rounded-xl overflow-hidden bg-muted ring-1 ring-[rgb(72,134,159)]/30 mb-4">
              <img 
                src={member.image || "/placeholder.svg"} 
                alt={member.name} 
                className="w-full h-full" 
                style={{ 
                  objectPosition: `${member.objectPosition || 'center 25%'} !important`,
                  objectFit: 'contain !important'
                }}
              />
            </div>
            <div className="space-y-2 mt-auto">
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-sm font-medium text-[rgb(72,134,159)]">{member.position}</p>
              <p className="text-sm text-muted-foreground/80">{member.email}</p>
            </div>
          </CardContent>
        </Card>

        {/* Back of card */}
        <Card
          className={`absolute w-full h-full backface-hidden border-border/40 bg-card hover:shadow-2xl hover:border-[rgb(72,134,159)]/50 transition-all duration-300 rotate-y-180 ${
            !isFlipped ? "pointer-events-none" : ""
          }`}
        >
          <CardContent className="p-8 flex flex-col justify-center h-full">
            <p className="text-muted-foreground/80 leading-relaxed text-base">{member.description}</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Header - Enhanced with better spacing */}
      <section className="border-b border-border/40 bg-gradient-to-br from-[rgb(72,134,159)]/20 via-background to-[rgb(140,191,196)]/20 relative overflow-hidden">
        <div className="absolute top-10 right-10 w-32 h-32 border border-[rgb(72,134,159)]/20 rounded-lg rotate-12 pointer-events-none" />
        <div className="absolute bottom-20 left-20 w-24 h-24 border border-[rgb(252,131,135)]/15 rounded-full pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40 relative z-10 text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 text-balance leading-tight">
            our team<span className="header-period">.</span>
          </h1>
          <p className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground/80 max-w-3xl mx-auto leading-relaxed text-balance">
            Meet the executive board members leading Business Analytics Club to new heights.
          </p>
        </div>
      </section>

      {/* General Leadership Section */}
      <section className="py-20 sm:py-28 lg:py-36">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-16 text-center">
            general leadership<span className="header-period">.</span>
          </h2>
          <div className="grid sm:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {generalLeadership.map((member, index) => (
              <FlippableCard key={index} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* Team Leads Section */}
      <section className="py-20 sm:py-28 lg:py-36 bg-gradient-to-br from-[rgb(72,134,159)]/10 to-muted/20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[rgb(72,134,159)]/10 to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-[rgb(252,131,135)]/10 to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* FLP Leads */}
          <div className="mb-20">
            <h3 className="text-2xl sm:text-3xl font-semibold mb-12 text-center">
              freshman liaison program<span className="header-period">.</span>
            </h3>
            <div className="grid sm:grid-cols-2 gap-10 max-w-5xl mx-auto">
              {flpLeads.map((member, index) => (
                <FlippableCard key={index} member={member} />
              ))}
            </div>
          </div>

          {/* Insight Leads */}
          <div className="mb-20">
            <h3 className="text-2xl sm:text-3xl font-semibold mb-12 text-center">
              insight team<span className="header-period">.</span>
            </h3>
            <div className="grid sm:grid-cols-2 gap-10 max-w-5xl mx-auto">
              {insightLeads.map((member, index) => (
                <FlippableCard key={index} member={member} />
              ))}
            </div>
          </div>

          {/* ML Leads */}
          <div className="mb-20">
            <h3 className="text-2xl sm:text-3xl font-semibold mb-12 text-center">
              machine learning team<span className="header-period">.</span>
            </h3>
            <div className="grid sm:grid-cols-2 gap-10 max-w-5xl mx-auto">
              {mlLeads.map((member, index) => (
                <FlippableCard key={index} member={member} />
              ))}
            </div>
          </div>

          {/* Quant Leads */}
          <div className="mb-20">
            <h3 className="text-2xl sm:text-3xl font-semibold mb-12 text-center">
              quant team<span className="header-period">.</span>
            </h3>
            <div className="grid sm:grid-cols-2 gap-10 max-w-5xl mx-auto">
              {quantLeads.map((member, index) => (
                <FlippableCard key={index} member={member} />
              ))}
            </div>
          </div>

          {/* Other Eboard */}
          <div className="mb-20">
            <h3 className="text-2xl sm:text-3xl font-semibold mb-12 text-center">
              other eboard<span className="header-period">.</span>
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
              {otherEboard.map((member, index) => (
                <FlippableCard key={index} member={member} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-border/40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <button className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold text-lg hover:bg-primary/90 hover:shadow-xl transition-all duration-300 hover:scale-105">
            view previous executive boards
          </button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
