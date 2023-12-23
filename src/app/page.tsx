import { Metadata } from 'next';
import Motion from 'src/components/common/Motion';
import { SectionSlider, SectionInfo } from 'src/components/sections/home';

export const metadata: Metadata = {
  title: {
    absolute: 'Início | michelemoccelin'
  }
};

export default function Home() {
  return (
    <Motion>
      <main className="class-Main">
        <h5 className="text-2xl text-thirdColor pt-4 px-1 sm:px-0">
          Sua melhor aparência faz você se sentir bem
        </h5>
        <div className="grid grid-auto-rows-auto gap-8 pt-7">
          <section>
            <div>
              <SectionSlider />
            </div>
          </section>
          <section>
            <SectionInfo />
          </section>
        </div>
      </main>
    </Motion>
  );
}
