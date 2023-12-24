'use client';
import React, { useState } from 'react';

const FormPlain = () => {
  const [dadosForm, setDadosForm] = useState({
    nome: '',
    email: '',
    assunto: '',
    mensagem: ''
  });

  const handleChange = (campo = '', valor = '') => {
    setDadosForm({
      ...dadosForm,
      [campo]: valor
    });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log('Dados do formulário:', dadosForm);
  };

  return (
    <div className="w-full max-w-md mx-auto mb-2">
      <form onSubmit={handleSubmit}>
        <div className="mb-2">
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Nome"
            autoComplete="true"
            className="w-full  p-1 bg-primaryColor text-black"
            onChange={(e) => handleChange('nome', e.target.value)}
          />
        </div>
        <div className="mb-2">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            autoComplete="true"
            className="w-full  p-1 bg-primaryColor text-black"
            onChange={(e) => handleChange('email', e.target.value)}
          />
        </div>
        <div className="mb-2">
          <input
            type="text"
            name="assunto"
            id="assunto"
            placeholder="Assunto"
            className="w-full  p-1 bg-primaryColor text-black"
            onChange={(e) => handleChange('assunto', e.target.value)}
          />
        </div>
        <div>
          <textarea
            placeholder="Mensagem"
            name="mensagem"
            id="mensagem"
            className="w-full text-area h-40 bg-primaryColor text-black p-1"
            onChange={(e) => handleChange('mensagem', e.target.value)}
          />
        </div>
        <div className="flex items-center justify-end">
          <button
            type="submit"
            name="btn"
            id="btn"
            className="bg-green-900 text-white py-1 px-2 focus:outline-none focus:shadow-outline z-5"
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormPlain;
