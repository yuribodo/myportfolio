// App.tsx

import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Contato from "./Components/Contato";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { useInView } from 'react-intersection-observer';

function App() {
  const contatoRef = useRef<HTMLDivElement>(null);
  const [destaqueRef, destaqueInView] = useInView({ threshold: 0.2 });
  const [portfolioRef, portfolioInView] = useInView({ threshold: 0.2 });
  const [servicosSectionRef, servicosInView] = useInView({ threshold: 0.1 });
  const [contatoSectionRef, contatoInView] = useInView({ threshold: 0.2 });
  const [slider, setSlider] = useState<Slider | null>(null);


  console.log(contatoRef)
  console.log(slider)
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ]
  };

  useEffect(() => {
    if (destaqueInView) {
      // Animação da seção de Destaque
    }
  }, [destaqueInView]);

  useEffect(() => {
    if (portfolioInView) {
      // Animação da seção de Portfolio
    }
  }, [portfolioInView]);

  useEffect(() => {
    if (servicosInView) {
      // Animação da seção de Nossos Serviços
    }
  }, [servicosInView]);

  useEffect(() => {
    if (contatoInView) {
      // Animação da seção de Contato
    }
  }, [contatoInView]);

  return (
    <div className="flex flex-col items-center justify-center bg-gray-200 min-h-screen">
      {/* Seção de Destaque */}
      <div ref={destaqueRef} className='flex items-center justify-center h-[100vh]'>
        <motion.div 
          className="rounded-lg bg-gray-100 p-4 max-w-4xl w-full"
          initial={{ opacity: 0, y: 50 }}
          animate={destaqueInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <div className='p-4 text-center'> 
            <motion.h2 
              className="text-2xl mt-10 font-thin flex items-center"
              initial={{ opacity: 0, x: -50 }}
              animate={destaqueInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              Mario, O Melhor Programador Freelancer
            </motion.h2>
            <motion.h1 
              className="text-6xl font-bold mb-8 mt-10"
              initial={{ opacity: 0 }}
              animate={destaqueInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              Mario Development's
            </motion.h1>
            <motion.h2 
              className="ml-5 text-3xl font-semibold font-serif flex items-center"
              initial={{ opacity: 0, x: -50 }}
              animate={destaqueInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              Criando Websites <FontAwesomeIcon icon={faArrowDown} className="ml-2" />
            </motion.h2>
            <motion.h2 
              className="ml-5 text-3xl font-semibold font-serif flex items-center"
              initial={{ opacity: 0, x: -50 }}
              animate={destaqueInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ delay: 1.5, duration: 0.5 }}
            >
              Impactantes e que 
            </motion.h2>
            <motion.h2 
              className="ml-5 mb-4 text-3xl font-semibold font-serif flex items-center"
              initial={{ opacity: 0, x: -50 }}
              animate={destaqueInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ delay: 2, duration: 0.5 }}
            >
              geram Resultados
            </motion.h2>
          </div>
        </motion.div>
      </div>

      {/* Seção de Nossos Serviços */}
      <motion.div 
        ref={servicosSectionRef}
        className="bg-gray-300 py-20 w-full"
        initial={{ opacity: 0, y: 50 }}
        animate={servicosInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-center">Nossos Serviços</h2>
          <Slider {...settings} ref={(slider) => setSlider(slider)}>
            <div className="p-2">
              <motion.div 
                className="bg-white p-6 rounded-lg shadow-lg overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={servicosInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-2xl font-semibold mb-4">Web Design</h3>
                <p className="text-gray-700">
                  Criamos designs modernos e responsivos para seu site, garantindo uma experiência de usuário excepcional.
                </p>
                <ul className="mt-4 text-gray-700">
                  <li>Criação de layouts atraentes e funcionais</li>
                  <li>Integração com as últimas tendências de UX/UI</li>
                  <li>Otimização para diferentes dispositivos e navegadores</li>
                </ul>
              </motion.div>
            </div>
            <div className="p-2">
              <motion.div 
                className="bg-white p-6 rounded-lg shadow-lg overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={servicosInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-2xl font-semibold mb-4">Desenvolvimento Web</h3>
                <p className="text-gray-700">
                  Desenvolvemos websites customizados usando as tecnologias mais recentes para atender às suas necessidades específicas.
                </p>
                <ul className="mt-4 text-gray-700">
                  <li>Desenvolvimento front-end e back-end</li>
                  <li>Integração de APIs e sistemas de terceiros</li>
                  <li>Implementação de soluções escaláveis e seguras</li>
                </ul>
              </motion.div>
            </div>
            <div className="p-2">
              <motion.div 
                className="bg-white p-6 rounded-lg shadow-lg overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={servicosInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-2xl font-semibold mb-4">Hospedagem</h3>
                <p className="text-gray-700">
                  Oferecemos soluções de hospedagem confiáveis para manter seu site sempre disponível.
                </p>
                <ul className="mt-4 text-gray-700">
                  <li>Hospedagem compartilhada e dedicada</li>
                  <li>Gerenciamento de domínios e DNS</li>
                  <li>Monitoramento contínuo de performance e segurança</li>
                </ul>
              </motion.div>
            </div>
            <div className="p-2">
              <motion.div 
                className="bg-white p-6 rounded-lg shadow-lg overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={servicosInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-2xl font-semibold mb-4">Suporte</h3>
                <p className="text-gray-700">
                  Estamos disponíveis para ajudar a resolver qualquer problema ou dúvida relacionada ao seu site.
                </p>
                <ul className="mt-4 text-gray-700">
                  <li>Suporte técnico especializado e personalizado</li>
                  <li>Manutenção preventiva e correção de bugs</li>
                  <li>Consultoria para otimização de desempenho</li>
                </ul>
              </motion.div>
            </div>
            {/* Adicione mais cards de serviço conforme necessário */}
          </Slider>
        </div>
      </motion.div>

      {/* Seção de Portfolio */}
      <motion.div 
        ref={portfolioRef}
        className="bg-gray-100 py-20 w-full"
        initial={{ opacity: 0, y: 50 }}
        animate={portfolioInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-center">Nosso Portfolio</h2>
          {/* Aqui você pode adicionar o conteúdo do seu portfolio, como cards de projetos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Exemplo de card de projeto */}
            <motion.div 
              className="bg-white rounded-lg shadow-lg overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={portfolioInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
            >
              <img src="/images/project1.jpg" alt="Projeto 1" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Nome do Projeto</h3>
                <p className="text-gray-700">
                  Breve descrição do projeto. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <a href="#" className="block text-blue-500 mt-4">Ver mais</a>
              </div>
            </motion.div>
            {/* Adicione mais cards de projeto conforme necessário */}
            <motion.div 
              className="bg-white rounded-lg shadow-lg overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={portfolioInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
            >
              <img src="/images/project2.jpg" alt="Projeto 2" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Outro Projeto</h3>
                <p className="text-gray-700">
                  Descrição do segundo projeto. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <a href="#" className="block text-blue-500 mt-4">Ver mais</a>
              </div>
            </motion.div>
            <motion.div 
              className="bg-white rounded-lg shadow-lg overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={portfolioInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
            >
              <img src="/images/project3.jpg" alt="Projeto 3" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Mais um Projeto</h3>
                <p className="text-gray-700">
                  Descrição do terceiro projeto. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <a href="#" className="block text-blue-500 mt-4">Ver mais</a>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Seção de Contato */}
      <motion.div 
        ref={contatoSectionRef}
        id="contato"
        className="bg-gray-200 py-20 w-full"
        initial={{ opacity: 0, y: 50 }}
        animate={contatoInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-center">Entre em Contato</h2>
          <Contato />
        </div>
      </motion.div>

      {/* Rodapé */}
      <motion.footer 
        className="bg-gray-300 py-4 text-center w-full"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <p>&copy; 2024 Mario Development's. Todos os direitos reservados.</p>
      </motion.footer>
    </div>
  );
}

export default App;
