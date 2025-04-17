import { Button } from "@/components/ui/button";
export function ProjectsSection() {
  return <section id="projects" className="py-20 px-6 bg-tech-candy-darkbg/50">
      <div className="container max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-tech-light text-tech-indigo font-medium text-sm mb-2 animate-slide-in">
            My Work
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-tech-light mb-4 animate-slide-in-delay-1">
            Recent <span className="text-tech-indigo">Projects</span>
          </h2>
          <p className="text-tech-gray max-w-2xl text-lg animate-slide-in-delay-2">
            Here are some of the projects I've worked on, showcasing my skills and interests
            in various areas of computer science.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[{
          title: "AI Study Assistant",
          description: "An intelligent application that helps students organize study materials and provides personalized learning recommendations using machine learning algorithms.",
          tech: ["Python", "TensorFlow", "Flask", "React"],
          image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
          link: "#"
        }, {
          title: "Smart Inventory System",
          description: "A full-stack inventory management application for small businesses with real-time tracking, analytics, and automated reordering features.",
          tech: ["Node.js", "MongoDB", "React", "Express"],
          image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
          link: "#"
        }, {
          title: "Eco Route Planner",
          description: "A mobile app that helps users find the most environmentally friendly routes for their daily commutes by analyzing carbon footprint data.",
          tech: ["Java", "Android SDK", "Google Maps API", "Firebase"],
          image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
          link: "#"
        }, {
          title: "Social Network Analysis Tool",
          description: "A data visualization tool that analyzes social network connections and provides insights on community structures and influential nodes.",
          tech: ["Python", "D3.js", "NetworkX", "Flask"],
          image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
          link: "#"
        }, {
          title: "Secure File Sharing Platform",
          description: "An end-to-end encrypted file sharing platform with granular access controls and expiring share links for enhanced security.",
          tech: ["TypeScript", "Node.js", "React", "AWS S3"],
          image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80",
          link: "#"
        }, {
          title: "Competitive Programming Archive",
          description: "A personal collection of algorithmic solutions to various competitive programming problems with explanations and time/space complexity analysis.",
          tech: ["C++", "Java", "Python", "Algorithms"],
          image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
          link: "#"
        }].map((project, index) => <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-all hover:translate-y-[-5px] duration-300 animate-slide-in-delay-3">
              <div className="h-48 overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-tech-dark mb-2">{project.title}</h3>
                <p className="text-tech-gray mb-4 text-sm line-clamp-3">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, idx) => <span key={idx} className="text-xs bg-tech-light text-tech-indigo px-2 py-1 rounded-full">
                      {tech}
                    </span>)}
                </div>
                <Button variant="outline" size="sm" className="w-full border-tech-indigo text-tech-indigo hover:bg-tech-indigo/10">
                  View Project
                </Button>
              </div>
            </div>)}
        </div>
        
        <div className="mt-16 flex justify-center">
          <Button className="bg-tech-indigo hover:bg-tech-indigo/90 text-white px-6">
            View All Projects
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </Button>
        </div>
      </div>
    </section>;
}