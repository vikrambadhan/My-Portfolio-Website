import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-scroll';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isOpen, setIsOpen] = useState(false);

  // Memoize navigation links to avoid re-creation on every render
  const navigationLinks = useMemo(
    () => [
      { id: "home", label: "Home" },
      { id: "education", label: "Education" },
      { id: "skills", label: "Skills" },
      { id: "work", label: "Work" },
      { id: "projects", label: "Projects" },
      { id: "contact", label: "Contact" },
      
    ],
    []
  );

  // Handle scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Find the current active section
      const scrollPosition = window.scrollY + 100; // Adjusted offset for better alignment

      navigationLinks.forEach(({ id }) => {
        const element = document.getElementById(id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navigationLinks]); // Include navigationLinks as a dependency

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 
        ${isScrolled ? 'shadow-lg py-2' : 'py-3'}`}
    >
      <nav className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="home"
            smooth={true}
            duration={350}
            offset={-40}
            className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent cursor-pointer"
          >
            Portfolio
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navigationLinks.map((link) => (
              <Link
                key={link.id}
                to={link.id}
                spy={true}
                smooth={true}
                duration={350}
                offset={-40}
                onSetActive={() => setActiveSection(link.id)}
                className={`relative text-sm font-medium cursor-pointer transition-colors duration-300 ${
                  activeSection === link.id ? 'text-blue-600' : 'text-gray-600'
                }`}
              >
                {link.label}
                {/* Underline */}
                <span
                  className={`absolute left-0 bottom-0 h-0.5 w-full bg-gradient-to-r from-blue-600 to-purple-600 transform transition-transform duration-300 ${
                    activeSection === link.id ? 'scale-x-100' : 'scale-x-0'
                  }`}
                />
              </Link>
            ))}
          </div>

          {/* Hamburger Menu for Mobile */}
          <button
            className="md:hidden p-2 text-gray-600 hover:text-blue-600"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="sr-only">Toggle navigation</span>
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
          <div className="mt-4 space-y-4 bg-gray-50 shadow-md rounded-lg p-4">
            {navigationLinks.map((link) => (
              <Link
                key={link.id}
                to={link.id}
                spy={true}
                smooth={true}
                duration={500}
                offset={-80}
                onClick={() => {
                  setIsOpen(false);
                  setActiveSection(link.id); // Ensure activeSection updates on mobile click
                }}
                className={`block text-gray-600 text-sm font-medium py-2 border-b ${
                  activeSection === link.id ? 'text-blue-600 border-blue-600' : 'hover:text-blue-600 hover:border-blue-600'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-scroll';

// const Header = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [activeSection, setActiveSection] = useState('home');
//   const [isOpen, setIsOpen] = useState(false);

//   const navigationLinks = [
//     { id: "home", label: "Home" },
//     { id: "skills", label: "Skills" },
//     { id: "work", label: "Work" },
//     { id: "projects", label: "Projects" },
//     { id: "contact", label: "Contact" },
//   ];

//   // Handle scroll behavior
//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 20);

//       // Find the current active section
//       const scrollPosition = window.scrollY + 100; // Adjusted offset for better alignment
      
//       navigationLinks.forEach(({ id }) => {
//         const element = document.getElementById(id);
//         if (element) {
//           const { offsetTop, offsetHeight } = element;
//           if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
//             setActiveSection(id);
//           }
//         }
//       });
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <header 
//       className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 
//         ${isScrolled ? 'shadow-lg py-2' : 'py-3'}`}
//     >
//       <nav className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between">
//           {/* Logo */}
//           <Link
//             to="home"
//             smooth={true}
//             duration={350}
//             offset={-40}
//             className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent cursor-pointer"
//           >
//             Portfolio
//           </Link>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center space-x-6">
//             {navigationLinks.map((link) => (
//               <Link
//                 key={link.id}
//                 to={link.id}
//                 spy={true}
//                 smooth={true}
//                 duration={350}
//                 offset={-40}
//                 onSetActive={() => setActiveSection(link.id)}
//                 className={`relative text-sm font-medium cursor-pointer transition-colors duration-300 ${
//                   activeSection === link.id ? 'text-blue-600' : 'text-gray-600'
//                 }`}
//               >
//                 {link.label}
//                 {/* Underline */}
//                 <span
//                   className={`absolute left-0 bottom-0 h-0.5 w-full bg-gradient-to-r from-blue-600 to-purple-600 transform transition-transform duration-300 ${
//                     activeSection === link.id ? 'scale-x-100' : 'scale-x-0'
//                   }`}
//                 />
//               </Link>
//             ))}
//           </div>

//           {/* Hamburger Menu for Mobile */}
//           <button
//             className="md:hidden p-2 text-gray-600 hover:text-blue-600"
//             onClick={() => setIsOpen(!isOpen)}
//           >
//             <span className="sr-only">Toggle navigation</span>
//             {isOpen ? (
//               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
//               </svg>
//             ) : (
//               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
//               </svg>
//             )}
//           </button>
//         </div>

//         {/* Mobile Navigation */}
//         <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
//           <div className="mt-4 space-y-4 bg-gray-50 shadow-md rounded-lg p-4">
//             {navigationLinks.map((link) => (
//               <Link
//                 key={link.id}
//                 to={link.id}
//                 spy={true}
//                 smooth={true}
//                 duration={500}
//                 offset={-80}
//                 onClick={() => {
//                   setIsOpen(false);
//                   setActiveSection(link.id); // Ensure activeSection updates on mobile click
//                 }}
//                 className={`block text-gray-600 text-sm font-medium py-2 border-b ${
//                   activeSection === link.id ? 'text-blue-600 border-blue-600' : 'hover:text-blue-600 hover:border-blue-600'
//                 }`}
//               >
//                 {link.label}
//               </Link>
//             ))}
//           </div>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Header;
