'use client';
import Link from 'next/link';
import React, { useRef, useEffect, useState } from 'react';

export const NavBar = () => {
  const navRef = useRef(null);
  const [isSticky, setSticky] = useState(false);

  useEffect(() => {
    const options = {
      root: null, // Usa o viewport como o contêiner de referência
      rootMargin: '-8% 0px 0px 0px', // Quando o topo do elemento passar o topo da viewport
      threshold: 0
    };

    const handleIntersection = (entries: any[]) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting && !isSticky) {
          setSticky(true);
        } else if (entry.isIntersecting && isSticky) {
          setSticky(false);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    if (navRef.current) {
      observer.observe(navRef.current);
    }

    return () => {
      if (navRef.current) {
        observer.unobserve(navRef.current);
      }
    };
  }, [navRef, isSticky]);

  return (
    <nav
      ref={navRef}
      className={`${
        isSticky && 'shadow-lg'
      } hidden sm:block sm:sticky sm:m-auto bg-white bg-opacity-70  sm:py-3 top-0 z-20 `}
    >
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
