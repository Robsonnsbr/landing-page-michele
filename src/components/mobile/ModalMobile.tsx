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
        <li className="p-1">
          <Link className="text-lg font-semibold hover:text-blue-400" href="/">
            <p>Início</p>
          </Link>
        </li>
        <li className="p-1">
          <Link
            className="text-lg font-semibold hover:text-blue-400 whitespace-nowrap"
            href="/Sobre"
          >
            Sobre
          </Link>
        </li>
        <li className="p-1">
          <Link
            className="text-lg font-semibold hover:text-blue-400"
            href="/Cirurgias"
          >
            Cirurgias
          </Link>
        </li>
        <li className="p-1">
          <Link
            className="text-lg font-semibold hover:text-blue-400"
            href="/Laser"
          >
            Laser
          </Link>
        </li>
        <li className="p-1">
          <Link
            className="text-lg font-semibold hover:text-blue-400"
            href="/Aesthetics"
          >
            Estética
          </Link>
        </li>
        <li className="p-1">
          <Link
            className="text-lg font-semibold hover:text-blue-400"
            href="/Videos"
          >
            Videos
          </Link>
        </li>
        <li className="p-1">
          <Link
            className="text-lg font-semibold hover:text-blue-400"
            href="/Contato"
          >
            Contato
          </Link>
        </li>
      </ul>
    </nav>
  );
};
