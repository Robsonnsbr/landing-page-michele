'use client';
import React, { useRef, useEffect, useState } from 'react';
import ActiveLink from '../common/ActiveLink';

export const NavBar = () => {
  const navRef = useRef(null);
  const [isSticky, setSticky] = useState(false);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '-8% 0px 0px 0px',
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
      className={`hidden sm:block sm:sticky sm:m-auto bg-white bg-opacity-75  sm:py-3 top-0 z-30  ${
        isSticky && 'transition-shadow shadow-lg md:max-w-[60%]'
      }`}
    >
      <ul className="flex-col sm:grid grid-cols-7 gap-2 sm:max-w-xl m-auto">
        <li>
          <ActiveLink className="text-base hover:text-activeColor" href="/">
            Início
          </ActiveLink>
        </li>
        <li>
          <ActiveLink
            className="text-base hover:text-activeColor whitespace-nowrap"
            href="/Sobre"
          >
            Sobre
          </ActiveLink>
        </li>
        <li>
          <ActiveLink
            className="text-base hover:text-activeColor"
            href="/Cirurgias"
          >
            Cirurgias
          </ActiveLink>
        </li>
        <li>
          <ActiveLink
            className="text-base hover:text-activeColor"
            href="/Laser"
          >
            Laser
          </ActiveLink>
        </li>
        <li>
          <ActiveLink
            className="text-base hover:text-activeColor"
            href="/Aesthetics"
          >
            Estética
          </ActiveLink>
        </li>
        <li>
          <ActiveLink
            className="text-base hover:text-activeColor"
            href="/Videos"
          >
            Videos
          </ActiveLink>
        </li>
        <li>
          <ActiveLink
            className="text-base hover:text-activeColor"
            href="/Contato"
          >
            Contato
          </ActiveLink>
        </li>
      </ul>
    </nav>
  );
};
