
import { Award, Trophy } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-6 bg-tech-candy-darkbg/50">
      <div className="container max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-block px-3 py-1 rounded-full bg-tech-candy-darkbg border border-tech-candy-pink/20 text-tech-candy-pink font-medium text-sm mb-2 animate-slide-in">
            About Me
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white animate-slide-in-delay-1">
            My Journey in <span className="text-gradient">Computer Science</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="animate-slide-in-delay-2">
            <p className="text-tech-gray mb-6 text-lg">
              I'm passionate about using technology to solve real-world problems. My journey in computer science began when I wrote my first line of code at the age of 14, and I've been hooked ever since.
            </p>
            <p className="text-tech-gray mb-6 text-lg">
              As a student pursuing a degree in Computer Science, I've developed a strong foundation in algorithms, data structures, and software design principles. I enjoy both the creative and analytical aspects of programming.
            </p>
            <p className="text-tech-gray text-lg">
              Beyond academics, I'm an active participant in hackathons, coding competitions, and open-source contributions. I believe in continuous learning and pushing the boundaries of what's possible with code.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-4 animate-slide-in-delay-3">
            {[
              { label: "Name", value: "Alex Johnson" },
              { label: "Email", value: "alex@example.com" },
              { label: "Date of Birth", value: "May 24, 2000" },
              { label: "Location", value: "Boston, MA" },
              { label: "Study", value: "University of Technology" },
              { label: "Degree", value: "BSc Computer Science" },
              { label: "Interest", value: "AI & Machine Learning" },
              { label: "Graduation", value: "Expected 2024" }
            ].map((item, index) => (
              <div key={index} className="bg-tech-candy-bg p-4 rounded-lg shadow-sm border border-tech-candy-purple/20">
                <p className="text-tech-candy-pink font-semibold mb-1">{item.label}</p>
                <p className="text-white">{item.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* New Achievement Section */}
        <div className="mt-12 bg-tech-candy-bg/50 p-6 rounded-lg border border-tech-candy-purple/20 animate-slide-in-delay-4">
          <div className="flex items-center justify-start gap-4 mb-4">
            <Award className="text-tech-candy-pink w-8 h-8" />
            <h3 className="text-xl font-semibold text-white">Recent Achievement</h3>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="flex-shrink-0 bg-tech-candy-purple/20 p-3 rounded-full">
              <Trophy className="w-10 h-10 text-tech-candy-purple" />
            </div>
            <div>
              <p className="text-tech-gray font-medium">Hackathon Winner</p>
              <p className="text-white text-sm">1st Place at Regional Tech Innovation Hackathon</p>
              <p className="text-tech-gray text-xs">Developed an AI-powered solution for urban sustainability</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
