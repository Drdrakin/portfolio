import { useState, useEffect } from 'react';
import { SiLinkedin, SiGmail } from 'react-icons/si';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {
    setIsSticky(window.scrollY > (document.getElementById('hero')?.offsetHeight || 0));
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full top-0 left-0 z-50 bg-black text-white transition-all duration-300 ${isSticky ? 'shadow-md py-2' : 'py-4'}`}
    >
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-2xl font-bold">
          <Link to="/" className="text-orange-400">Guilherme Alves</Link>
        </h1>
        
        <nav className="hidden md:flex gap-8">
          <Link to="/" className="hover:text-orange-400 transition-colors">Home</Link>
          <Link to="/about" className="hover:text-orange-400 transition-colors">About Me</Link>
          <Link to="/projects" className="hover:text-orange-400 transition-colors">Projects</Link>
          <a 
            className="hover:text-orange-400 transition-colors"
            href="mailto:guilherme.alves.matos2005@gmail.com"
            target="_blank"
            aria-label="Email"
          >
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-400 transition-colors"
          >
            LinkedIn
          </a>
        </nav>
        
        <div className="dropdown dropdown-end  md:hidden">
          <div tabIndex={0} role="button" className="btn bg-black hover:bg-black border-0 text-white text-lg">Contact</div>
          <ul tabIndex={0} className="dropdown-content menu bg-white rounded-box z-[1] w-40 p-2 shadow">
            <li>
              <a 
                className="text-black transition-colors text-lg"
                href="mailto:guilherme.alves.matos2005@gmail.com"
                target="_blank"
                aria-label="Email"
              >
                <SiGmail/>
                Email
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black transition-colors text-lg"
              >
                <SiLinkedin/>
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
