import { Cpu, Code2, Network, Wrench } from "lucide-react";

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
  color: string;
}

const skillCategories: SkillCategory[] = [
  {
    title: "Embedded Systems & Control",
    icon: <Cpu className="w-6 h-6" />,
    skills: [
      "Raspberry Pi",
      "STM32",
      "ESP32",
      "Arduino",
      "FreeRTOS",
      "VHDL",
      "PID Control",
      "Sensors & Actuators",
    ],
    color: "from-blue-500 to-blue-600",
  },
  {
    title: "Software Development",
    icon: <Code2 className="w-6 h-6" />,
    skills: [
      "C/C++",
      "Python",
      "JavaScript",
      "MATLAB",
      "ROS2",
      "Git",
      "Pandas",
      "NumPy",
      "TensorFlow",
      "Scikit-learn",
    ],
    color: "from-green-500 to-green-600",
  },
  {
    title: "Protocols & Networking",
    icon: <Network className="w-6 h-6" />,
    skills: [
      "USB",
      "CAN",
      "UART",
      "I2C",
      "SPI",
      "Ethernet",
      "BLE",
      "MQTT",
      "REST APIs",
      "Flask",
      "HTTP",
    ],
    color: "from-purple-500 to-purple-600",
  },
  {
    title: "Design & CAD",
    icon: <Wrench className="w-6 h-6" />,
    skills: [
      "PCB Design",
      "KiCAD",
      "Altium",
      "3D Printing",
      "CNC",
      "Laser Cutting",
      "AutoCAD",
      "GD&T",
      "SolidWorks",
    ],
    color: "from-orange-500 to-orange-600",
  },
];

const softSkills = [
  "Project Management",
  "Power Systems Design",
  "Electrical Systems Troubleshooting",
  "Power Quality Analysis",
  "Technical Report Writing",
  "Safety Procedures",
];

export default function Skills() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <section className="py-12 md:py-16 bg-card border-b border-border">
        <div className="container max-w-6xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Skills & Expertise
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            A comprehensive overview of my technical skills and professional competencies developed through academic projects and industry experience.
          </p>
        </div>
      </section>

      {/* Technical Skills */}
      <section className="py-16 md:py-24">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="group bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-3 rounded-lg bg-gradient-to-br ${category.color} text-white`}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-foreground">
                    {category.title}
                  </h3>
                </div>

                {/* Skills Grid */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full hover:bg-accent hover:text-accent-foreground transition-colors duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Soft Skills */}
      <section className="py-16 md:py-24 bg-card border-t border-border">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
            Professional Skills
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            {softSkills.map((skill, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 bg-background border border-border rounded-lg hover:shadow-md transition-shadow"
              >
                <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                <span className="text-foreground font-medium">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Languages */}
      <section className="py-16 md:py-24">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
            Languages
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-card border border-border rounded-lg">
              <h3 className="text-lg font-semibold text-foreground mb-2">
                English
              </h3>
              <p className="text-muted-foreground">Fluent</p>
            </div>
            <div className="p-6 bg-card border border-border rounded-lg">
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Setswana
              </h3>
              <p className="text-muted-foreground">Fluent</p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 md:py-24 bg-card border-t border-border">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
            Licenses & Certifications
          </h2>
          <div className="space-y-4">
            <div className="flex items-center gap-3 p-4 bg-background border border-border rounded-lg">
              <div className="w-3 h-3 bg-accent rounded-full"></div>
              <span className="text-foreground font-medium">Driver's License</span>
            </div>
            <div className="flex items-center gap-3 p-4 bg-background border border-border rounded-lg">
              <div className="w-3 h-3 bg-accent rounded-full"></div>
              <span className="text-foreground font-medium">ERB Registered</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
