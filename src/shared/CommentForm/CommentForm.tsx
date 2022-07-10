import React, { FormEvent, useRef } from 'react';
import styles from './commentform.scss';

export function CommentForm() {
  const ref = useRef<HTMLTextAreaElement>(null);

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    console.log(ref.current?.value);
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <textarea className={styles.input} ref={ref} />
      <button type="submit" className={styles.button}>Комментировать</button>
    </form>
  );
}
