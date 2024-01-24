'use client';

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from './Button';
import { RiSendPlane2Fill } from 'react-icons/ri';

const schema = z.object({
  name: z.string().min(3, 'nome inválido!'),
  email: z.string().email('email inválido!'),
  subject: z.string().min(10, 'assunto inválido!'),
  msg: z.string().min(15, 'mensagem inválida!')
});

export const FormPlain = () => {
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

  //TODO: Apagar essa function when the  send is ready
  const simulateDelayedRequest = async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('Simulated request completed');
        resolve('success');
        reset();
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
          <RiSendPlane2Fill
            size={40}
            className="absolute top-1/3 left-1/3 transform -translate-y-1/4 -translate-x-1/4 animate-ping"
          />
        )}
        <form
          onSubmit={handleSubmit(handleSubmitForm)}
          className={`${isSubmitting && 'opacity-50'}`}
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
          <div className="flex items-center justify-end">
            <Button isSubmitting={isSubmitting} />
          </div>
        </form>
      </div>
    </>
  );
};
