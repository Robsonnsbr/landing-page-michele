import { SectionSlider, SectionInfo } from 'src/components/sections/home';
import { NavBarMobile } from 'src/components/navBar';

export default function Home() {
  return (
    <main className="class-Main">
      <NavBarMobile />
      <h5 className="text-2xl text-thirdColor pt-4 px-1 sm:px-0">
        Sua melhor aparência faz você se sentir bem
      </h5>
      <div className="grid grid-auto-rows-auto gap-4 pt-14">
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
  );
}
