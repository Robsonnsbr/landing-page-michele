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
  const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-black 
                                transition ease transform duration-300`;

  const styleButton = `
${
  isOpen
    ? `flex sm:hidden shadow-md relative  flex-col h-12 w-12 
border-2 rounded-sm border-secondaryActiveColor border-opacity-100 
bg-primaryColor bg-opacity-50 justify-center items-center group z-10`
    : `flex sm:hidden shadow-md relative  flex-col h-12 w-12 
border-2 rounded-sm border-black border-opacity-30 hover:border-opacity-70
bg-black bg-opacity-25 justify-center items-center group z-10`
}`;

  return (
    <button {...rest} className={styleButton} onClick={handleClick}>
      <div
        className={`${genericHamburgerLine} ${
          isOpen
            ? 'rotate-45 translate-y-3 opacity-30 group-hover:opacity-80 bg-slate-600'
            : 'opacity-30 group-hover:opacity-70'
        }`}
      />
      <div
        className={`${genericHamburgerLine} ${
          isOpen ? 'opacity-0' : 'opacity-30 group-hover:opacity-70'
        }`}
      />
      <div
        className={`${genericHamburgerLine} ${
          isOpen
            ? '-rotate-45 -translate-y-3 opacity-30 group-hover:opacity-70 bg-slate-600'
            : 'opacity-30 group-hover:opacity-80'
        }`}
      />
      {children}
    </button>
  );
};
