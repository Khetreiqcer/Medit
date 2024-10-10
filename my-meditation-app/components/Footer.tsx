import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="dark:bg-gray-800 bg-gray-200 text-white py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm mb-4 md:mb-0">
          © 2024 Meditação Moderna. Todos os direitos reservados.
        </p>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-gray-400">
            <FaFacebookF />
          </a>
          <a href="#" className="hover:text-gray-400">
            <FaInstagram />
          </a>
          <a href="#" className="hover:text-gray-400">
            <FaTwitter />
          </a>
        </div>
      </div>
    </footer>
  );
}
