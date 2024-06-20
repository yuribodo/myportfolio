
import { useRef } from 'react';
import { motion } from 'framer-motion';
import Contato from "./Components/Contato";

function App() {
  const contatoRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <div>
        <motion.div 
          className="rounded bg-gray-100 p-4 mt-4 h-[90vh]"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1 
            className="text-6xl font-bold mb-8 mt-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Mario Development's
          </motion.h1>
          <motion.h2 
            className="ml-5 text-3xl font-semibold font-serif"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            Criando Websites
          </motion.h2>
          <motion.h2 
            className="ml-5 text-3xl font-semibold font-serif"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.5, duration: 0.5 }}
          >
            Impactantes e que 
          </motion.h2>
          <motion.h2 
            className="ml-5 mb-4 text-3xl font-semibold font-serif"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 2, duration: 0.5 }}
          >
            geram Resultados
          </motion.h2>
        </motion.div>
        <div id="contato" ref={contatoRef}>
          <Contato />
        </div>
      </div>
    </>
  );
}

export default App;
