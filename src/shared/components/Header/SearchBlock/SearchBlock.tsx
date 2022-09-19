import React from 'react';
import styles from './searchblock.scss';
import { UserBlock } from './UserBlock';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../store/reducer';

export function SearchBlock() {
  const iconImg = useSelector<RootState, any>(state => state.me.data.iconImg);
  const name = useSelector<RootState, any>(state => state.me.data.name);
  const loading = useSelector<RootState, boolean>(state => state.me.loading);

  return (
    <div className={styles.searchBlock}>
      <UserBlock avatarSrc={iconImg} username={name} loading={loading} />
    </div>
  );
}
