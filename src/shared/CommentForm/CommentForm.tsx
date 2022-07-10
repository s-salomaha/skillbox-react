import React, { ChangeEvent, FormEvent, useContext } from 'react';
import styles from './commentform.scss';
import { commentContext } from '../context/commentContext';

export function CommentForm() {
  const { value, onChange } = useContext(commentContext);

  function handeChange(event: ChangeEvent<HTMLTextAreaElement>) {
    onChange(event.target.value);
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    console.log(value);
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <textarea className={styles.input} value={value} onChange={handeChange} />
      <button type="submit" className={styles.button}>Комментировать</button>
    </form>
  );
}
