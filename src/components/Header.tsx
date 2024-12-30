import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Mobile menu toggle state

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const heroHeight = document.getElementById('hero')?.offsetHeight || 0;
    setIsSticky(scrollPosition > heroHeight);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle the visibility of the mobile contact menu
  };

  return (
    <header
      className={`fixed w-full top-0 left-0 z-50 bg-black text-white transition-all duration-300 ${isSticky ? 'shadow-md py-2' : 'py-4'}`}
    >
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-2xl font-bold">
          <Link to="/" className="text-orange-400">Guilherme Alves</Link>
        </h1>

        {/* Desktop and larger screen navigation */}
        <nav className="hidden md:flex">
          <ul className="flex gap-8">
            <li>
              <Link to="/" className="hover:text-orange-400 transition-colors">Home</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-orange-400 transition-colors">About Me</Link>
            </li>
            <li>
              <Link to="/projects" className="hover:text-orange-400 transition-colors">Projects</Link>
            </li>
            {/* Contact Menu (expands on hover) */}
            <li className="relative group">
              <button className="text-orange-400 hover:text-white transition-colors">
                Contact
              </button>
              {/* Contact dropdown with opacity and transition */}
              <div className="absolute left-0 top-full mt-2 bg-black text-white py-4 px-6 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                <a 
                  className="cursor-pointer hover:text-orange-400"
                  href="mailto:guilherme.alves.matos2005@gmail.com"
                  target="_blank"
                  aria-label="Email"
                >
                  Gmail
                </a>
                <p>
                  <a
                    href="https://www.linkedin.com/in/yourprofile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-orange-400"
                  >
                    LinkedIn
                  </a>
                </p>
              </div>
            </li>
          </ul>
        </nav>

        {/* Hamburger Menu for smaller screens */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-orange-400">
            Contact
          </button>
        </div>
      </div>

      {/* Mobile Contact Menu with Slide and Fade animation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black text-white py-4 px-6 transition-all duration-300 transform translate-y-0 ease-in-out">
          <a 
            className="cursor-pointer hover:text-orange-400"
            href="mailto:guilherme.alves.matos2005@gmail.com"
            target="_blank"
            aria-label="Email"
          >
            Gmail
          </a>
          <p>
            <a
              href="https://www.linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-400"
            >
              LinkedIn
            </a>
          </p>
        </div>
      )}
    </header>
  );
};

export default Header;