import React from 'react';
import styles from './complainbutton.scss';

export function ComplainButton() {
  return (
    <button className={styles.complainButton}>
      <svg width="16" height="14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 14h16L8 0 0 14Zm8.727-2.21H7.273v-1.474h1.454v1.473Zm0-2.948H7.273V5.895h1.454v2.947Z" fill="#999"/>
      </svg>
      Пожаловаться
    </button>
  );
}
