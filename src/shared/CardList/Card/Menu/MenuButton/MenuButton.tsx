import React from 'react';
import styles from './menubutton.scss';
import { MenuIcon } from '../../../../Icons';

export function MenuButton() {
  return (
    <button className={styles.menuButton}>
      <MenuIcon />
    </button>
  );
}
