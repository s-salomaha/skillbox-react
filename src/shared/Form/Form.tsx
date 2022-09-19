import React, { useEffect } from 'react';
import styles from './form.scss';
import { useForm } from 'react-hook-form';

interface IFormProps {
  textareaTagProps?: {},
  setFocusOnField?: boolean;
  setAuthorNameByFocus?: boolean;
  authorName?: string;
  handleChange?: any;
}

export function Form({ textareaTagProps, setFocusOnField, setAuthorNameByFocus = false, authorName = '', handleChange = null }: IFormProps) {
  const { register, formState: { errors }, handleSubmit, setFocus, setValue } = useForm({
    reValidateMode: 'onChange'
  });

  function onSubmit() {
    alert('Form submitted!');
  }

  useEffect(() => {
    if (setFocusOnField) setFocus('message');
    if (setAuthorNameByFocus && authorName !== '') setValue('message', authorName);
  }, [setFocus]);

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <textarea
        className={styles.input}
        {...register('message', {
          required: 'This field is required!',
          minLength: {
            value: 3,
            message: 'Type more than 3 symbols',
          },
          onChange: (e) => {
            if (!handleChange) return;
            handleChange(e);
          }
        })}
        aria-invalid={errors.message ? 'true' : 'false'}
        {...textareaTagProps}
      />

      {errors.message && <p>{errors.message.message}</p>}

      <div className={styles.formFooter}>
        <button type="submit" className={styles.button}>Comment</button>
      </div>
    </form>
  );
}
