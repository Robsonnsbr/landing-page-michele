// 'use client';
import { ButtonHTMLAttributes } from 'react';

interface ButtonNavMobileProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isOpen: boolean;
  handleClick: () => void;
}

export const ButtonNavMobile: React.FC<ButtonNavMobileProps> = ({
  children,
  isOpen,
  handleClick,
  ...rest
}: ButtonNavMobileProps) => {
  const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-black transition ease transform duration-300`;

  return (
    <button
      {...rest}
      className="flex sm:hidden relative  flex-col h-12 w-12 border-2 rounded-sm border-black border-opacity-50   bg-black bg-opacity-25 justify-center items-center group z-10"
      onClick={handleClick}
    >
      <div
        className={`${genericHamburgerLine} ${
          isOpen
            ? 'rotate-45 translate-y-3 opacity-50 group-hover:opacity-70'
            : 'opacity-50 group-hover:opacity-70'
        }`}
      />
      <div
        className={`${genericHamburgerLine} ${
          isOpen ? 'opacity-0' : 'opacity-50 group-hover:opacity-70'
        }`}
      />
      <div
        className={`${genericHamburgerLine} ${
          isOpen
            ? '-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-70'
            : 'opacity-50 group-hover:opacity-70'
        }`}
      />
      {children}
    </button>
  );
};
