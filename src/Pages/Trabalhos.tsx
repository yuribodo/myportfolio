
import { motion } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
    },
  },
  hover: {
    scale: 1.05,
    boxShadow: '0px 10px 15px rgba(0, 0, 0, 0.1)',
    transition: {
      duration: 0.3,
    },
  },
};

const Trabalhos = () => {
  return (
    <motion.div
      className="max-w-4xl mx-auto px-4 py-8"
      initial="hidden"
      animate="visible"
      variants={cardVariants}
    >
      <motion.h1
        className="text-4xl font-bold mb-8 text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Nossos Trabalhos
      </motion.h1>

      <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Card 1 */}
        <motion.div
          className="bg-white p-6 rounded-lg shadow-lg overflow-hidden"
          variants={cardVariants}
          whileHover="hover"
        >
          <motion.img
            src="/path/to/your/image1.jpg"
            alt="Imagem do Trabalho 1"
            className="w-full h-64 object-cover rounded-lg mb-4"
          />
          <motion.h3 className="text-2xl font-bold mb-2">Nome do Trabalho 1</motion.h3>
          <motion.p className="text-lg mb-4">
            Descrição breve do trabalho 1 realizado, destacando características importantes.
          </motion.p>
          <motion.button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Ver Detalhes
          </motion.button>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          className="bg-white p-6 rounded-lg shadow-lg overflow-hidden"
          variants={cardVariants}
          whileHover="hover"
        >
          <motion.img
            src="/path/to/your/image2.jpg"
            alt="Imagem do Trabalho 2"
            className="w-full h-64 object-cover rounded-lg mb-4"
          />
          <motion.h3 className="text-2xl font-bold mb-2">Nome do Trabalho 2</motion.h3>
          <motion.p className="text-lg mb-4">
            Descrição breve do trabalho 2 realizado, destacando características importantes.
          </motion.p>
          <motion.button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Ver Detalhes
          </motion.button>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          className="bg-white p-6 rounded-lg shadow-lg overflow-hidden"
          variants={cardVariants}
          whileHover="hover"
        >
          <motion.img
            src="/path/to/your/image3.jpg"
            alt="Imagem do Trabalho 3"
            className="w-full h-64 object-cover rounded-lg mb-4"
          />
          <motion.h3 className="text-2xl font-bold mb-2">Nome do Trabalho 3</motion.h3>
          <motion.p className="text-lg mb-4">
            Descrição breve do trabalho 3 realizado, destacando características importantes.
          </motion.p>
          <motion.button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Ver Detalhes
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Trabalhos;
