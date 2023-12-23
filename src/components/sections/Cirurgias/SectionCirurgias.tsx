import Line from '../../common/Line';
import Image from 'next/image';
import { cirurgiasOtonto } from '@/assets/imagem-cirurgias/index';
import SectionLinks from './SectionLinks';

const SectionCirurgias = () => {
  return (
    <>
      <div className="m-auto pl-2 pr-2 sm:max-w-[80%] md:max-w-[70%]">
        <ul className="flex-col sm:grid grid-cols-2 lg:grid-cols-6 gap-2 sm:gap-8">
          <li className="col-span-4 row-span-1">
            <div className=" w-full h-fit">
              <Line style="bg-lineColor" />
              <h1 className="p-2 text-2xl text-left text-secondaryColor">
                Cirurgias Odontológicas
              </h1>
              <Image
                src={cirurgiasOtonto}
                width={1280}
                height={720}
                placeholder="blur"
                priority
                style={{ width: '100%', height: '100%' }}
                alt={'imagem-micchele'}
              />
            </div>
          </li>
          <li className="col-span-2 row-span-1">
            <div className="w-full">
              <Line />
              <div className="indent-6 text-justify text-base max-w-2xl mx-auto my-4 tracking-normal text-thirdColor">
                <SectionLinks />
              </div>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default SectionCirurgias;
