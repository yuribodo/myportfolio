import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import logo from '../assets/logo.svg';

const Logo = () => {
  return (
    <motion.div 
      className="fixed top-4 left-4 z-50"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Link to="/">
        <img src={logo} alt="Logo" className="h-8 md:h-10 w-auto" />
      </Link>
    </motion.div>
  );
}

export default Logo;
