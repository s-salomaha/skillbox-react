import React, { ChangeEvent, FormEvent, useState } from 'react';
import styles from './commentform.scss';

export function CommentForm() {
  const [value, setValue] = useState('');

  function handeChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setValue(event.target.value);
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
