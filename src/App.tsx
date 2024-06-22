import {  useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Contato from "./Components/Contato";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faPaintBrush, faCode, faCogs } from '@fortawesome/free-solid-svg-icons';
import { useInView } from 'react-intersection-observer';

function App() {
  
  const [destaqueRef, destaqueInView] = useInView({ threshold: 0.2 });
  const [portfolioRef, portfolioInView] = useInView({ threshold: 0.2 });
  const [servicosSectionRef, servicosInView] = useInView({ threshold: 0.1 });
  const [contatoSectionRef, contatoInView] = useInView({ threshold: 0.2 });
  const [slider, setSlider] = useState<Slider | null>(null);
  const [cursorVisible, setCursorVisible] = useState(true);
  var text = 'w'

  if ('1' == text) {
    console.log(slider)
  }
  
  const projetos = [
    {
      nome: 'Projeto de Website Corporativo',
      descricao: 'Desenvolvimento completo de um website para uma empresa de tecnologia.',
      imagem: '/images/projeto1.jpg',
    },
    {
      nome: 'Redesign de Website Institucional',
      descricao: 'Reformulação visual e estratégica de um website institucional para melhorar a usabilidade.',
      imagem: '/images/projeto2.jpg',
    },
    {
      nome: 'Website Responsivo para E-commerce',
      descricao: 'Criação de um website otimizado para dispositivos móveis para uma loja virtual.',
      imagem: '/images/projeto3.jpg',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);

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

  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 min-h-screen">
      {/* Seção de Destaque */}
      <div id="destaque" ref={destaqueRef} className='flex items-center justify-center md:min-h-[calc(100vh - 64px)] h-screen px-4 sm:px-6 lg:px-8'>
          <motion.div 
            className="rounded-lg bg-white p-4 md:p-8 max-w-screen-xl w-full shadow-lg" // Aumentei max-w-screen-xl para aumentar a largura e torná-la mais retangular
            initial={{ opacity: 0, y: 50 }}
            animate={destaqueInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
          >
            <div className='text-center'> 
              <motion.h2 
                className="text-lg md:text-2xl mt-6 md:mt-10 font-thin flex items-center justify-center text-gray-800"
                initial={{ opacity: 0, x: -50 }}
                animate={destaqueInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ delay: 1, duration: 0.5 }}
              >
                Mario, O Melhor Programador Freelancer
              </motion.h2>
              <motion.h1 
                className="text-xl md:text-4xl font-bold mb-4 md:mb-8 mt-4 md:mt-10 text-gray-900"
                initial={{ opacity: 0 }}
                animate={destaqueInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.5, duration: 1 }}
              >
                Mario Development's
              </motion.h1>
              <motion.h2 
                className="text-base md:text-lg font-semibold font-serif flex items-center justify-start text-gray-800 mt-4 md:mt-6 ml-4 md:ml-0"
                initial={{ opacity: 0 }}
                animate={destaqueInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.5, duration: 1 }}
              >
                Criando Websites <FontAwesomeIcon icon={faArrowDown} className="ml-1 md:ml-2" />
              </motion.h2>
              <div className='bg-yellow-300 max-w-max p-2 md:p-4 mt-2 sm:ml-0'>
          <motion.h2 
            className="text-base md:text-lg font-semibold italic font-serif flex items-center justify-center text-gray-800 relative"
            initial={{ opacity: 0, x: -50 }}
            animate={destaqueInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            Impactantes e que
          </motion.h2>
          <div className="relative">
            <motion.h2 
              className="text-base md:text-lg font-semibold italic font-serif flex items-center justify-center text-gray-800"
              initial={{ opacity: 0, x: -50 }}
              animate={destaqueInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              Geram Resultados 
            </motion.h2>
            {cursorVisible && (
              <span className="absolute top-0 right-0 mt-0 ml-1 md:ml-2 cursor">|</span>
            )}
          </div>
        </div>
            </div>
          </motion.div>
        </div>




      {/* Seção de Nossos Serviços */}
      <motion.div 
        ref={servicosSectionRef}
        className="bg-gray-200 py-20 w-full"
        initial={{ opacity: 0, y: 50 }}
        animate={servicosInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-center text-gray-900">Serviços</h2>
          <Slider {...settings} ref={(slider) => setSlider(slider)}>
            <div className="p-2">
              <motion.div 
                className="bg-white p-6 rounded-lg shadow-lg overflow-hidden text-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={servicosInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
              >
                <FontAwesomeIcon icon={faPaintBrush} className="text-5xl text-yellow-500 mb-4" />
                <h3 className="text-2xl font-semibold mb-2 text-gray-900">Web Design</h3>
                <p className="text-gray-700">
                  Designs modernos e responsivos para seu site.
                </p>
              </motion.div>
            </div>
            <div className="p-2">
              <motion.div 
                className="bg-white p-6 rounded-lg shadow-lg overflow-hidden text-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={servicosInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
              >
                <FontAwesomeIcon icon={faCode} className="text-5xl text-blue-500 mb-4" />
                <h3 className="text-2xl font-semibold mb-2 text-gray-900">Desenvolvimento Web</h3>
                <p className="text-gray-700">
                  Websites customizados com as tecnologias mais recentes.
                </p>
              </motion.div>
            </div>
            <div className="p-2">
              <motion.div 
                className="bg-white p-6 rounded-lg shadow-lg overflow-hidden text-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={servicosInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
              >
                <FontAwesomeIcon icon={faCogs} className="text-5xl text-green-500 mb-4" />
                <h3 className="text-2xl font-semibold mb-2 text-gray-900">Consultoria Técnica</h3>
                <p className="text-gray-700">
                  Consultoria especializada para decisões tecnológicas.
                </p>
              </motion.div>
            </div>
          </Slider>
        </div>
      </motion.div>

      {/* Seção de Nosso Portfolio */}
      <motion.div 
        ref={portfolioRef}
        className="bg-gray-200 py-20 w-full"
        initial={{ opacity: 0, y: 50 }}
        animate={portfolioInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-center text-gray-900">Portfolio</h2>
          <Slider {...settings} ref={(slider) => setSlider(slider)}>
            {projetos.map((projeto, index) => (
              <div className="p-2" key={index}>
                <motion.div 
                  className="bg-white p-6 rounded-lg shadow-lg overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={portfolioInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                >
                  <img src={projeto.imagem} alt={`Portfolio Item ${index + 1}`} className="w-full h-48 object-cover mb-4 rounded-md" />
                  <h3 className="text-2xl font-semibold mb-4 text-gray-900">{projeto.nome}</h3>
                  <p className="text-gray-700">
                    {projeto.descricao}
                  </p>
                </motion.div>
              </div>
            ))}
          </Slider>
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
          <h2 className="text-4xl font-bold mb-8 text-center text-gray-900">Entre em Contato</h2>
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
        <p className="text-gray-800">&copy; 2024 Mario Development's. Todos os direitos reservados.</p>
      </motion.footer>
    </div>
  );
}

export default App;
