import { useRef } from 'react';
import { motion } from 'framer-motion';
import Contato from "./Components/Contato";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

function App() {
  const contatoRef = useRef<HTMLDivElement>(null);

  return (
    <div className="flex flex-col items-center justify-center bg-gray-200 min-h-screen">
      {/* Seção de Destaque */}
      <div className='flex items-center justify-center h-[100vh]'>
        <motion.div 
          className="rounded-lg bg-gray-100 p-4 max-w-4xl w-full"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className='p-4 text-center'> 
            <motion.h2 
              className="text-2xl mt-10 font-thin flex items-center"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              Mario, O Melhor Programador Freelancer
            </motion.h2>
            <motion.h1 
              className="text-6xl font-bold mb-8 mt-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              Mario Development's
            </motion.h1>
            <motion.h2 
              className="ml-5 text-3xl font-semibold font-serif flex items-center"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              Criando Websites <FontAwesomeIcon icon={faArrowDown} className="ml-2" />
            </motion.h2>
            <motion.h2 
              className="ml-5 text-3xl font-semibold font-serif flex items-center"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.5, duration: 0.5 }}
            >
              Impactantes e que 
            </motion.h2>
            <motion.h2 
              className="ml-5 mb-4 text-3xl font-semibold font-serif flex items-center"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2, duration: 0.5 }}
            >
              geram Resultados
            </motion.h2>
          </div>
        </motion.div>
      </div>

      {/* Seção de Serviços */}
      <div className="bg-gray-300 py-20 w-full">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-center">Nossos Serviços</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Web Design</h3>
              <p className="text-gray-700">
                Criamos designs modernos e responsivos para seu site, garantindo uma experiência de usuário excepcional.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Desenvolvimento Web</h3>
              <p className="text-gray-700">
                Desenvolvemos websites customizados usando as tecnologias mais recentes para atender às suas necessidades específicas.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Seção de Portfolio */}
      <div className="bg-gray-100 py-20 w-full">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-center">Nosso Portfolio</h2>
          {/* Aqui você pode adicionar o conteúdo do seu portfolio, como cards de projetos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Exemplo de card de projeto */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src="/images/project1.jpg" alt="Projeto 1" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Nome do Projeto</h3>
                <p className="text-gray-700">
                  Breve descrição do projeto. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <a href="#" className="block text-blue-500 mt-4">Ver mais</a>
              </div>
            </div>
            {/* Adicione mais cards de projeto conforme necessário */}
          </div>
        </div>
      </div>

      {/* Seção de Contato */}
      <div id="contato" ref={contatoRef} className="bg-gray-200 py-20 w-full">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-center">Entre em Contato</h2>
          <Contato />
        </div>
      </div>

      {/* Rodapé */}
      <footer className="bg-gray-300 py-4 text-center w-full">
        <p>&copy; 2024 Mario Development's. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default App;
