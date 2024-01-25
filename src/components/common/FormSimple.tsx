'use client';

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { ButtonSend } from './Button';
import { RiMailSendLine } from 'react-icons/ri';
import { BsCheck2All } from 'react-icons/bs';
import { useState } from 'react';

const schema = z.object({
  name: z
    .string()
    .min(2, 'nome é obrigatório')
    .transform((name) => {
      return name
        .trim()
        .split(' ')
        .map((word) => {
          return word[0].toLocaleUpperCase().concat(word.substring(1));
        })
        .join(' ');
    }),
  email: z
    .string()
    .min(1, 'email é obrigatório')
    .email('Email inválido!')
    .toLowerCase(),
  subject: z.string().min(7, 'assunto inválido!'),
  msg: z.string().min(22, 'mensagem inválida!')
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
          <RiMailSendLine
            size={40}
            color="black"
            className="absolute top-1/3 left-1/2  -translate-x-14 ease-in-out animate-ping z-20"
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
              id="msg"
              placeholder="Mensagem"
              className="w-full p-1 text-area h-40 bg-primaryColor text-black  -mb-2"
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
              <span>Sucesso no envio</span>
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
