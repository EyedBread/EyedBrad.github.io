
export function EducationSection() {
  return (
    <section id="education" className="py-20 px-6">
      <div className="container max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-tech-light text-tech-indigo font-medium text-sm mb-2 animate-slide-in">
            My Background
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-tech-dark mb-4 animate-slide-in-delay-1">
            Education & <span className="text-tech-indigo">Experience</span>
          </h2>
          <p className="text-tech-gray max-w-2xl text-lg animate-slide-in-delay-2">
            My academic journey and hands-on experiences that have shaped my skills
            and knowledge in the field of computer science.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-2xl font-bold text-tech-dark mb-6 flex items-center">
              <div className="w-10 h-10 bg-tech-light rounded-lg flex items-center justify-center text-tech-indigo mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                  <path d="M6 12v5c3 3 9 3 12 0v-5" />
                </svg>
              </div>
              Education
            </h3>
            
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-tech-indigo/30 before:via-tech-indigo before:to-tech-light">
              {[
                {
                  degree: "BSc Computer Science",
                  institution: "University of Technology",
                  period: "2020 - Present",
                  description: "Specializing in Artificial Intelligence and Software Engineering. Current GPA: 3.8/4.0"
                },
                {
                  degree: "Summer Coding Bootcamp",
                  institution: "Tech Academy",
                  period: "Summer 2022",
                  description: "Intensive 10-week program focused on full-stack web development using modern technologies."
                },
                {
                  degree: "High School Diploma",
                  institution: "Lincoln High School",
                  period: "2016 - 2020",
                  description: "Advanced coursework in Math, Physics, and Computer Science. Graduated with honors."
                }
              ].map((item, index) => (
                <div key={index} className="relative flex items-start group animate-slide-in-delay-3">
                  <div className="ml-2 md:ml-0 flex flex-col items-center">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-tech-indigo bg-white text-tech-indigo group-hover:bg-tech-indigo group-hover:text-white transition-colors duration-300 z-10">
                      {index + 1}
                    </div>
                    <div className="w-0.5 h-full bg-tech-indigo" />
                  </div>
                  <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 ml-6 md:ml-10 relative before:absolute before:left-[-8px] before:top-5 before:w-4 before:h-4 before:rotate-45 before:bg-white before:border-l before:border-b before:border-gray-100 hover:shadow-md transition-shadow duration-300 flex-1">
                    <div className="flex flex-wrap justify-between items-center mb-2">
                      <h4 className="text-lg font-semibold text-tech-dark">{item.degree}</h4>
                      <span className="text-xs font-medium text-white bg-tech-indigo px-2 py-1 rounded-full">
                        {item.period}
                      </span>
                    </div>
                    <h5 className="text-tech-gray font-medium mb-2">{item.institution}</h5>
                    <p className="text-tech-gray/80 text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-tech-dark mb-6 flex items-center">
              <div className="w-10 h-10 bg-tech-light rounded-lg flex items-center justify-center text-tech-indigo mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                  <polyline points="3.29 7 12 12 20.71 7" />
                  <line x1="12" y1="22" x2="12" y2="12" />
                </svg>
              </div>
              Experience
            </h3>
            
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-tech-indigo/30 before:via-tech-indigo before:to-tech-light">
              {[
                {
                  role: "Software Engineering Intern",
                  company: "TechSolutions Inc.",
                  period: "Summer 2023",
                  description: "Worked on developing new features for a cloud-based enterprise application. Collaborated with senior developers using agile methodologies."
                },
                {
                  role: "Research Assistant",
                  company: "University AI Lab",
                  period: "Fall 2022 - Spring 2023",
                  description: "Assisted in machine learning research projects, implementing and evaluating algorithms for natural language processing tasks."
                },
                {
                  role: "Web Development Teaching Assistant",
                  company: "University of Technology",
                  period: "Spring 2022",
                  description: "Helped students learn frontend and backend web development technologies. Conducted code reviews and provided feedback on projects."
                },
                {
                  role: "Freelance Developer",
                  company: "Self-employed",
                  period: "2021 - Present",
                  description: "Built custom websites and applications for small businesses and startups. Focused on responsive design and seamless user experiences."
                }
              ].map((item, index) => (
                <div key={index} className="relative flex items-start group animate-slide-in-delay-3">
                  <div className="ml-2 md:ml-0 flex flex-col items-center">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-tech-indigo bg-white text-tech-indigo group-hover:bg-tech-indigo group-hover:text-white transition-colors duration-300 z-10">
                      {index + 1}
                    </div>
                    <div className="w-0.5 h-full bg-tech-indigo" />
                  </div>
                  <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 ml-6 md:ml-10 relative before:absolute before:left-[-8px] before:top-5 before:w-4 before:h-4 before:rotate-45 before:bg-white before:border-l before:border-b before:border-gray-100 hover:shadow-md transition-shadow duration-300 flex-1">
                    <div className="flex flex-wrap justify-between items-center mb-2">
                      <h4 className="text-lg font-semibold text-tech-dark">{item.role}</h4>
                      <span className="text-xs font-medium text-white bg-tech-indigo px-2 py-1 rounded-full">
                        {item.period}
                      </span>
                    </div>
                    <h5 className="text-tech-gray font-medium mb-2">{item.company}</h5>
                    <p className="text-tech-gray/80 text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
