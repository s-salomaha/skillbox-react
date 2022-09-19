import React from 'react';
import styles from './complainbutton.scss';
import { WarningIcon } from '../../../../../icons';

export function ComplainButton() {
  return (
    <button className={styles.complainButton}>
      <WarningIcon />
      Complain
    </button>
  );
}
