'use client';
import React, { useState } from 'react';
import { ButtonNavMobile } from './ButtonNavMobile';
import { ModalMobile } from './ModalMobile';

export const NavBarMobile = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex w-fit p-2 sticky top-0 left-full z-30">
      <ButtonNavMobile isOpen={isOpen} handleClick={handleClick}>
        <ModalMobile isOpen={isOpen} />
      </ButtonNavMobile>
    </nav>
  );
};
