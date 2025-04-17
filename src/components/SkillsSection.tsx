
export function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-6">
      <div className="container max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-tech-light text-tech-indigo font-medium text-sm mb-2 animate-slide-in">
            My Skills
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-tech-dark mb-4 animate-slide-in-delay-1">
            Technical <span className="text-tech-indigo">Expertise</span>
          </h2>
          <p className="text-tech-gray max-w-2xl text-lg animate-slide-in-delay-2">
            I've developed a diverse set of skills throughout my computer science journey,
            focusing on both fundamental concepts and practical applications.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Programming Languages",
              skills: ["Java", "Python", "JavaScript", "C++", "TypeScript"],
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m18 16 4-4-4-4" />
                  <path d="m6 8-4 4 4 4" />
                  <path d="m14.5 4-5 16" />
                </svg>
              )
            },
            {
              title: "Web Development",
              skills: ["React", "HTML/CSS", "Node.js", "Express", "Tailwind CSS"],
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z" />
                  <path d="M7 7h.01" />
                </svg>
              )
            },
            {
              title: "Database & DevOps",
              skills: ["SQL", "MongoDB", "Docker", "Git", "AWS"],
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 17h18" />
                  <path d="M3 10h18" />
                  <path d="m10 3-2 2-2-2" />
                  <path d="m18 3-2 2-2-2" />
                  <path d="m10 19-2-2-2 2" />
                  <path d="m18 19-2-2-2 2" />
                </svg>
              )
            },
            {
              title: "Software Development",
              skills: ["OOP", "Design Patterns", "Agile", "TDD", "CI/CD"],
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 12a5 5 0 0 0 5 5 8 8 0 0 1 5 2 8 8 0 0 1 5-2 5 5 0 0 0 5-5V7h-5a8 8 0 0 0-5 2 8 8 0 0 0-5-2H2Z" />
                  <path d="M6 11c1.5 0 3 .5 3 2-2 0-3 0-3-2Z" />
                  <path d="M18 11c-1.5 0-3 .5-3 2 2 0 3 0 3-2Z" />
                </svg>
              )
            },
            {
              title: "Data & ML",
              skills: ["Data Structures", "Algorithms", "Machine Learning", "Data Analysis", "TensorFlow"],
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                  <polyline points="3.29 7 12 12 20.71 7" />
                  <line x1="12" y1="22" x2="12" y2="12" />
                </svg>
              )
            },
            {
              title: "Soft Skills",
              skills: ["Problem Solving", "Communication", "Teamwork", "Time Management", "Creative Thinking"],
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 16v-4" />
                  <path d="M12 8h.01" />
                </svg>
              )
            }
          ].map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 animate-slide-in-delay-3">
              <div className="w-12 h-12 bg-tech-light rounded-lg flex items-center justify-center text-tech-indigo mb-5">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-tech-dark mb-4">{item.title}</h3>
              <ul className="space-y-2">
                {item.skills.map((skill, idx) => (
                  <li key={idx} className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-tech-indigo mr-2">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="text-tech-gray">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
