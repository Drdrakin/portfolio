import Header from '../components/Header';
import Footer from '../components/Footer';
import Card from '../components/Card';
import SkillsSection from '../components/SkillsSection';

const Portfolio: React.FC = () => {
    return (
      <div className="bg-black text-gray-200">
        <Header />
  
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-black to-gray-800 py-40 text-center text-orange-400">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl font-bold">Your Name</h1>
            <p className="text-xl mt-4">Full Stack Developer</p>
            <p className="mt-6 max-w-2xl mx-auto">
              Passionate about building modern web applications with a focus on user experience and performance.
            </p>
            <a
              href="#contact"
              className="mt-8 inline-block text-black bg-orange-500 hover:bg-orange-400 py-2 px-6 rounded-lg text-lg"
              aria-label="Get in touch"
            >
              Contact Me
            </a>
          </div>
        </section>
  
        <SkillsSection />
  
        {/* Projects */}
        <section className="bg-gray-900 py-20" id="projects">
          <div className="container mx-auto text-center px-4">
            <h2 className="text-3xl font-semibold text-orange-400">Projects</h2>
            <p className="text-lg text-gray-400 mt-4">My recent work</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-10">
              {["Project 1", "Project 2", "Project 3"].map((project, idx) => (
                <Card
                  key={idx}
                  title={project}
                  description={`A brief description of ${project}.`}
                  link="#"
                />
              ))}
            </div>
          </div>
        </section>
  
        {/* Experience */}
        <section className="bg-gray-800 py-20" id="experience">
          <div className="container mx-auto text-center px-4">
            <h2 className="text-3xl font-semibold text-orange-400">Experience</h2>
            <p className="text-lg text-gray-400 mt-4">Where I've worked</p>
            <div className="relative mt-10">
              <div className="absolute inset-0 h-px bg-gray-600 top-1/2"></div>
              <div className="relative space-y-8">
                <div className="flex justify-center items-center space-x-4">
                  <div className="w-20 h-20 bg-orange-500 rounded-full flex justify-center items-center text-white">
                    <span className="text-xl font-bold">2024</span>
                  </div>
                  <div className="text-white">
                    <h3 className="text-xl font-semibold">Frontend Developer</h3>
                    <p className="mt-2">Company A</p>
                    <p className="mt-2">Developed responsive websites and web applications.</p>
                  </div>
                </div>
                <div className="flex justify-center items-center space-x-4">
                  <div className="w-20 h-20 bg-orange-500 rounded-full flex justify-center items-center text-white">
                    <span className="text-xl font-bold">2022</span>
                  </div>
                  <div className="text-white">
                    <h3 className="text-xl font-semibold">Backend Developer</h3>
                    <p className="mt-2">Company B</p>
                    <p className="mt-2">Built RESTful APIs and worked on server-side optimization.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
  
        {/* Contact */}
        <section className="bg-black py-20" id="contact">
          <div className="container mx-auto text-center px-4">
            <h2 className="text-3xl font-semibold text-orange-400">Contact</h2>
            <p className="text-lg text-gray-400 mt-4">Feel free to reach out to me!</p>
            <a
              href="mailto:your-email@example.com"
              className="mt-8 inline-block text-black bg-orange-500 hover:bg-orange-400 py-2 px-6 rounded-lg text-lg"
              aria-label="Email me"
            >
              Email Me
            </a>
          </div>
        </section>
  
        <Footer />
      </div>
    );
  };
  
  export default Portfolio;  
  
