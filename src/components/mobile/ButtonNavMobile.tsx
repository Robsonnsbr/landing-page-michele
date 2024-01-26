import { ButtonHTMLAttributes } from 'react';
import './style/buttonMobile.css';

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
  return (
    <button
      {...rest}
      className={`class-button-mobile-default bg-opacity-30 group ${
        isOpen ? 'bg-primaryColor' : 'bg-noBlack'
      }`}
      onClick={handleClick}
    >
      <div
        className={`${'class-hamburger-line'} ${
          isOpen && 'class-hamburger-line-rotate'
        }`}
      />
      <div
        className={`${'class-hamburger-line'} ${
          isOpen && 'class-hamburger-line-none'
        }`}
      />
      <div
        className={`${'class-hamburger-line'} ${
          isOpen && 'class-hamburger-line-rotate-negative'
        }`}
      />
      {children}
    </button>
  );
};
