import { ArrowRight, Download } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  const baseUrl = import.meta.env.BASE_URL;
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="flex-1 py-16 md:py-24">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <div className="space-y-2">
                <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
                  Thabiso C. Morapedi
                </h1>
                <p className="text-xl text-accent font-semibold">
                  Electrical and Electronics Engineer
                </p>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed">
                A recent graduate from Botswana International University of Science and Technology (BIUST) with a strong technical foundation in embedded systems, control systems, software development, and electronic design.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Passionate about IoT smart technologies, full-stack web development, and sustainable energy solutions. I'm eager to apply my technical and analytical skills to solve real-world problems and contribute to innovative projects in the tech industry.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
                >
                  View My Work
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground rounded-lg font-semibold hover:bg-muted transition-colors"
                >
                  Get in Touch
                </Link>
                <a
                  href={`${baseUrl}resume.pdf`}
                  download="Thabiso_Morapedi_Resume.pdf"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-accent text-accent rounded-lg font-semibold hover:bg-accent/10 transition-colors"
                >
                  Download Resume
                  <Download className="w-4 h-4" />
                </a>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 pt-8 border-t border-border">
                <div>
                  <p className="text-2xl font-bold text-accent">4.06</p>
                  <p className="text-sm text-muted-foreground">GPA</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-accent">2+</p>
                  <p className="text-sm text-muted-foreground">Years Experience</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-accent">40+</p>
                  <p className="text-sm text-muted-foreground">Technologies</p>
                </div>
              </div>
            </div>

            {/* Profile Photo */}
            <div className="flex justify-center md:justify-end">
              <div className="relative w-full max-w-sm">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-muted rounded-2xl blur-2xl"></div>
                <img
                  src={`${baseUrl}profile-photo.jpeg`}
                  alt="Thabiso C. Morapedi"
                  className="relative w-full h-auto rounded-2xl shadow-lg object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Degree Certificate Section */}
      <section className="py-16 md:py-24 bg-card border-t border-border">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="space-y-8">
            <div className="text-center space-y-2">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Academic Achievement
              </h2>
              <p className="text-lg text-muted-foreground">
                Bachelor of Electrical and Electronics Engineering
              </p>
            </div>

            <div className="flex justify-center">
              <div className="w-full max-w-2xl">
                <div className="relative bg-background rounded-lg shadow-lg overflow-hidden border border-border">
                  <iframe
                    src={`${baseUrl}degree-certificate.pdf`}
                    className="w-full h-96 md:h-[600px]"
                    title="Degree Certificate"
                  />
                </div>
                <p className="text-center text-sm text-muted-foreground mt-4">
                  Bachelor of Electrical and Electronics Engineering, BIUST (2020-2025)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-accent text-accent-foreground">
        <div className="container max-w-6xl mx-auto px-4 text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            Ready to collaborate?
          </h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            I'm always interested in hearing about new projects and opportunities. Feel free to reach out!
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-accent-foreground text-accent rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            Contact Me
          </Link>
        </div>
      </section>
    </div>
  );
}
