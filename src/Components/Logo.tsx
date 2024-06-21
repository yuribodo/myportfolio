
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import logo from '../assets/logo.svg'

const Logo = () => {
  return (
    <motion.div 
      className="fixed top-8 left-10 p-2 rounded-xl bg-white shadow-lg"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Link to="/">
        <img src={logo} alt="Logo" className="h-10 w-auto" /> {/* Ajuste o caminho e tamanho da logo conforme necessário */}
      </Link>
    </motion.div>
  );
}

export default Logo;
