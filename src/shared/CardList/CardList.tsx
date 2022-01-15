import React from 'react';
import styles from './cardlist.scss';
import { Card } from './Card';

export function CardList() {
  return (
    <ul className={styles.cardList}>
      <Card />
      <Card />
    </ul>
  );
}
