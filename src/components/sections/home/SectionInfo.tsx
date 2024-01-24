import LineTop from '../../common/LineTop';
import { FormPlain } from '../../common/form';
import Image from 'next/image';
import {
  imageInfo1,
  imageInfo2,
  imageInfo3,
  imageInfo4
} from 'public/assets/images-info-home';

const SectionInfo = () => {
  return (
    <>
      <div className="m-auto pl-2 pr-2 sm:max-w-[80%] md:max-w-[70%]">
        <ul className="flex-col sm:grid grid-cols-2 lg:grid-cols-4 grid-rows-2 gap-2 sm:gap-8">
          <li className="col-span-1 row-span-1">
            <div className=" w-full h-fit ">
              <LineTop />
              <p className="p-2 text-thirdColor">Bem-Vindos</p>
              <p className="leading-relaxed text-thirdColor">
                Informações sobre tratamentos ortodônticos, aparelhos,
                alinhadores e muito mais. Opções para realizar seus sonhos de um
                sorriso perfeito, com segurança e qualidade. Proporcionamos uma
                experiência única e agradável, com atendimento diferenciado para
                que aproveite ao máximo e se sinta especial durante todo o
                processo ortodôntico.
              </p>
            </div>
          </li>
          <li className="col-span-1 row-span-1">
            <div className="w-full ">
              <LineTop />
              <p className="p-2">Tratamentos a Laser</p>
              <div className="flex h-64  items-center justify-center m-auto">
                <Image
                  src={imageInfo4}
                  width={700}
                  height={700}
                  placeholder="blur"
                  loading="lazy"
                  alt="imagem tratamento"
                  style={{
                    width: 'auto',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              </div>
            </div>
          </li>
          <li className="col-span-2 row-span-1">
            <div className="w-full ">
              <LineTop />
              <p className="p-2">Cirurgias odontológicas</p>
              <div className="flex h-64 items-center justify-center m-auto">
                <Image
                  src={imageInfo1}
                  width={700}
                  height={700}
                  placeholder="blur"
                  loading="lazy"
                  alt="imagem tratamento"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              </div>
            </div>
          </li>
          <li className="col-span-2 row-span-1">
            <div className="w-full ">
              <LineTop />
              <p className="p-2">Tratamentos Estéticos</p>
              <div className="flex  h-56 items-center justify-center m-auto">
                <Image
                  src={imageInfo3}
                  width={700}
                  height={700}
                  placeholder="blur"
                  loading="lazy"
                  alt="imagem tratamento"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              </div>
            </div>
          </li>
          <li className="col-span-1 row-span-1">
            <div className="w-full ">
              <LineTop />
              <p className="p-2">Atendimento Imparcial</p>
              <div className="flex  h-56 items-center justify-center m-auto">
                <Image
                  src={imageInfo2}
                  width={500}
                  height={500}
                  placeholder="blur"
                  loading="lazy"
                  alt="imagem tratamento"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              </div>
            </div>
          </li>
          <li className="col-span-1 row-span-1">
            <div className="w-full">
              <LineTop />
              <p className="p-2">Contato e dúvidas</p>
              <FormPlain />
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default SectionInfo;
