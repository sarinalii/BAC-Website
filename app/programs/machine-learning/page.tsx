import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function MachineLearningPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="border-b border-border/40 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[rgb(72,134,159)]/30 via-background via-40% to-[rgb(252,131,135)]/20" />
        
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgb(72,134,159) 2px, transparent 2px), linear-gradient(90deg, rgb(72,134,159) 2px, transparent 2px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div
          className="hidden md:block absolute top-16 right-10 w-96 h-96 border-4 border-[rgb(72,134,159)]/35 rounded-full pointer-events-none animate-pulse"
          style={{ animationDuration: "3s" }}
        />
        <div className="hidden md:block absolute bottom-12 left-16 w-80 h-80 border-4 border-[rgb(252,131,135)]/30 rounded-full pointer-events-none" />
        <div className="hidden md:block absolute top-1/2 right-1/4 w-56 h-56 bg-gradient-to-br from-[rgb(72,134,159)]/15 to-[rgb(252,131,135)]/15 rounded-3xl rotate-12 pointer-events-none" />
        <div
          className="hidden md:block absolute bottom-1/3 left-1/3 w-40 h-40 border-2 border-[rgb(252,131,135)]/25 rounded-2xl -rotate-12 pointer-events-none animate-pulse"
          style={{ animationDuration: "4s" }}
        />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-32 sm:py-40 lg:py-52 relative z-10">
          <div className="max-w-5xl pl-8 sm:pl-12 lg:pl-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance mb-12 leading-tight">
              machine learning team<span className="header-period">.</span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-foreground/80 max-w-4xl leading-relaxed text-balance">
              the machine learning program is meant for students with an interest in coding, building intelligent systems, and applying data-driven models to real-world business and technical problems. through hands-on projects, invigorating lectures, and applicable deliverables, participants develop a strong foundation in machine learning concepts, python-based modeling, and applied ai, while exploring how ml is used across industries.
            </p>
            <Button 
              asChild
              size="lg"
              className="mt-8 font-semibold shadow-2xl hover:shadow-3xl hover:scale-105 transition-all h-14 px-10 text-lg"
            >
              <a href="https://forms.gle/h2VFZoywQ1GfhjoX8">Apply Now!</a>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-28 sm:py-36 lg:py-48 relative">
        <div className="absolute top-1/4 right-10 w-[700px] h-[700px] bg-gradient-to-bl from-[rgb(72,134,159)]/12 via-[rgb(140,191,196)]/8 to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
          <Card className="border-2 border-border/60 bg-card shadow-2xl hover:shadow-3xl transition-all duration-300">
            <CardHeader className="space-y-6 pb-10">
              <CardTitle className="text-4xl sm:text-5xl font-bold">
                program description<span className="header-period">.</span>
              </CardTitle>
              <CardDescription className="text-xl sm:text-2xl leading-relaxed">
                develop skills in applying state of the art models while working with experienced leaders in the machine learning and tech fields.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-12">
              <div className="space-y-5">
                <h3 className="font-bold text-3xl">
                  technical training<span className="header-period">.</span>
                </h3>
                <p className="text-foreground/80 leading-relaxed text-xl">
                  learn the foundations of essential machine learning models, including supervised and unsupervised learning, feature engineering, model evaluation, and basic deep learning using tools taught during the program, such as pytorch, tensorflow, cuda, and huggingface.
                </p>
              </div>

              <div className="space-y-5">
                <h3 className="font-bold text-3xl">
                  applied projects<span className="header-period">.</span>
                </h3>
                <p className="text-foreground/80 leading-relaxed text-xl">
                  work in small teams with an experienced project manager guiding you through designing, training, and deploying machine learning models on real datasets to solve real-world problems.
                </p>
              </div>

              <div className="space-y-5">
                <h3 className="font-bold text-3xl">
                  post grad<span className="header-period">.</span>
                </h3>
                <p className="text-foreground/80 leading-relaxed text-xl">
                  after graduating from the project, you’ll have the opportunity to work directly with corporate sponsors(imasons, cato.ai, ocp, etc.) and go to leading tech conferences.
                </p>
              </div>

              <div className="space-y-5">
                <h3 className="font-bold text-3xl">
                  community involvement<span className="header-period">.</span>
                </h3>
                <p className="text-foreground/80 leading-relaxed text-xl">
                  join a collaborative cohort of students passionate about machine learning, contribute to workshops and events, and become part of the broader analytics and ai community at nyu.
                </p>
              </div>

              <div className="space-y-5">
                <h3 className="font-bold text-3xl">
                  example projects<span className="header-period">.</span>
                </h3>
                <p className="text-foreground/80 leading-relaxed text-xl italic">Coming soon...</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  )
}
