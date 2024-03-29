import React, { useContext } from 'react';
import styles from './karmacounter.scss';
import { postContext } from '../../../../../context/postContext';

interface IKarmaCounterProps {
  value?: number | null;
}

export function KarmaCounter({ value = null }: IKarmaCounterProps) {
  const karmaValue = value ? value : useContext(postContext).karmaValue;

  return (
    <div className={styles.karmaCounter}>
      <button className={styles.up}>
        <svg width="19" height="10" viewBox="0 0 19 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.5 0L0 10H19L9.5 0Z" fill="#D9D9D9"/>
        </svg>
      </button>
      <span className={styles.karmaValue}>{karmaValue}</span>
      <button className={styles.down}>
        <svg className={styles.down} width="19" height="10" viewBox="0 0 19 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.5 0L0 10H19L9.5 0Z" fill="#D9D9D9"/>
        </svg>
      </button>
    </div>
  );
}
