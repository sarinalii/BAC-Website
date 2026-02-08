import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function QuantTeamPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="border-b border-border/40 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[rgb(72,134,159)]/20 via-background to-[rgb(252,131,135)]/15" />

        <div className="hidden md:block absolute top-12 right-20 w-88 h-88 border-4 border-[rgb(72,134,159)]/35 rotate-45 pointer-events-none" />
        <div className="hidden md:block absolute bottom-20 left-10 w-64 h-64 border-4 border-[rgb(252,131,135)]/30 pointer-events-none" />
        <div className="hidden md:block absolute top-1/3 right-1/4 w-48 h-48 border-2 border-[rgb(72,134,159)]/20 rotate-12 pointer-events-none" />
        <div className="hidden md:block absolute bottom-1/4 left-1/3 w-40 h-40 bg-[rgb(72,134,159)]/10 rotate-45 pointer-events-none" />

        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgb(72,134,159) 2px, transparent 2px), linear-gradient(90deg, rgb(72,134,159) 2px, transparent 2px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-32 sm:py-40 lg:py-52 relative z-10">
          <div className="max-w-5xl pl-8 sm:pl-12 lg:pl-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance mb-12 leading-tight">
              quant team<span className="header-period">.</span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-foreground/80 max-w-4xl leading-relaxed text-balance">
              The Quant team is designed for students interested in exploring the world of quantitative trading. Members learn about trading through hands on trading games, practice in probability and small statistics projects. Learn about quant from people who have successfully recruited and participated in trading internships!
            </p>
            <Button 
              asChild
              size="lg"
              className="mt-8 font-semibold shadow-2xl hover:shadow-3xl hover:scale-105 transition-all h-14 px-10 text-lg"
            >
              <a href="https://forms.gle/SWuU8Hke6o9g7R9p6">Apply Now!</a>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-28 sm:py-36 lg:py-48 relative">
        <div className="absolute top-1/3 left-8 w-[600px] h-[600px] bg-gradient-to-br from-[rgb(72,134,159)]/10 to-transparent blur-3xl pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
          <Card className="border-2 border-border/60 bg-card shadow-2xl hover:shadow-3xl transition-all duration-300">
            <CardHeader className="space-y-6 pb-10">
              <CardTitle className="text-4xl sm:text-5xl font-bold">
                program description<span className="header-period">.</span>
              </CardTitle>
              <CardDescription className="text-xl sm:text-2xl leading-relaxed">
                Prepare for a career in quantitative finance and learn about the industry as a whole.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-12">
              <div className="space-y-5">
                <h3 className="font-bold text-3xl">
                  professional development<span className="header-period">.</span>
                </h3>
                <p className="text-foreground/80 leading-relaxed text-xl">
                  Participate in trading simulations and probability based games to develop fast, analytical thinking.
                </p>
              </div>

              <div className="space-y-5">
                <h3 className="font-bold text-3xl">
                  mentorship<span className="header-period">.</span>
                </h3>
                <p className="text-foreground/80 leading-relaxed text-xl">
                  Learn from past and incoming interns about their experiences in their academic lives, recruiting, and their internships.
                </p>
              </div>

              <div className="space-y-5">
                <h3 className="font-bold text-3xl">
                  community involvement<span className="header-period">.</span>
                </h3>
                <p className="text-foreground/80 leading-relaxed text-xl">
                  Join a network of highly driven and extremely motivated students looking to grow together.
                </p>
              </div>

              <div className="space-y-5">
                <h3 className="font-bold text-3xl">
                  networking<span className="header-period">.</span>
                </h3>
                <p className="text-foreground/80 leading-relaxed text-xl">
                  Visit trading firms’ offices in New York, and understand what goes on day-to-day at a trading firm.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  )
}
