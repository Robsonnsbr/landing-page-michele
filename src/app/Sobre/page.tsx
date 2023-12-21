import React from 'react';
import Motion from 'src/components/common/Motion';
import { SectionInfo } from 'src/components/sections/sobre';

function Sobre() {
  return (
    <Motion>
      <main className="class-Main">
        <div className="grid grid-auto-rows-auto gap-4  pt-14">
          <section>
            <SectionInfo />
          </section>
        </div>
      </main>
    </Motion>
  );
}

export default Sobre;
