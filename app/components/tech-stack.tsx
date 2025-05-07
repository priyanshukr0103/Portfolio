import { Card } from "@/components/ui/card"
import Icon3D from "./3d-icon"

const technologies = [
  {
    category: "Frontend",
    icon: "code",
    color: "blue",
    skills: ["HTML5", "CSS", "JavaScript", "React", "Next.js", "TypeScript", "TailwindCSS", "Chart.js", "Thymeleaf"],
  },
  {
    category: "Backend",
    icon: "server",
    color: "green",
    skills: ["Java", "Spring Boot", "Python", "MongoDB", "REST API", "Node.js"],
  },
  {
    category: "Data Science & ML",
    icon: "chart",
    color: "indigo",
    skills: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Computer Vision", "OpenCV", "NLP", "Machine Learning"],
  },
  {
    category: "Tools & Version Control",
    icon: "tools",
    color: "purple",
    skills: ["VS Code", "Git", "GitHub", "Postman", "Jupyter Notebook", "Maven"],
  },
]

export default function TechStack() {
  return (
    <div className="grid gap-8 md:grid-cols-2">
      {technologies.map((tech) => (
        <Card key={tech.category} className="p-6 border border-primary/10 dark:border-primary/5 shadow-md hover:shadow-lg transition-shadow">
          <div className="flex items-center gap-3 mb-4">
            <div className="rounded-full p-2 bg-muted">
              <Icon3D icon={tech.icon} color={tech.color} size={20} />
            </div>
            <h3 className="text-xl font-semibold">{tech.category}</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {tech.skills.map((skill) => (
              <span
                key={skill}
                className="inline-flex items-center rounded-md bg-primary/10 dark:bg-primary/5 px-3 py-1.5 text-sm font-medium text-primary dark:text-primary/90 ring-1 ring-inset ring-primary/20 dark:ring-primary/10 mb-2"
              >
                {skill}
              </span>
            ))}
          </div>
        </Card>
      ))}
    </div>
  )
}

