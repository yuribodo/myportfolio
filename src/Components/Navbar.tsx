import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom'; // Importe useNavigate

const Navbar = () => {
  const navigate = useNavigate(); // Use useNavigate para navegação
  const [menuOpen, setMenuOpen] = useState(false);

  const handleContatoClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    navigate('/');
    setTimeout(() => {
      const contatoSection = document.querySelector('#contato');
      contatoSection?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleHomeClick = () => {
    navigate('/');
    setTimeout(() => {
      const destaqueSection = document.querySelector('#destaque'); // Substitua com o ID correto da seção de destaque
      destaqueSection?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="fixed top-4 right-4 md:top-8 md:right-10 z-50">
      {/* Hambúrguer Menu Icon (Para Dispositivos Móveis) */}
      <div className="flex md:hidden">
        <button 
          onClick={toggleMenu} 
          className="focus:outline-none focus:bg-gray-300 rounded-lg p-2"
        >
          <svg className="w-6 h-6 text-gray-700" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M2 4.5C2 4.22386 2.22386 4 2.5 4H17.5C17.7761 4 18 4.22386 18 4.5C18 4.77614 17.7761 5 17.5 5H2.5C2.22386 5 2 4.77614 2 4.5ZM2.5 8C2.22386 8 2 8.22386 2 8.5C2 8.77614 2.22386 9 2.5 9H17.5C17.7761 9 18 8.77614 18 8.5C18 8.22386 17.7761 8 17.5 8H2.5ZM2 11.5C2 11.2239 2.22386 11 2.5 11H17.5C17.7761 11 18 11.2239 18 11.5C18 11.7761 17.7761 12 17.5 12H2.5C2.22386 12 2 11.7761 2 11.5ZM2.5 15C2.22386 15 2 15.2239 2 15.5C2 15.7761 2.22386 16 2.5 16H17.5C17.7761 16 18 15.7761 18 15.5C18 15.2239 17.7761 15 17.5 15H2.5Z"></path>
          </svg>
        </button>
      </div>

      {/* Menu Principal (Para Desktop) */}
      <motion.div 
        className={`hidden md:flex md:space-x-4 p-2 bg-white shadow-lg rounded-lg ${menuOpen ? 'absolute top-14 right-4 bg-white w-full' : 'relative'}`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <Link to="/" onClick={handleHomeClick} className="text-gray-700 font-semibold hover:text-blue-500 text-sm md:text-base">Home</Link>
        <Link to="/sobre" className="text-gray-700 font-semibold hover:text-blue-500 text-sm md:text-base">Sobre</Link>
        <Link to="/trabalhos" className="text-gray-700 font-semibold hover:text-blue-500 text-sm md:text-base">Trabalhos</Link>
        <a href="/contato" onClick={handleContatoClick} className="text-gray-700 font-semibold hover:text-blue-500 text-sm md:text-base">Contato</a>
      </motion.div>

      {/* Menu de Hambúrguer (Para Dispositivos Móveis) */}
      <motion.div 
        className={`flex flex-col md:hidden items-center justify-center p-2 bg-white shadow-lg rounded-lg ${menuOpen ? 'flex' : 'hidden'}`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: menuOpen ? 1 : 0, y: menuOpen ? 0 : -20 }}
        transition={{ duration: 0.3 }}
      >
        <Link to="/" onClick={handleHomeClick} className="text-gray-700 font-semibold hover:text-blue-500  text-lg md:text-base mb-2">Home</Link>
        <Link to="/sobre" className="text-gray-700 font-semibold hover:text-blue-500 text-lg md:text-base mb-2">Sobre</Link>
        <Link to="/trabalhos" className="text-gray-700 font-semibold hover:text-blue-500 text-lg md:text-base mb-2">Trabalhos</Link>
        <a href="/contato" onClick={handleContatoClick} className="text-gray-700 font-semibold hover:text-blue-500 text-lg md:text-base">Contato</a>
      </motion.div>

    </nav>
  );
}

export default Navbar;
