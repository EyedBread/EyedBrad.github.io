
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 pb-16 px-6">
      <div className="container max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-center">
          <div className="lg:col-span-3 space-y-6 animate-fade-in">
            <div className="inline-block px-3 py-1 rounded-full bg-tech-light text-tech-indigo font-medium text-sm mb-2">
              Computer Science Student
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-tech-dark leading-tight">
              Hi, I'm <span className="text-tech-indigo">Alex Johnson</span>
              <br />
              Future Software Engineer
            </h1>
            <p className="text-tech-gray text-lg md:text-xl max-w-2xl">
              I craft digital solutions through code, turning complex problems into elegant, 
              user-friendly applications. Currently pursuing my Computer Science degree.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button className="bg-tech-indigo hover:bg-tech-indigo/90 text-white px-6 py-6">
                View My Projects
              </Button>
              <Button variant="outline" className="border-tech-indigo text-tech-indigo hover:bg-tech-indigo/10 px-6 py-6">
                Download CV
              </Button>
            </div>
          </div>
          <div className="lg:col-span-2 animate-scale-in flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-tech-blue to-tech-indigo/70 flex items-center justify-center">
                {/* User avatar or illustration could go here */}
                <div className="w-60 h-60 md:w-76 md:h-76 rounded-full bg-white flex items-center justify-center overflow-hidden">
                  {/* This is a placeholder for a profile image */}
                  <svg className="w-48 h-48 text-tech-gray/30" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
                  </svg>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white rounded-full p-3 shadow-lg">
                <div className="bg-tech-light rounded-full p-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-tech-indigo">
                    <path d="m18 16 4-4-4-4" />
                    <path d="m6 8-4 4 4 4" />
                    <path d="m14.5 4-5 16" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 md:mt-24 flex justify-center">
          <a href="#about" className="animate-bounce inline-flex items-center justify-center w-10 h-10 rounded-full bg-tech-light text-tech-indigo">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m6 9 6 6 6-6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
