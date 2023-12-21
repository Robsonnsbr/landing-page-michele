import Line from '../../common/Line';
import Image from 'next/image';
import imagemMichele from '@/assets/imagens-sobre/imagem-michele.png';

const SectionInfo = () => {
  return (
    <>
      <div className="m-auto pl-2 pr-2 sm:max-w-[80%] md:max-w-[70%]">
        <ul className="flex-col sm:grid grid-cols-2 lg:grid-cols-5 grid-rows-2 gap-2 sm:gap-8">
          <li className="col-span-2 row-span-1">
            <div className=" w-full h-fit">
              <Line style="bg-lineColor" />
              <p className="p-2">Sobre</p>
              <Image
                src={imagemMichele}
                width={500}
                height={500}
                placeholder="blur"
                loading="lazy"
                style={{ width: '100%', height: '100%' }}
                alt={'imagem-michele'}
              />
            </div>
          </li>
          <li className="col-span-3 row-span-1">
            <div className="w-full">
              <Line />
              <div className="text-left max-w-2xl mx-auto my-4">
                <p className="pb-2">
                  Agradeço pelo tempo dedicado a visitar meu site. Quero nesta
                  oportunidade, passar a você algumas informações sobre minha
                  formação e dedicação profissional para que tenha uma melhor
                  compreensão do meu objetivo em oferecer um atendimento
                  individualizado, baseado no respeito e confiança mútua.
                  Entendo que, embora seja uma rotina para mim como
                  profissional, para os meus pacientes a decisão de se submeter
                  a um procedimento, seja ele cirúrgico ou não, é uma etapa
                  muito importante nas suas vidas e que requer o máximo de
                  informação para se sentir confiante suficiente para dar o
                  próximo passo.
                </p>
                <p className="pb-2">
                  Eu quero oferecer sempre o melhor para cada um dos meus
                  pacientes. Quero que entendam o porquê de fazer ou não certo
                  procedimento, mostrando suas indicações, riscos e limitações.
                  Gosto de dar aos meus pacientes aquilo que prezo para mim e
                  para minha família: mimos, conforto, segurança, tranquilidade
                  além de um cuidado especial.
                </p>
                <p className="pb-2">
                  Aguardo seu contato e estarei a disposição para responder
                  qualquer dúvida. Espero poder te ajudar na decisão que está
                  considerando tomar.
                </p>
                <p className="pb-2">Sinceramente</p>
                <p className="pb-2">Dra. Michele Mocellin</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default SectionInfo;
