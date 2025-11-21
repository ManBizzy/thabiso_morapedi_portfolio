import { Briefcase, GraduationCap } from "lucide-react";

interface Experience {
  title: string;
  organization: string;
  period: string;
  type: "work" | "education";
  description: string[];
  highlights?: string[];
}

const experiences: Experience[] = [
  {
    title: "Electrical Maintenance Attaché",
    organization: "Jwaneng Debswana Mine",
    period: "FEB 2024 - JUL 2024",
    type: "work",
    description: [
      "Serviced high-voltage systems including 132kV/33kV/11kV transformers, Buchholz relays, tap changers, and 6.6kV/550V substations",
      "Conducted insulation resistance, earth leakage, and continuity tests on 3-phase and single-phase motors",
      "Maintained variable speed drives (VSDs), soft starters, and predictive maintenance systems using machine learning models",
      "Trained in A1 Operational Risk Management (ORM), Fatal Risk Control Standards (FRCS), and Job Safety Analysis (JSA)",
      "Implemented SLAM (Stop, Look, Assess, Manage) and 60-60-60 safety protocols",
    ],
    highlights: [
      "High-Voltage Systems Expertise",
      "Predictive Maintenance",
      "Safety Compliance",
    ],
  },
  {
    title: "Part-time Electrician",
    organization: "Shababa And Sons Investments PTY LTD",
    period: "MAR 2022 - JAN 2024",
    type: "work",
    description: [
      "Maintained, troubleshot, and repaired welding machines, power sources, and control circuits to minimize downtime",
      "Ensured all electrical systems and equipment met safety codes (NEC) and properly implemented Lockout/Tagout (LOTO) protocols",
      "Performed routine maintenance and diagnostics on industrial electrical equipment",
    ],
    highlights: [
      "Equipment Maintenance",
      "Safety Compliance",
      "Troubleshooting",
    ],
  },
  {
    title: "Bachelor of Electrical and Electronics Engineering",
    organization: "Botswana International University of Science and Technology (BIUST)",
    period: "2020 - 2025",
    type: "education",
    description: [
      "Second Class Upper Division Degree",
      "GPA: 4.06 / 5.0",
      "Comprehensive curriculum covering embedded systems, power systems, control systems, and software development",
      "Hands-on experience with circuit design, PCB development, and IoT applications",
    ],
    highlights: [
      "Strong Academic Performance",
      "Practical Engineering Skills",
      "Technical Foundation",
    ],
  },
];

export default function Experience() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <section className="py-12 md:py-16 bg-card border-b border-border">
        <div className="container max-w-6xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Experience & Education
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            A timeline of my professional journey and academic achievements in electrical and electronics engineering.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 md:py-24">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                {/* Timeline Line */}
                {index !== experiences.length - 1 && (
                  <div className="absolute left-6 top-16 bottom-0 w-0.5 bg-border"></div>
                )}

                {/* Timeline Item */}
                <div className="flex gap-6">
                  {/* Timeline Dot */}
                  <div className="flex-shrink-0 flex items-start justify-center w-12 h-12 rounded-full bg-card border-2 border-accent">
                    {exp.type === "work" ? (
                      <Briefcase className="w-5 h-5 text-accent" />
                    ) : (
                      <GraduationCap className="w-5 h-5 text-accent" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-2">
                      <div>
                        <h3 className="text-xl font-bold text-foreground">
                          {exp.title}
                        </h3>
                        <p className="text-accent font-semibold">
                          {exp.organization}
                        </p>
                      </div>
                      <span className="text-sm text-muted-foreground font-medium whitespace-nowrap">
                        {exp.period}
                      </span>
                    </div>

                    {/* Description */}
                    <div className="space-y-3 mt-4">
                      {exp.description.map((desc, descIndex) => (
                        <div key={descIndex} className="flex gap-3">
                          <div className="w-1.5 h-1.5 bg-muted-foreground rounded-full flex-shrink-0 mt-2"></div>
                          <p className="text-muted-foreground text-sm leading-relaxed">
                            {desc}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Highlights */}
                    {exp.highlights && (
                      <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-border">
                        {exp.highlights.map((highlight, highlightIndex) => (
                          <span
                            key={highlightIndex}
                            className="px-3 py-1 bg-muted text-muted-foreground text-xs rounded-full"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Achievements */}
      <section className="py-16 md:py-24 bg-card border-t border-border">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
            Key Achievements
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-background border border-border rounded-lg">
              <p className="text-3xl font-bold text-accent mb-2">4.06/5.0</p>
              <p className="text-foreground font-semibold">Academic Excellence</p>
              <p className="text-sm text-muted-foreground mt-2">
                Second Class Upper Division in BEng Electrical & Electronics Engineering
              </p>
            </div>
            <div className="p-6 bg-background border border-border rounded-lg">
              <p className="text-3xl font-bold text-accent mb-2">2+</p>
              <p className="text-foreground font-semibold">Years of Experience</p>
              <p className="text-sm text-muted-foreground mt-2">
                Professional experience in electrical maintenance and industrial systems
              </p>
            </div>
            <div className="p-6 bg-background border border-border rounded-lg">
              <p className="text-3xl font-bold text-accent mb-2">40+</p>
              <p className="text-foreground font-semibold">Technologies Mastered</p>
              <p className="text-sm text-muted-foreground mt-2">
                Diverse skill set spanning embedded systems, software, and design
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
