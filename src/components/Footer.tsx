
export function Footer() {
  return (
    <footer className="py-10 px-6 bg-white border-t border-gray-100">
      <div className="container max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#" className="text-tech-dark font-bold text-xl">
              <span className="text-tech-indigo">CS</span>Portfolio
            </a>
            <p className="text-tech-gray mt-2 text-sm max-w-md">
              A showcase of my journey, skills, and projects in the field of Computer Science.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-6 md:gap-10 justify-center">
            {["Home", "About", "Skills", "Projects", "Education", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-tech-dark/70 hover:text-tech-indigo transition-colors text-sm font-medium"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center">
          <p className="text-tech-gray text-sm">
            © {new Date().getFullYear()} Alex Johnson. All rights reserved.
          </p>
          
          <div className="mt-4 md:mt-0 flex gap-6">
            <a href="#" className="text-tech-gray hover:text-tech-indigo transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-tech-gray hover:text-tech-indigo transition-colors text-sm">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
