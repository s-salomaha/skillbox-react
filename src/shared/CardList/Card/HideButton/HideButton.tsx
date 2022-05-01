import React from 'react';
import styles from './hidebutton.scss';
import { BlockIcon } from '../../../Icons';

export function HideButton() {
  return (
    <button className={styles.hideButton}>
      <BlockIcon />
      Скрыть
    </button>
  );
}
