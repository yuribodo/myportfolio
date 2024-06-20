import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <div className="fixed top-8 left-10 p-2 rounded-xl bg-white shadow-lg">
      <Link to="/">
        <img src="/path/to/logo.png" alt="Logo" className="h-10 w-auto" /> {/* Ajuste o caminho e tamanho da logo conforme necessário */}
      </Link>
    </div>
  );
}

export default Logo;
