import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleContatoClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    navigate("/");
    setTimeout(() => {
      const contatoSection = document.querySelector("#contato");
      contatoSection?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <nav className="fixed top-8 right-10 flex space-x-4 p-2 bg-white shadow-lg rounded-lg">
      <Link to="/" className="text-gray-700 font-semibold hover:text-blue-500">Home</Link>
      <Link to="/sobre" className="text-gray-700 font-semibold hover:text-blue-500">Sobre</Link>
      <Link to="/trabalhos" className="text-gray-700 font-semibold hover:text-blue-500">Trabalhos</Link>
      <a href="/contato" onClick={handleContatoClick} className="text-gray-700 font-semibold hover:text-blue-500">Entre em Contato</a>
    </nav>
  );
}

export default Navbar;
