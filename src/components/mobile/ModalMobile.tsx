import Link from 'next/link';

interface ModalMobileProps {
  isOpen: boolean;
}

export const ModalMobile = ({ isOpen }: ModalMobileProps) => {
  return (
    <nav
      className={`class-navbar-modal ${
        isOpen ? 'class-activate' : 'class-disable'
      }`}
    >
      <ul>
        <li>
          <Link href="/">
            <p>Início</p>
          </Link>
        </li>
        <li>
          <Link href="/Sobre">
            <p>Sobre</p>
          </Link>
        </li>
        <li>
          <Link href="/Cirurgias">
            <p>Cirurgias</p>
          </Link>
        </li>
        <li>
          <Link href="/Laser">
            <p>Laser</p>
          </Link>
        </li>
        <li>
          <Link href="/Aesthetics">
            <p>Estética</p>
          </Link>
        </li>
        <li>
          <Link href="/Videos">
            <p>Vídeos</p>
          </Link>
        </li>
        <li>
          <Link href="/Contato">
            <p>Contato</p>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
