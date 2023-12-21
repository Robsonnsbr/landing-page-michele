import Link from 'next/link';
import React from 'react';

export const NavBar = () => {
  return (
    <nav className="hidden sm:block m-auto pb-6">
      <ul className="flex-col sm:grid grid-cols-7 gap-2 sm:max-w-xl m-auto">
        <li>
          <Link className="text-base hover:text-blue-400" href="/">
            Início
          </Link>
        </li>
        <li>
          <Link
            className="text-base hover:text-blue-400 whitespace-nowrap"
            href="/Sobre"
          >
            Sobre
          </Link>
        </li>
        <li>
          <Link className="text-base hover:text-blue-400" href="/Cirurgias">
            Cirurgias
          </Link>
        </li>
        <li>
          <Link className="text-base hover:text-blue-400" href="/Laser">
            Laser
          </Link>
        </li>
        <li>
          <Link className="text-base hover:text-blue-400" href="/Aesthetics">
            Estética
          </Link>
        </li>
        <li>
          <Link className="text-base hover:text-blue-400" href="/Videos">
            Videos
          </Link>
        </li>
        <li>
          <Link className="text-base hover:text-blue-400" href="/Contato">
            Contato
          </Link>
        </li>
      </ul>
    </nav>
  );
};
