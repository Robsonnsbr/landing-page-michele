import Link from 'next/link';
import React from 'react';

function NavBar() {
  return (
    <nav>
      <ul className="flex-col md:grid grid-cols-7 gap-6 w-full">
        <li>
          <Link className=".text-xl hover:text-secondaryColorHover" href="/">
            Início
          </Link>
        </li>
        <li>
          <Link
            className=".text-xl hover:text-secondaryColorHover whitespace-nowrap"
            href="/"
          >
            Sobre
          </Link>
        </li>
        <li>
          <Link className=".text-xl hover:text-secondaryColorHover" href="/">
            Cirurgias
          </Link>
        </li>
        <li>
          <Link className=".text-xl hover:text-secondaryColorHover" href="/">
            Laser
          </Link>
        </li>
        <li>
          <Link className=".text-xl hover:text-secondaryColorHover" href="/">
            Estética
          </Link>
        </li>
        <li>
          <Link className=".text-xl hover:text-secondaryColorHover" href="/">
            Videos
          </Link>
        </li>
        <li>
          <Link className=".text-xl hover:text-secondaryColorHover" href="/">
            Contato
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
