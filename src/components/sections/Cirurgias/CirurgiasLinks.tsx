import Link from 'next/link';

export const CirurgiasLinks = () => {
  return (
    <nav className="">
      <ul className="flex-col sm:grid grid-cols-1 grid-row-12 w-full text-base pt-4 gap-2 font-normal border-2rounded-sm border-secondaryActiveColor">
        <li className=" w-full">
          <Link className=" hover:text-blue-400" href="/">
            Cirurgia da Face
          </Link>
        </li>
        <hr className="h-1 w-[95%] bg-primaryColor"></hr>
        <li className="">
          <Link className=" hover:text-blue-400 " href="/">
            Pálpebra
          </Link>
        </li>
        <hr className="h-1 w-[95%] bg-primaryColor"></hr>
        <li className="">
          <Link className=" hover:text-blue-400" href="/">
            Nariz
          </Link>
        </li>
        <hr className="h-1 w-[95%] bg-primaryColor"></hr>
        <li className="">
          <Link className=" hover:text-blue-400" href="/">
            Orelhas
          </Link>
        </li>
        <hr className="h-1 w-[95%] bg-primaryColor"></hr>
        <li className="">
          <Link className=" hover:text-blue-400" href="/">
            Prótese
          </Link>
        </li>
        <hr className="h-1 w-[95%] bg-primaryColor"></hr>
        <li className="">
          <Link className=" hover:text-blue-400" href="/">
            Erguer os Seios
          </Link>
        </li>
        <hr className="h-1 w-[95%] bg-primaryColor"></hr>
        <li className="">
          <Link className=" hover:text-blue-400" href="/ ">
            Redução dos Seios
          </Link>
        </li>
        <hr className="h-1 w-[95%] bg-primaryColor"></hr>
        <li className="">
          <Link className=" hover:text-blue-400" href="/">
            Lipoaspiração
          </Link>
        </li>
        <hr className="h-1 w-[95%] bg-primaryColor"></hr>
        <li className="">
          <Link className=" hover:text-blue-400" href="/">
            Abdomen
          </Link>
        </li>
        <hr className="h-1 w-[95%] bg-primaryColor"></hr>
        <li className="">
          <Link className=" hover:text-blue-400" href="/">
            Cirurgia íntima
          </Link>
        </li>
        <hr className="h-1 w-[95%] bg-primaryColor"></hr>
        <li className="">
          <Link className=" hover:text-blue-400" href="/">
            Cirurgia pós bariátrica
          </Link>
        </li>
        <hr className="h-1 w-[95%] bg-primaryColor"></hr>
        <li className="">
          <Link className=" hover:text-blue-400" href="/">
            Cirurgias para Homens
          </Link>
        </li>
        <hr className="h-1 w-[95%] bg-primaryColor"></hr>
      </ul>
    </nav>
  );
};
