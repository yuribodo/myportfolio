import { motion } from 'framer-motion';
import image1 from '../assets/projeto1.jpg'
import image2 from '../assets/projeto2.jpg'
import image3 from '../assets/projeto3.jpg'

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
  const projetos = [
    {
      nome: 'Desenvolvimento de uma Newsletter',
      descricao: 'Desenvolvimento completo de um website para envio de mensagens por email.',
      imagem: image1,
    },
    {
      nome: 'Desenvolvimento de Site para Restaurante',
      descricao: 'Desenvolvimento de site para Restaurante que mostra o Menu para os Cliente e da o contato do estabelecimento par comprarem',
      imagem: image2,
    },
    {
      nome: 'Desenvolvimento de Site para Academia',
      descricao: 'Criação de um website otimizado para apresentar a academia para os clientes interrados, explicando seus planos e preços.',
      imagem: image3,
    },
  ];

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
        Projetos de Website
      </motion.h1>

      <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projetos.map((projeto, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden transition duration-300 ease-in-out transform hover:scale-105"
            variants={cardVariants}
            whileHover="hover"
          >
            <motion.img
              src={projeto.imagem}
              alt={`Imagem do ${projeto.nome}`}
              className="w-full h-64 object-cover rounded-t-lg"
            />
            <div className="p-6">
              <motion.h3 className="text-xl font-bold mb-2">{projeto.nome}</motion.h3>
              <motion.p className="text-base mb-4">{projeto.descricao}</motion.p>
              
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Trabalhos;
