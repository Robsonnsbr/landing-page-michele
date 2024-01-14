import LineTop from '../../common/LineTop';
import Image from 'next/image';
import imagemMichele from 'public/assets/imagens-sobre/imagem-michele.png';

const SectionAbout = () => {
  return (
    <>
      <div className="m-auto pl-2 pr-2 sm:max-w-[80%] md:max-w-[70%]">
        <ul className="flex-col sm:grid grid-cols-2 lg:grid-cols-5 gap-2 sm:gap-8">
          <li className="col-span-2 row-span-1">
            <div className=" w-full h-fit">
              <LineTop styleProps="bg-lineColor" />
              <h1 className="p-2 text-2xl text-left text-secondaryColor">
                Sobre
              </h1>
              <Image
                src={imagemMichele}
                width={500}
                height={500}
                placeholder="blur"
                priority
                style={{ width: '100%', height: '100%' }}
                alt={'imagem-micchele'}
              />
            </div>
          </li>
          <li className="col-span-3 row-span-1">
            <div className="w-full">
              <LineTop />
              <div className="indent-6 text-justify text-base max-w-2xl mx-auto my-4 tracking-normal text-thirdColor">
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
                <p className="pb-2 indent-0">Sinceramente</p>
                <p className="pb-2 indent-0">Dra. Michele Moccelin</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default SectionAbout;
