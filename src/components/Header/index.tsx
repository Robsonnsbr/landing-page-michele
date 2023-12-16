import Image from 'next/image';
import Link from 'next/link';
import logo from 'public/images/logo.png';
import NavBar from '../navBar/NavBar';

export default function Header(props: { className: string }) {
  return (
    <header
      className={`${props.className} flex justify-center bg-slate-400 pt-8
    `}
    >
      <ul className="flex flex-col md:max-w-[80%] md:grid grid-cols-4 grid-rows-4 justify-between content-center">
        <li className="row-span-3 col-span-3">
          <div className="flex items-center justify-center pt-4">
            <Image src={logo} width={137} height={137} alt="logo" />
            <div>
              <h1 className="text-4xl text-center font-light text-primaryColor">
                Dr. Michele Moccelin
              </h1>
              <p className="text-secondaryColor">Cirurgiã Dentista</p>
            </div>
          </div>
        </li>
        <li>
          <div className="flex md:justify-end">
            <Link href="/">
              <span className="font-semibold text-lg">
                {' '}
                Ligue: 41-99021-2931
              </span>
            </Link>
          </div>
        </li>
        <li className="col-span-4 flex items-center justify-center">
          <NavBar />
        </li>
      </ul>
    </header>
  );
}
