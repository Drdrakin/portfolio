import { FC } from 'react';

interface HeroSectionProps {
  title: string;
  description: string;
  imageSrc: string;
}

const HeroSection: FC<HeroSectionProps> = ({ title, description, imageSrc }) => {
  return (
    <section
      className="hero min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${imageSrc})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content flex items-center justify-center px-6">
        <div className="max-w-screen-lg flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 animate__animated animate__fadeIn animate__delay-1s">
            <img
              src="Foto_currículo.jpg"
              alt="Your Photo"
              className="rounded-full shadow-xl w-48 h-48 object-cover mx-auto md:mx-0"
            />
          </div>

          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="mb-5 text-3xl sm:text-4xl md:text-5xl font-bold leading-tight animate__animated animate__fadeIn animate__delay-1s">
              {title}
            </h1>
            <p className="mb-5 text-sm sm:text-base md:text-lg leading-relaxed animate__animated animate__fadeIn animate__delay-1.5s">
              {description}
            </p>
            
            <a
              href="#projects"
              className="btn bg-gray-900 hover:bg-gray-800 text-white border-0 mt-5 animate__animated animate__fadeIn animate__delay-2s"
            >
              See My Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;