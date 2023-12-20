'use client';
import Image from 'next/image';
import Link from 'next/link';
import logo from 'public/images/logo.png';
import { NavBar } from '../navBar';
// import { MobileContext } from 'src/context/MobileProvider';
// import { useMobile } from 'src/context/MobileProvider';
// import { useContext } from 'react';

export default function Header(props: { className: string }) {
  // const isMobile = useMobile();
  // console.log('isMobile?', isMobile);
  // const { isMobileDevice, setIsMobileDevice } = useContext(MobileContext);

  // const atualizarLayout = () => {
  //   // const isMobileDevice = useMobile();
  //   console.log(
  //     'atualizei!',
  //     isMobileDevice
  //     setIsMobileDevice(!isMobileDevice)
  //   );
  // };

  // console.log(isMobileDevice);

  // window.addEventListener('resize', atualizarLayout);

  return (
    <header className={props.className}>
      <ul className="flex flex-col gap-2 md:gap-0 m-auto sm:max-w-[80%] md:max-w-[70%] pt-8">
        <li>
          <div className="flex justify-center md:justify-end">
            <Link href="/">
              <span className="font-semibold text-lg">
                Ligue: 41-99021-2931
              </span>
            </Link>
          </div>
        </li>
        <li>
          <div className="flex items-center justify-center pb-10">
            <Image
              src={logo}
              width={400}
              height={400}
              style={{ width: '137px' || 'auto', height: '137px' || 'auto' }}
              alt="logo"
              priority
            />
            <div className="text-left">
              <h1 className="text-4xl  font-light text-primaryColor">
                Dra. Michele Moccelin
              </h1>
              <p className="text-secondaryColor pl-1">Cirurgiã Dentista</p>
            </div>
          </div>
        </li>
        <li>
          <NavBar />
        </li>
      </ul>
    </header>
  );
}
