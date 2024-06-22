import { motion } from 'framer-motion';

const serviceVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
    },
  },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.3,
    },
  },
};

const Sobre = () => {
  return (
    <motion.div
      className="max-w-4xl mx-auto px-4 py-8"
      initial="hidden"
      animate="visible"
      variants={serviceVariants}
    >
      <motion.h1
        className="text-4xl font-bold mb-8 text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Sobre
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Serviço 1: Web Design */}
        <motion.div
          className="bg-white p-6 rounded-lg shadow-lg overflow-hidden"
          variants={serviceVariants}
          whileHover="hover"
        >
          <motion.h3 className="text-2xl font-bold mb-4">Web Design</motion.h3>
          <motion.p className="text-lg mb-4">
            Criamos designs modernos e responsivos para seu site, garantindo uma experiência de usuário excepcional.
          </motion.p>
          <motion.ul className="text-gray-700">
            <motion.li
              className="flex items-center mb-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.4 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2 text-green-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Layouts atraentes e funcionais
            </motion.li>
            <motion.li
              className="flex items-center mb-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7, duration: 0.4 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2 text-green-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Integração com tendências UX/UI
            </motion.li>
            <motion.li
              className="flex items-center mb-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.4 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2 text-green-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Otimização multi-dispositivo
            </motion.li>
          </motion.ul>
        </motion.div>

        {/* Serviço 2: Desenvolvimento Web */}
        <motion.div
          className="bg-white p-6 rounded-lg shadow-lg overflow-hidden"
          variants={serviceVariants}
          whileHover="hover"
        >
          <motion.h3 className="text-2xl font-bold mb-4">Desenvolvimento Web</motion.h3>
          <motion.p className="text-lg mb-4">
            Desenvolvemos websites customizados usando as tecnologias mais recentes para atender às suas necessidades específicas.
          </motion.p>
          <motion.ul className="text-gray-700">
            <motion.li
              className="flex items-center mb-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.4 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2 text-green-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Front-end e back-end
            </motion.li>
            <motion.li
              className="flex items-center mb-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7, duration: 0.4 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2 text-green-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Integração de APIs e sistemas
            </motion.li>
            <motion.li
              className="flex items-center mb-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.4 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2 text-green-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Soluções escaláveis e seguras
            </motion.li>
          </motion.ul>
        </motion.div>

        {/* Serviço 3: Hospedagem */}
        <motion.div
          className="bg-white p-6 rounded-lg shadow-lg overflow-hidden"
          variants={serviceVariants}
          whileHover="hover"
        >
          <motion.h3 className="text-2xl font-bold mb-4">Hospedagem</motion.h3>
          <motion.p className="text-lg mb-4">
            Oferecemos soluções de hospedagem confiáveis para manter seu site sempre disponível.
          </motion.p>
          <motion.ul className="text-gray-700">
            <motion.li
              className="flex items-center mb-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.4 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2 text-green-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Hospedagem compartilhada e dedicada
            </motion.li>
            <motion.li
              className="flex items-center mb-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7, duration: 0.4 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2 text-green-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Gerenciamento de domínios e DNS
            </motion.li>
            <motion.li
              className="flex items-center mb-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.4 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2 text-green-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Monitoramento de performance e segurança
            </motion.li>
          </motion.ul>
        </motion.div>

        {/* Serviço 4: Suporte */}
        <motion.div
          className="bg-white p-6 rounded-lg shadow-lg overflow-hidden"
          variants={serviceVariants}
          whileHover="hover"
        >
          <motion.h3 className="text-2xl font-bold mb-4">Suporte</motion.h3>
          <motion.p className="text-lg mb-4">
            Estamos disponíveis para ajudar a resolver qualquer problema ou dúvida relacionada ao seu site.
          </motion.p>
          <motion.ul className="text-gray-700">
            <motion.li
              className="flex items-center mb-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.4 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2 text-green-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Suporte técnico especializado
            </motion.li>
            <motion.li
              className="flex items-center mb-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7, duration: 0.4 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2 text-green-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Manutenção e correção de bugs
            </motion.li>
            <motion.li
              className="flex items-center mb-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.4 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2 text-green-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Consultoria para otimização
            </motion.li>
          </motion.ul>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Sobre;
