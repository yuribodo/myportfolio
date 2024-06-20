// Components/Contato.tsx


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'; // Se for um envelope sólido

const Contato = () => {
  return (
    <div className="flex justify-center items-center space-x-4">
      {/* Instagram */}
      <a href="https://www.instagram.com/seu-instagram" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
      {/* WhatsApp */}
      <a href="https://api.whatsapp.com/send?phone=seu-numero-de-telefone" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800">
        <FontAwesomeIcon icon={faWhatsapp} size="2x" />
      </a>
      {/* Email */}
      <a href="mailto:seu-email@example.com" className="text-gray-600 hover:text-gray-800">
        <FontAwesomeIcon icon={faEnvelope} size="2x" />
      </a>
    </div>
  );
};

export default Contato;
