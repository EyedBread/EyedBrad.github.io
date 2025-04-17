
export function AboutSection() {
  return (
    <section id="about" className="py-20 px-6 bg-tech-light/50">
      <div className="container max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-block px-3 py-1 rounded-full bg-tech-light text-tech-indigo font-medium text-sm mb-2 animate-slide-in">
            About Me
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-tech-dark animate-slide-in-delay-1">
            My Journey in <span className="text-tech-indigo">Computer Science</span>
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
              <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                <p className="text-tech-indigo font-semibold mb-1">{item.label}</p>
                <p className="text-tech-dark">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
