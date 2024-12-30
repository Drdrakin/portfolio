import Footer from '../components/Footer';
import Card from '../components/Card';
import SkillsSection from '../components/SkillsSection';
import HeroSection from '../components/HeroSection';

const Home: React.FC = () => {
  return (
    <div className="bg-black text-gray-200">
      <HeroSection
        title="Guilherme Alves Area Matos"
        description="I'm a Software Developer with a strong focus on backend development. Skilled in JavaScript, TypeScript, and C#, with practical experience and lots of GitHub projects. Passionate about building efficient, scalable systems and continuously improving my technical expertise."
        imageSrc="laptop-books.jpg"
      />

      <SkillsSection />

      {/* Experience */}
      <section className="bg-gray-800 py-20" id="experience">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-3xl font-semibold text-orange-400">Experience</h2>
          <p className="text-lg text-gray-400 mt-4">Where I've worked</p>
          <div className="flex flex-col items-center mt-10">
            {/* Timeline Item */}
            <div className="flex items-center gap-6 mb-8 w-full max-w-3xl">
              <div className="flex flex-col items-center">
                <div className="badge badge-warning badge-lg">2024</div>
                <div className="h-16 w-1 bg-gray-600"></div>
              </div>
              <div className="card bg-gray-700 text-white shadow-lg w-full">
                <div className="card-body">
                  <h3 className="text-xl font-semibold">Frontend Developer</h3>
                  <p>Company A</p>
                  <p className="text-gray-400 mt-2">Developed responsive websites and web applications.</p>
                </div>
              </div>
            </div>
            {/* Timeline Item */}
            <div className="flex items-center gap-6 mb-8 w-full max-w-3xl">
              <div className="flex flex-col items-center">
                <div className="badge badge-warning badge-lg">2022</div>
                <div className="h-16 w-1 bg-gray-600"></div>
              </div>
              <div className="card bg-gray-700 text-white shadow-lg w-full">
                <div className="card-body">
                  <h3 className="text-xl font-semibold">Backend Developer</h3>
                  <p>Company B</p>
                  <p className="text-gray-400 mt-2">Built RESTful APIs and worked on server-side optimization.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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

      {/* Education Section */}
      <section className="bg-gray-800 py-20" id="education">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-3xl font-semibold text-orange-400">Education</h2>
          <p className="text-lg text-gray-400 mt-4">Where I studied</p>
          <div className="flex flex-col items-center mt-10">
            {/* Timeline Item */}
            <div className="flex items-center gap-6 mb-8 w-full max-w-3xl">
              <div className="flex flex-col items-center">
                <div className="badge badge-warning badge-lg">2022</div>
                <div className="h-16 w-1 bg-gray-600"></div>
              </div>
              <div className="card bg-gray-700 text-white shadow-lg w-full">
                <div className="card-body">
                  <h3 className="text-xl font-semibold">Technical Course in System Development</h3>
                  <p>ETEC - Technical School</p>
                  <p className="text-gray-400 mt-2">Learned programming in JavaScript, PHP, Python, and C#, and developed full-stack systems.</p>
                </div>
              </div>
            </div>
            {/* Timeline Item */}
            <div className="flex items-center gap-6 mb-8 w-full max-w-3xl">
              <div className="flex flex-col items-center">
                <div className="badge badge-warning badge-lg">2020</div>
                <div className="h-16 w-1 bg-gray-600"></div>
              </div>
              <div className="card bg-gray-700 text-white shadow-lg w-full">
                <div className="card-body">
                  <h3 className="text-xl font-semibold">High School</h3>
                  <p>School Name</p>
                  <p className="text-gray-400 mt-2">Completed high school with a focus on computer science and mathematics.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="bg-gray-900 py-20" id="contact">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-3xl font-semibold text-orange-400">Contact</h2>
          <p className="text-lg text-gray-400 mt-4 mb-3">Feel free to reach out to me!</p>
          <a
            className="btn bg-blue-800 hover:bg-blue-900 text-white border-0 mr-3"
            href="https://www.linkedin.com/in/guilherme-alves-area-matos-2675ab283/"
            target="_blank"
            aria-label="Linkedin"
          >
            Linkedin
          </a>
          <a
            className="btn bg-rose-800 hover:bg-rose-900 border-0 text-white mr-3"
            href="mailto:guilherme.alves.matos2005@gmail.com"
            target="_blank"
            aria-label="Email"
          >
            Email
          </a>
          <a
            className="btn bg-slate-950 hover:bg-slate-900 border-0 text-white"
            href="https://github.com/Drdrakin"
            target="_blank"
            aria-label="Github"
          >
            Github
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
