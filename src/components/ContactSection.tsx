
import { Button } from "@/components/ui/button";

export function ContactSection() {
  return <section id="contact" className="py-20 px-6 bg-tech-candy-darkbg/50">
      <div className="container max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-tech-light text-tech-indigo font-medium text-sm mb-2 animate-slide-in">
            Get In Touch
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-tech-light mb-4 animate-slide-in-delay-1">
            Let's <span className="text-tech-indigo">Connect</span>
          </h2>
          <p className="text-tech-gray max-w-2xl text-lg animate-slide-in-delay-2">
            Feel free to reach out for collaborations, opportunities, or just a tech chat!
            I'm always open to discussing new projects and ideas.
          </p>
        </div>
        
        <div className="flex flex-col items-center max-w-3xl mx-auto animate-slide-in-delay-3">
          <div className="bg-white p-8 rounded-xl shadow-sm mb-8 w-full">
            <h3 className="text-2xl font-semibold text-tech-dark mb-6">Contact Information</h3>
            <div className="space-y-6">
              {[{
              icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>,
              title: "Phone",
              value: "+1 (555) 123-4567"
            }, {
              icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>,
              title: "Email",
              value: "alex@example.com"
            }, {
              icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>,
              title: "Location",
              value: "Boston, MA, United States"
            }].map((item, index) => <div key={index} className="flex items-start">
                  <div className="w-10 h-10 bg-tech-light rounded-lg flex items-center justify-center text-tech-indigo mr-4">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-tech-gray font-medium">{item.title}</h4>
                    <p className="text-tech-dark font-semibold">{item.value}</p>
                  </div>
                </div>)}
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-sm w-full">
            <h3 className="text-2xl font-semibold text-tech-dark mb-6">Follow Me</h3>
            <div className="flex gap-4 justify-center">
              {[{
              name: "GitHub",
              icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                      <path d="M9 18c-4.51 2-5-2-7-2" />
                    </svg>
            }, {
              name: "LinkedIn",
              icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect width="4" height="12" x="2" y="9" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
            }, {
              name: "Twitter",
              icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                    </svg>
            }, {
              name: "Instagram",
              icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                    </svg>
            }].map((social, index) => <a key={index} href="#" className="w-12 h-12 bg-tech-light rounded-lg flex items-center justify-center text-tech-indigo hover:bg-tech-indigo hover:text-white transition-colors duration-300" aria-label={social.name}>
                  {social.icon}
                </a>)}
            </div>
            <div className="mt-6 text-center">
              <p className="text-tech-gray text-sm">Preferred contact method: Email</p>
              <Button className="mt-4 bg-tech-indigo hover:bg-tech-indigo/90 text-white">
                Download Resume
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>;
}
