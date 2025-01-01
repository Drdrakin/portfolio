import Header from "../components/Header";
import Footer from "../components/Footer"
import { FaBook, FaGamepad, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiTypescript, SiExpress, SiTailwindcss, SiMongodb, SiDotnet, SiSharp } from "react-icons/si";
import { GrObjectUngroup } from "react-icons/gr";
import { FaComputer } from "react-icons/fa6";
import { motion } from 'framer-motion';

const About: React.FC = () => {

  const skills = [
    { name: "TypeScript", description: "Strong knowledge of TypeScript's static typing.", icon: <SiTypescript /> },
    { name: "React", description: "Building dynamic, modern user interfaces.", icon: <FaReact /> },
    { name: "Node.js", description: "Server-side JavaScript for scalable applications.", icon: <FaNodeJs /> },
    { name: "Express", description: "Building REST APIs and web servers.", icon: <SiExpress /> },
    { name: "Object Oriented Programming", description: "Programming Paradigm.", icon:<GrObjectUngroup /> },
    { name: "Tailwind CSS", description: "Utility-first CSS framework for rapid UI development.", icon: <SiTailwindcss /> },
    { name: "MongoDB", description: "Document-based NoSQL database.", icon: <SiMongodb /> },
    { name: "DotNet", description: "Building enterprise-level solutions with the C# Framework.", icon: <SiDotnet /> },
    { name: "C#", description: "Strongly Typed, object-oriented language.", icon: <SiSharp /> }
  ];

  return (
    <div className="bg-gray-800 text-gray-200">
      <Header />

      <div className="container mx-auto px-4 py-16">
        <section className="text-center mb-16">
          <motion.h2 
            className="text-4xl font-bold text-orange-400 mb-4" 
            initial={{ opacity: 0, y: -20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6 }}
          >
            About Me
          </motion.h2>
          <motion.p
            className="text-lg text-gray-200 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Hi! I'm Guilherme Alves, a passionate software developer with a deep love for technology. Here’s a glimpse into my journey and interests.
          </motion.p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <motion.img
            src="eu.jpg"
            alt="Journey"
            className="rounded-lg shadow-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          />
          <div>


            <h3 className="text-2xl font-semibold text-orange-400 mt-8 mb-4">Education</h3>
            <ul className="text-gray-200 leading-relaxed">
              <li>
                <strong>Technic:</strong> Software Development, 07/2023 - 12/2024 <br />
                <span className="text-gray-400">Etec de Embu - Embu das Artes</span>
              </li>
              <li className="mt-4">
                <strong>Technic:</strong> Computer Networks, 02/2023 - 07/2024 <br />
                <span className="text-gray-400">Etec de Embu - Embu das Artes</span>
              </li>
              <li className="mt-4">
                <strong>Integrated High School Program:</strong> Technic in Administration, 02/2021 - 12/2023 <br />
                <span className="text-gray-400">Etec de Embu - Embu das Artes</span>
              </li>
            </ul>

            <h3 className="text-2xl font-semibold text-orange-400 mt-8 mb-4">Certifications</h3>
            <ul className="text-gray-200 leading-relaxed">
              <li>
                <strong>Responsive Web Design:</strong> FreeCodeCamp <br />
                <span className="text-gray-400">Responsivity, acessibility, media query, good practices</span>
              </li>
              <li className="mt-4">
                <strong>Google Cloud Computing Foundations:</strong> Google <br />
                <span className="text-gray-400">Docker, API Rest, Apps deploy, serverless.</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-12">

          <div className="grid grid-cols-2">
            <div>
              <h3 className="text-2xl font-semibold text-orange-400 mb-4 text-center">My Journey</h3>
              <p className="text-gray-200 leading-relaxed text-left mb-12 mr-10">
                I was born in 2005, and my love for technology started early when my sister let me explore her laptop. At 14, I decided to pursue computer science, realizing my passion for working with computers. My technical education cemented this love, leading me to specialize in programming.
              </p>
            </div>
            <div>
              <FaComputer size={120}/> 
            </div>
          </div>

          <section className="mb-16">
            <h3 className="text-2xl font-semibold text-orange-400 text-center mb-8">Main Technical Skills</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  className="card shadow-lg bg-gray-900 p-6 text-center rounded-lg"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="flex items-center justify-center text-orange-400 text-4xl mb-4">
                    {skill.icon}
                  </div>
                  <h4 className="text-xl font-semibold mb-2 text-orange-400">{skill.name}</h4>
                  <p className="text-gray-200">{skill.description}</p>
                </motion.div>
              ))}
            </div>
          </section>
        </section>

        {/* Hobbies Section */}
        <section className="mb-16">
          <h3 className="text-2xl font-semibold text-orange-400 text-center mb-8">Hobbies & Interests</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              className="flex items-center gap-4"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <FaGamepad className="text-orange-400 text-5xl" />
              <p className="text-gray-400 leading-relaxed">
                I’m a big fan of gaming, exploring new stories, and immersing myself in interactive worlds.
              </p>
            </motion.div>

            <motion.div
              className="flex items-center gap-4"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <FaBook className="text-orange-400 text-5xl" />
              <p className="text-gray-400 leading-relaxed">
                I’m an avid reader, particularly of science fiction, and I love learning from open-source communities.
              </p>
            </motion.div>
          </div>
        </section>
      </div>
      <Footer/>
    </div>
  );
};

export default About;
