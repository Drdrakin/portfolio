const Header: React.FC = () => {
    return (
      <header className="bg-black text-orange-400 py-10" role="banner">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-semibold">Your Name</h1>
          <p className="text-xl mt-2" aria-label="Job Title">Full Stack Developer</p>
        </div>
      </header>
    );
  };
  
  export default Header;
  