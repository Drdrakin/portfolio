import { FC } from "react";

interface CardProps {
  title: string;
  description?: string;
  icon?: JSX.Element;
  link?: string;
}

const Card: FC<CardProps> = ({ title, description, icon, link }) => {
  return (
    <div className="card shadow-lg bg-gray-800 text-white p-6">
      <div className="flex items-center justify-center space-x-4">
        {icon && <div className="text-3xl">{icon}</div>}
        <div>
          <h3 className="text-xl font-semibold">{title}</h3>
          {description && <p className="mt-2 text-gray-400 text-sm">{description}</p>}
          {link && (
            <a
              href={link}
              className="mt-4 text-orange-400 hover:underline"
              aria-label={`View details of ${title}`}
            >
              View Project
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
