import React, {useContext} from 'react';
import styles from './header.scss';
import { SearchBlock } from './SearchBlock';
import { ThreadTitle } from './ThreadTitle';
import { SortBlock } from './SortBlock';
import {tokenContext} from "../context/tokenContext";

export function Header() {
  const { Consumer } = tokenContext;
  const token = useContext(tokenContext);

  return (
    <header className={styles.header}>
      <Consumer>
        {(token) => <SearchBlock token={token} />}
      </Consumer>
      <ThreadTitle />
      <SortBlock />
    </header>
  );
}
