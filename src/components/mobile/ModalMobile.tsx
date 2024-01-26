import Link from 'next/link';

interface ModalMobileProps {
  isOpen: boolean;
}
const styleNavMobileDisable = `absolute translate-y-14 -translate-x-3 opacity-0 h-0 overflow-hidden`;
const styleNavMobileActive = `absolute translate-y-14 -translate-x-4 bg-primaryColor bg-opacity-50 opacity-100`;

export const ModalMobile = ({ isOpen }: ModalMobileProps) => {
  return (
    <nav
      className={`top-0 shadow-md transition-all duration-500 ease-in-out ${
        isOpen ? styleNavMobileActive : styleNavMobileDisable
      }`}
    >
      <ul className="flex-col sm:grid grid-cols-7 w-full text-center border-2rounded-sm border-secondaryActiveColor">
        <li>
          <Link className="text-lg font-semibold hover:text-blue-400" href="/">
            <p className="p-1">Início</p>
          </Link>
        </li>
        <li>
          <Link
            className="text-lg font-semibold hover:text-blue-400 whitespace-nowrap"
            href="/Sobre"
          >
            <p className="p-1">Sobre</p>
          </Link>
        </li>
        <li>
          <Link
            className="text-lg font-semibold hover:text-blue-400"
            href="/Cirurgias"
          >
            <p className="p-1">Cirurgias</p>
          </Link>
        </li>
        <li>
          <Link
            className="text-lg font-semibold hover:text-blue-400"
            href="/Laser"
          >
            <p className="p-1">Laser</p>
          </Link>
        </li>
        <li>
          <Link
            className="text-lg font-semibold hover:text-blue-400"
            href="/Aesthetics"
          >
            <p className="p-1">Estética</p>
          </Link>
        </li>
        <li>
          <Link
            className="text-lg font-semibold hover:text-blue-400"
            href="/Videos"
          >
            <p className="p-1">Vídeos</p>
          </Link>
        </li>
        <li>
          <Link
            className="text-lg font-semibold hover:text-blue-400"
            href="/Contato"
          >
            <p className="p-1">Contato</p>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
