import Link from 'next/link';
import React from 'react';

export const NavBar = () => {
  return (
    <nav className="hidden sm:block m-auto">
      <ul className="flex-col sm:grid grid-cols-7 gap-2 sm:max-w-xl m-auto">
        <li>
          <Link className="text-base hover:text-blue-400" href="/">
            Início
          </Link>
        </li>
        <li>
          <Link
            className="text-base hover:text-blue-400 whitespace-nowrap"
            href="/"
          >
            Sobre
          </Link>
        </li>
        <li>
          <Link className="text-base hover:text-blue-400" href="/">
            Cirurgias
          </Link>
        </li>
        <li>
          <Link className="text-base hover:text-blue-400" href="/">
            Laser
          </Link>
        </li>
        <li>
          <Link className="text-base hover:text-blue-400" href="/">
            Estética
          </Link>
        </li>
        <li>
          <Link className="text-base hover:text-blue-400" href="/">
            Videos
          </Link>
        </li>
        <li>
          <Link className="text-base hover:text-blue-400" href="/">
            Contato
          </Link>
        </li>
      </ul>
    </nav>
  );
};
