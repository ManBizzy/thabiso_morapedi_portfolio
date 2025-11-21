import { ExternalLink, Github } from "lucide-react";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  category: string;
  link?: string;
  github?: string;
}

const projects: Project[] = [
  {
    title: "IoT Smart Home Automation System",
    description:
      "Developed a comprehensive IoT system for home automation using ESP32 microcontrollers, MQTT protocol, and cloud integration. Features include real-time sensor monitoring, automated lighting control, and temperature regulation.",
    technologies: ["ESP32", "MQTT", "Python", "IoT", "Cloud"],
    category: "IoT Systems",
  },
  {
    title: "Embedded Control System for Industrial Automation",
    description:
      "Designed and implemented a real-time control system using STM32 microcontroller with FreeRTOS. Integrated multiple sensors and actuators for precision control in industrial applications.",
    technologies: ["STM32", "FreeRTOS", "C/C++", "Control Systems", "VHDL"],
    category: "Embedded Systems",
  },
  {
    title: "PCB Design for Power Management Module",
    description:
      "Created a custom PCB design for a power management module using KiCAD. Includes voltage regulation, power distribution, and protection circuits with comprehensive testing and validation.",
    technologies: ["KiCAD", "PCB Design", "Altium", "Electronics"],
    category: "Hardware Design",
  },
  {
    title: "Machine Learning-Based Predictive Maintenance System",
    description:
      "Developed a predictive maintenance system using Python and machine learning algorithms to forecast equipment failures. Integrated with industrial IoT sensors for real-time monitoring and alerts.",
    technologies: ["Python", "TensorFlow", "Scikit-learn", "MQTT", "Data Analysis"],
    category: "AI/ML",
  },
  {
    title: "Robotics Control System with ROS2",
    description:
      "Built a comprehensive robotics control framework using ROS2 for autonomous navigation and task execution. Implemented sensor fusion, path planning, and real-time control algorithms.",
    technologies: ["ROS2", "C++", "Python", "Robotics", "Control Systems"],
    category: "Robotics",
  },
  {
    title: "Full-Stack Web Application for Engineering Tools",
    description:
      "Developed a web-based application for circuit simulation and analysis. Features include real-time visualization, calculation tools, and data export capabilities for engineering calculations.",
    technologies: ["JavaScript", "Flask", "Python", "REST APIs", "Web Development"],
    category: "Software Development",
  },
  {
    title: "CAN Bus Communication Protocol Implementation",
    description:
      "Implemented CAN bus communication protocol on embedded systems for vehicle and industrial applications. Includes message filtering, error handling, and real-time data transmission.",
    technologies: ["CAN", "Embedded Systems", "C/C++", "Protocols"],
    category: "Networking",
  },
  {
    title: "3D Printed Robotic Arm Project",
    description:
      "Designed and fabricated a 3D-printed robotic arm with servo control and computer vision integration. Includes CAD modeling, mechanical design, and software control interface.",
    technologies: ["3D Printing", "SolidWorks", "Arduino", "Python", "Computer Vision"],
    category: "Mechanical Design",
  },
];

const categories = ["All", "IoT Systems", "Embedded Systems", "Hardware Design", "AI/ML", "Robotics", "Software Development", "Networking", "Mechanical Design"];

export default function Projects() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <section className="py-12 md:py-16 bg-card border-b border-border">
        <div className="container max-w-6xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Projects & Portfolio
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            A showcase of my academic and personal engineering projects demonstrating technical expertise and innovation.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 md:py-24">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-all duration-300 hover:border-accent/50 flex flex-col"
              >
                {/* Category Badge */}
                <div className="mb-3">
                  <span className="inline-block px-3 py-1 bg-muted text-muted-foreground text-xs font-semibold rounded-full">
                    {project.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4 pt-4 border-t border-border">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-muted/50 text-muted-foreground text-xs rounded hover:bg-accent/20 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      GitHub
                    </a>
                  )}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      View Project
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24 bg-card border-t border-border">
        <div className="container max-w-6xl mx-auto px-4 text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Interested in my work?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, and opportunities to contribute to innovative solutions.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
}
