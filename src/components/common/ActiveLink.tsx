'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

type ActiveLinksProps = {
  href: string;
  className: string;
  children: React.ReactNode;
};

function ActiveLink({ href, className, children }: ActiveLinksProps) {
  const pathName = usePathname();
  const isActive = pathName === href;

  return (
    <Link
      href={href}
      className={`${className} ${isActive && 'text-activeColor font-semibold'}`}
    >
      {children}
    </Link>
  );
}

export default ActiveLink;
