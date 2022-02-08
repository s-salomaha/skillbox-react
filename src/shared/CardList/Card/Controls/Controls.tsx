import React from 'react';
import styles from './controls.scss';
import { CommentsButton } from '../CommentsButton';
import { ShareButton } from '../ShareButton';
import { SaveButton } from '../SaveButton';
import { KarmaCounter } from '../KarmaCounter';

export function Controls() {
  return (
    <div className={styles.controls}>
      <KarmaCounter />
      <CommentsButton isMobileButton={true} />

      <div className={styles.actions}>
        <ShareButton isMobileButton={true} />
        <SaveButton isMobileButton={true} />
      </div>
    </div>
  );
}
