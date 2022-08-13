import React, { FormEvent, useEffect, useRef } from 'react';
import styles from './form.scss';

interface IFormProps {
  textareaTagProps?: {},
  setFocus?: boolean;
  setAuthorNameByFocus?: boolean;
  authorName?: string;
}

export function Form({ textareaTagProps, setFocus, setAuthorNameByFocus = false, authorName = '' }: IFormProps) {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
  }

  useEffect(() => {
    if (textAreaRef.current) {
      if (setFocus) textAreaRef.current.focus();
      if (setAuthorNameByFocus && authorName !== '') textAreaRef.current.value = authorName;
    }
  }, []);

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <textarea className={styles.input} ref={textAreaRef} {...textareaTagProps} />
      <div className={styles.formFooter}>
        <button type="submit" className={styles.button}>Комментировать</button>
      </div>
    </form>
  );
}
