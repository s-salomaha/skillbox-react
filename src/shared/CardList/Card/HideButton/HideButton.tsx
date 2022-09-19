import React from 'react';
import styles from './hidebutton.scss';
import { EIcons, Icon } from '../../../Icon';

export function HideButton() {
  return (
    <button className={styles.hideButton}>
      <Icon name={EIcons.block} size={14}/>
      Hide
    </button>
  );
}
