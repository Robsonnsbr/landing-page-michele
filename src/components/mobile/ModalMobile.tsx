import Link from 'next/link';

interface ModalMobileProps {
  isOpen: boolean;
}
const styleNavMobileDisable = `top-0 shadow-md 
        absolute translate-y-14 -translate-x-3
        bg-primaryColor opacity-10 h-0 overflow-hidden
        transition-height duration-300 
        ease-in-out`;

const styleNavMobileActive = `top-0 shadow-md 
        absolute translate-y-14 -translate-x-5 
        bg-primaryColor bg-opacity-50 z-1 
        transition-height duration-300 
        ease-in-out`;

export const ModalMobile = ({ isOpen }: ModalMobileProps) => {
  return (
    <nav className={isOpen ? styleNavMobileActive : styleNavMobileDisable}>
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
