import { Metadata } from 'next';
import React from 'react';
import Motion from 'src/components/common/Motion';
import { SectionAbout, SectionInfo } from 'src/components/sections/sobre';

export const metadata: Metadata = {
  title: {
    absolute: 'Sobre | michelemoccelin'
  }
};

function Sobre() {
  return (
    <Motion>
      <main className="class-Main">
        <div className="grid grid-auto-rows-auto gap-4  pt-10">
          <section>
            <SectionAbout />
          </section>
          <section>
            <SectionInfo />
          </section>
        </div>
      </main>
    </Motion>
  );
}

export default Sobre;
