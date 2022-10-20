import React from 'react';
import styles from './error404.scss';

export function Error404() {
  return (
    <div className={styles.error404}>
      <img
        src="https://cdn.searchenginejournal.com/wp-content/uploads/2013/02/reddit404top.png"
        alt="404 error"
      />
      <div className={styles.error404Text}>404 error. Page not found. Please try again later.</div>
    </div>
  );
}
