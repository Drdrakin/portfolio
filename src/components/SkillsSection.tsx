import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiTypescript, SiExpress, SiTailwindcss, SiMongodb, SiDotnet, SiSharp } from "react-icons/si";
import Card from "./Card";

const SkillsSection: React.FC = () => {
  return (
    <section className="bg-gray-900 py-20" id="skills">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-4xl font-semibold text-orange-400">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 mt-10">
          <Card
            title="TypeScript"
            icon={<SiTypescript />}
            description="Strong knowledge of TypeScript's static typing."
          />
          <Card
            title="React"
            icon={<FaReact />}
            description="Building dynamic, modern user interfaces."
          />
          <Card
            title="Node.js"
            icon={<FaNodeJs />}
            description="Server-side JavaScript for scalable applications."
          />
          <Card
            title="Express"
            icon={<SiExpress />}
            description="Building REST APIs and web servers."
          />
          <Card
            title="Tailwind CSS"
            icon={<SiTailwindcss />}
            description="Utility-first CSS framework for rapid UI development."
          />
          <Card
            title="MongoDB"
            icon={<SiMongodb />}
            description="Document-based NoSQL database."
          />
          <Card
            title="DotNet"
            icon={<SiDotnet />}
            description="Building enterprise level solutions with the C# Framework."
          />
          <Card
            title="C#"
            icon={<SiSharp />}
            description="Strongly Typed, object oriented language."
          />
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
