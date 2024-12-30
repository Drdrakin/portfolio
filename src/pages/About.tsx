const About: React.FC = () => {
  return (
    <div className="bg-gray-800 text-gray-200 py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-semibold text-orange-400">About Me</h2>
        <p className="text-lg text-gray-400 mt-4">
          Hi! I'm Guilherme Alves, a passionate software developer with a deep interest in backend technologies and scalable systems. I've been honing my skills through various projects, collaborations, and continuous learning. Here’s a bit more about me...
        </p>

        <div className="mt-10">
          <h3 className="text-xl font-semibold text-orange-400">My Journey</h3>
          <p className="text-gray-400 mt-4">
            I started my journey in software development at a young age, experimenting with different programming languages and building small projects. Over the years, I’ve focused on backend development, mastering languages like JavaScript, TypeScript, Node.js, and C#. In addition to my technical skills, I’m also dedicated to personal growth and enjoy learning new things every day.
          </p>

          <h3 className="text-xl font-semibold text-orange-400 mt-10">Education & Studies</h3>
          <p className="text-gray-400 mt-4">
            I studied **Computer Science** at [Your University], where I gained solid foundational knowledge in algorithms, data structures, and software engineering principles. I’ve also taken part in various online courses and certifications to keep up-to-date with the latest technologies and practices.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
