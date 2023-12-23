import React from 'react';
import Motion from 'src/components/common/Motion';

import { Metadata } from 'next';

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
            <h1>Cirurgias building...</h1>
          </section>
        </div>
      </main>
    </Motion>
  );
}

export default Cirurgias;
