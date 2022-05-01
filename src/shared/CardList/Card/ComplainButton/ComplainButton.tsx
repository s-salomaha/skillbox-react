import React from 'react';
import styles from './complainbutton.scss';
import { WarningIcon } from '../../../Icons';

export function ComplainButton() {
  return (
    <button className={styles.complainButton}>
      <WarningIcon />
      Пожаловаться
    </button>
  );
}
