import React, { useEffect } from 'react';
import styles from './header.scss';
import { SearchBlock } from './SearchBlock';
import { ThreadTitle } from './ThreadTitle';
import { SortBlock } from './SortBlock';
import { useDispatch } from 'react-redux';
import { saveToken } from '../../../store/reducer';

export function Header() {
  const dispatch = useDispatch();

  useEffect(() => {
    // @ts-ignore
    dispatch(saveToken());
  }, []);

  return (
    <header className={styles.header}>
      <SearchBlock />
      <ThreadTitle />
      <SortBlock />
    </header>
  );
}
