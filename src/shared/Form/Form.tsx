import React, {ChangeEvent, FormEvent, useEffect, useRef, useState} from 'react';
import styles from './form.scss';

interface IFormProps {
  textareaTagProps?: {},
  setFocus?: boolean;
  setAuthorNameByFocus?: boolean;
  authorName?: string;
}

export function Form({ textareaTagProps, setFocus, setAuthorNameByFocus = false, authorName = '' }: IFormProps) {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const [value, setValue] = useState('');
  const [formTouched, setFormToched] = useState(false);
  const [valueError, setValueError] = useState('');

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setFormToched(true);
    setValueError(validateValue());

    const isFormValid = !validateValue();
    if (!isFormValid) return;

    alert('Форма отправлена!');
  }

  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setValue(event.target.value);
  }

  function validateValue() {
    if (value.length <= 3) return 'Введите больше 3-х символов';
    return '';
  }

  useEffect(() => {
    if (textAreaRef.current) {
      if (setFocus) textAreaRef.current.focus();
      if (setAuthorNameByFocus && authorName !== '') textAreaRef.current.value = authorName;
    }
  }, []);

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      {/*<textarea className={styles.input} ref={textAreaRef} {...textareaTagProps} />*/}
      <textarea
        className={styles.input}
        value={value}
        onChange={handleChange}
        aria-invalid={valueError ? 'true' : undefined}
      />
      {formTouched && valueError && (<div>{valueError}</div>)}
      <div className={styles.formFooter}>
        <button type="submit" className={styles.button}>Комментировать</button>
      </div>
    </form>
  );
}
