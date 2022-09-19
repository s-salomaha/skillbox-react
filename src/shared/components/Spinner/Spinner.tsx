import React from 'react';
import styles from './spinner.scss';

export function Spinner() {
  return (
    <div className={styles.spinnerWrap}>
      <svg className={styles.spinner} viewBox="0 0 50 50">
        <circle cx="25" cy="25" r="20" fill="none" strokeWidth="5"></circle>
      </svg>
    </div>
  );
}
