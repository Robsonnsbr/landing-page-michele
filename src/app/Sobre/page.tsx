import React from 'react';
import { SectionInfo } from 'src/components/sections/sobre';

function Sobre() {
  return (
    <main className="class-Main">
      <div className="grid grid-auto-rows-auto gap-4 pt-14">
        <section>
          <SectionInfo />
        </section>
      </div>
    </main>
  );
}

export default Sobre;
