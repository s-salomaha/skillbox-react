import React from 'react';
import styles from './welcome.scss';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/reducer';

export function Welcome() {
  const token = useSelector<RootState, string>(state => state.token);

  if (token !== 'undefined') return null;

  return (
    <div className={styles.welcome}>
      Log in first
    </div>
  );
}
