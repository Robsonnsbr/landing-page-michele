'use client';
import React, { useState } from 'react';
import Image from 'next/image';

import { flagBR, flagEUA, flagSPAN } from '@/assets/utils/flags/index';
// TODO: fix this flag, ela deve aparecer no lugar do nome.
export default function SelectLang() {
  const [language, setLanguage] = useState('pt-BR');

  function showSelected(value: string) {
    setLanguage(value);
  }

  return (
    <div className="grid grid-col-2 md:grid-cols-2 w-full h-12 items-center text-black justify-end gap-1">
      <div className="col-star-1 h-10 md:col-start-3 items-start">
        {language === 'pt-BR' && (
          <Image
            src={flagBR}
            width={52}
            height={36}
            alt="flag brasil"
            style={{ width: '100%', height: '100%' }}
          />
        )}
        {language === 'en' && (
          <Image
            src={flagEUA}
            width={52}
            height={36}
            alt="flag eua"
            style={{ width: '100%', height: '100%' }}
          />
        )}
        {language === 'es' && (
          <Image
            src={flagSPAN}
            width={52}
            height={36}
            alt="flag es"
            style={{ width: '100%', height: '100%' }}
          />
        )}
      </div>
      <select
        id="language"
        className="col-start-2 md:col-start-4 h-10 border rounded-sm md:w-auto"
        value={language}
        onChange={(e) => showSelected(e.target.value)}
      >
        <option value="pt-BR">BRA</option>
        <option value="en">ENG</option>
        <option value="es">ESP</option>
      </select>
    </div>
  );
}
