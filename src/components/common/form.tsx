'use client';

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const schema = z.object({
  name: z.string().min(3, 'nome inválido!'),
  email: z.string().email('email inválido!'),
  subject: z.string().min(10, 'assunto inválido!'),
  msg: z.string().min(15, 'mensagem inválida!')
});

const handleSubmitForm = (data: any) => {
  console.log(data, 'criar request/post para enviar');
};

export const FormPlain = () => {
  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm({
    mode: 'all',
    criteriaMode: 'all',
    resolver: zodResolver(schema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      msg: ''
    }
  });
  return (
    <div className="w-full max-w-md mx-auto mb-2">
      <form onSubmit={handleSubmit(handleSubmitForm)}>
        <div className="mb-2">
          <input
            {...register('name')}
            type="text"
            name="name"
            id="name"
            placeholder="Nome"
            autoComplete="true"
            className="w-full  p-1 bg-primaryColor text-black"
          />
          {errors.name && (
            <p className="text-errorColor text-sm">{errors.name.message}</p>
          )}
        </div>
        <div className="mb-2">
          <input
            {...register('email')}
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            autoComplete="true"
            className="w-full  p-1 bg-primaryColor text-black"
          />
          {errors.email && (
            <p className="text-errorColor text-sm">{errors.email.message}</p>
          )}
        </div>
        <div className="mb-2">
          <input
            {...register('subject')}
            type="text"
            name="subject"
            id="subject"
            placeholder="Assunto"
            className="w-full  p-1 bg-primaryColor text-black"
          />
          {errors.subject && (
            <p className="text-errorColor text-sm">{errors.subject.message}</p>
          )}
        </div>
        <div className="mb-2">
          <textarea
            {...register('msg')}
            name="msg"
            id="msg"
            placeholder="Mensagem"
            className="w-full text-area h-40 bg-primaryColor text-black -mb-2"
          />
          {errors.msg && (
            <p className="text-errorColor text-sm">{errors.msg.message}</p>
          )}
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
