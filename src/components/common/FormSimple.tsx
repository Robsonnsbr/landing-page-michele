'use client';

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { ButtonSend } from './Button';
import { MdSendToMobile } from 'react-icons/md';
import { BsCheck2All } from 'react-icons/bs';
import { useState } from 'react';

const schema = z.object({
  name: z.string().min(3, 'nome inválido!'),
  email: z.string().email('email inválido!'),
  subject: z.string().min(10, 'assunto inválido!'),
  msg: z.string().min(15, 'mensagem inválida!')
});

//TODO: Add evento para press key == 'enter'
// const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
//   if (event.key === 'Enter') {
//     // Adicione aqui a lógica que deseja executar ao pressionar Enter
//     console.log('Enter key pressed');
//   }
// };

export const FormSimple = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    reset
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
  const [isWasSend, setIsWasSend] = useState(false);

  //TODO: Apagar essa function when the  send is ready
  const simulateDelayedRequest = async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('Simulated request completed');
        resolve('success');
        reset();
        setIsWasSend(true);
        setTimeout(() => {
          setIsWasSend(false);
        }, 5000);
      }, 3000);
    });
  };

  const handleSubmitForm = async (data: any) => {
    console.log('Submitting form data...', data);
    //TODO: Trocar a funcao de simulate para send()
    await simulateDelayedRequest();
    console.log('Request completed.');
  };
  return (
    <>
      <div className={`w-full max-w-md mx-auto mb-2 relative`}>
        {isSubmitting && (
          <MdSendToMobile
            size={40}
            color="white"
            className="absolute top-24 left-24  -translate-x-5 ease-in-out animate-ping z-20"
          />
        )}
        <form
          onSubmit={handleSubmit(handleSubmitForm)}
          className={`transition-opacity ease-in-out duration-500 ${
            isSubmitting ? 'opacity-50' : 'opacity-100'
          }`}
        >
          <div className="mb-2">
            <input
              {...register('name')}
              type="text"
              name="name"
              id="name"
              placeholder="Nome"
              autoComplete="true"
              className="w-full  p-1 bg-primaryColor text-black"
              disabled={isSubmitting}
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
              disabled={isSubmitting}
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
              disabled={isSubmitting}
            />
            {errors.subject && (
              <p className="text-errorColor text-sm">
                {errors.subject.message}
              </p>
            )}
          </div>
          <div className="mb-2">
            <textarea
              {...register('msg')}
              name="msg"
              id="msg"
              placeholder="Mensagem"
              className="w-full text-area h-40 bg-primaryColor text-black -mb-2"
              disabled={isSubmitting}
            />
            {errors.msg && (
              <p className="text-errorColor text-sm">{errors.msg.message}</p>
            )}
          </div>
          <div className="flex items-center justify-end relative">
            <div
              className={`text-green-600 absolute top-0 left-0 flex items-center gap-1 transition-opacity ease-in-out duration-500 ${
                isWasSend ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <span>Enviado!</span>
              <BsCheck2All
                size={20}
                color="green"
                style={{ verticalAlign: 'middle' }}
              />
            </div>
            <ButtonSend isSubmitting={isSubmitting} />
          </div>
        </form>
      </div>
    </>
  );
};
