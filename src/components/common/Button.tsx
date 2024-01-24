'use client';

import { ButtonHTMLAttributes } from 'react';
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  actionsNames?: {
    firstAction: string;
    secondaryAction: string;
  };
  /**
   * Indica se o formulário está atualmente sendo enviado.
   * Quando true, o botão será desativado e exibirá um texto relacionado à ação de envio.
   * O Uso do atributo actionsNames é opcional
   * @description Booleano indicando se o formulário está sendo enviado.
   * @default false
   * @example
   * Use on Form
   * import { useForm } from 'react-hook-form';
   * const {formState: { isSubmitting }} = useForm()
   *
   * Use Attribute on Button
   * <Button
            isSubmitting={isSubmitting}
            actionsNames={{
              firstAction: 'Enviar',
              secondaryAction: 'Enviando...'
            }}
          />}
   */
  isSubmitting: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  actionsNames = { firstAction: 'Enviar', secondaryAction: 'Enviando...' },
  isSubmitting = false,
  ...props
}) => {
  const { firstAction, secondaryAction } = actionsNames;
  return (
    <div className={`${isSubmitting && 'opacity-50'}`}>
      <button
        type="submit"
        name="btnSend"
        id="btnSend"
        disabled={isSubmitting}
        className={`${
          props.className
            ? props.className
            : 'bg-green-900 text-white py-1 px-2 focus:outline-none focus:shadow-outline z-5'
        }`}
        {...props}
      >
        <span className="text-white">
          {isSubmitting ? secondaryAction : firstAction}
        </span>
      </button>
    </div>
  );
};
