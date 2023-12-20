'use client';
import React, { useState } from 'react';
import { ButtonNavMobile } from './ButtonNavMobile';
import Link from 'next/link';

export const NavBarMobile = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex justify-end w-full pr-2 sticky top-0 z-10">
      <ButtonNavMobile isOpen={isOpen} handleClick={handleClick}>
        <div className="absolute translate-y-40 -translate-x-5">
          {isOpen && (
            <ul className="flex-col sm:grid grid-cols-7 w-full text-right">
              <li className="p-1">
                <Link className="text-base hover:text-blue-400" href="/">
                  Início
                </Link>
              </li>
              <li className="p-1">
                <Link
                  className="text-base hover:text-blue-400 whitespace-nowrap"
                  href="/"
                >
                  Sobre
                </Link>
              </li>
              <li className="p-1">
                <Link className="text-base hover:text-blue-400" href="/">
                  Cirurgias
                </Link>
              </li>
              <li className="p-1">
                <Link className="text-base hover:text-blue-400" href="/">
                  Laser
                </Link>
              </li>
              <li className="p-1">
                <Link className="text-base hover:text-blue-400" href="/">
                  Estética
                </Link>
              </li>
              <li className="p-1">
                <Link className="text-base hover:text-blue-400" href="/">
                  Videos
                </Link>
              </li>
              <li className="p-1">
                <Link className="text-base hover:text-blue-400" href="/">
                  Contato
                </Link>
              </li>
            </ul>
          )}
        </div>
      </ButtonNavMobile>
    </nav>
  );
};
