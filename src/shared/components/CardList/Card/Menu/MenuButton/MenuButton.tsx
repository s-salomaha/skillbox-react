import React from 'react';
import styles from './menubutton.scss';
import { MenuIcon } from '../../../../../icons';

export function MenuButton() {
  return (
    <button className={styles.menuButton}>
      <MenuIcon />
    </button>
  );
}
