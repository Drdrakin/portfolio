import Card from '../components/Card';

const Projects: React.FC = () => {
  return (
    <div className="bg-gray-900 text-gray-200 py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-semibold text-orange-400">My Projects</h2>
        <p className="text-lg text-gray-400 mt-4">A showcase of my work</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-10">
          {/* Example projects */}
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
    </div>
  );
};

export default Projects;
