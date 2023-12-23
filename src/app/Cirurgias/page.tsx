import React from 'react';
import Motion from 'src/components/common/Motion';

import { Metadata } from 'next';
import { SectionCirurgias } from 'src/components/sections/Cirurgias';

export const metadata: Metadata = {
  title: {
    absolute: 'Cirurgias | michelemoccelin'
  }
};

function Cirurgias() {
  return (
    <Motion>
      <main className="class-Main">
        <div className="grid grid-auto-rows-auto gap-4  pt-14">
          <section>
            <SectionCirurgias />
          </section>
        </div>
      </main>
    </Motion>
  );
}

export default Cirurgias;
