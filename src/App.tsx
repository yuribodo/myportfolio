import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Contato from "./Components/Contato";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faPaintBrush, faCode, faCogs } from '@fortawesome/free-solid-svg-icons';
import { useInView } from 'react-intersection-observer';

function App() {
  const contatoRef = useRef<HTMLDivElement>(null);
  const [destaqueRef, destaqueInView] = useInView({ threshold: 0.2 });
  const [portfolioRef, portfolioInView] = useInView({ threshold: 0.2 });
  const [servicosSectionRef, servicosInView] = useInView({ threshold: 0.1 });
  const [contatoSectionRef, contatoInView] = useInView({ threshold: 0.2 });
  const [slider, setSlider] = useState<Slider | null>(null);
  const [cursorVisible, setCursorVisible] = useState(true);

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
    <div className="flex flex-col items-center justify-center bg-gray-100 min-h-screen">
      {/* Seção de Destaque */}
      <div ref={destaqueRef} className='flex items-center justify-center h-[100vh]'>
        <motion.div 
          className="rounded-lg bg-white p-8 max-w-4xl w-full shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={destaqueInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <div className='p-4 text-center'> 
            <motion.h2 
              className="text-2xl mt-10 font-thin flex items-center text-gray-800"
              initial={{ opacity: 0, x: -50 }}
              animate={destaqueInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              Mario, O Melhor Programador Freelancer
            </motion.h2>
            <motion.h1 
              className="text-6xl font-bold mb-8 mt-10 text-gray-900"
              initial={{ opacity: 0 }}
              animate={destaqueInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              Mario Development's
            </motion.h1>
            <motion.h2 
              className="ml-5 text-3xl font-semibold font-serif flex items-center text-gray-800"
              initial={{ opacity: 0, x: -50 }}
              animate={destaqueInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              Criando Websites <FontAwesomeIcon icon={faArrowDown} className="ml-2" />
            </motion.h2>
            <motion.h2 
              className="ml-5 text-3xl font-semibold font-serif flex items-center text-gray-800 bg-yellow-300 w-[290px]"
              initial={{ opacity: 0, x: -50 }}
              animate={destaqueInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ delay: 1.5, duration: 0.5 }}
            >
              Impactantes e que 
            </motion.h2>
            <motion.h2 
              className="ml-5 mb-4 text-3xl font-semibold font-serif flex items-center text-gray-800 bg-yellow-300 w-[290px]"
              initial={{ opacity: 0, x: -50 }}
              animate={destaqueInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ delay: 2, duration: 0.5 }}
            >
              geram Resultados
              {cursorVisible && <span className="cursor">|</span>}
            </motion.h2>
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
          <h2 className="text-4xl font-bold mb-8 text-center text-gray-900">Nossos Serviços</h2>
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
          <h2 className="text-4xl font-bold mb-8 text-center text-gray-900">Nosso Portfolio</h2>
          <Slider {...settings} ref={(slider) => setSlider(slider)}>
            <div className="p-2">
              <motion.div 
                className="bg-white p-6 rounded-lg shadow-lg overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={portfolioInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
              >
                <img src="portfolio_image_1.jpg" alt="Portfolio Item 1" className="w-full h-48 object-cover mb-4 rounded-md" />
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">Projeto A</h3>
                <p className="text-gray-700">
                  Detalhes do projeto A, mostrando suas principais características e resultados.
                </p>
              </motion.div>
            </div>
            <div className="p-2">
              <motion.div 
                className="bg-white p-6 rounded-lg shadow-lg overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={portfolioInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
              >
                <img src="portfolio_image_2.jpg" alt="Portfolio Item 2" className="w-full h-48 object-cover mb-4 rounded-md" />
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">Projeto B</h3>
                <p className="text-gray-700">
                  Detalhes do projeto B, mostrando suas principais características e resultados.
                </p>
              </motion.div>
            </div>
            <div className="p-2">
              <motion.div 
                className="bg-white p-6 rounded-lg shadow-lg overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={portfolioInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
              >
                <img src="portfolio_image_3.jpg" alt="Portfolio Item 3" className="w-full h-48 object-cover mb-4 rounded-md" />
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">Projeto C</h3>
                <p className="text-gray-700">
                  Detalhes do projeto C, mostrando suas principais características e resultados.
                </p>
              </motion.div>
            </div>
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
