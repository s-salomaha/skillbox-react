import { hot } from 'react-hot-loader/root';
import * as React from 'react';
import styles from './header.scss';

function HeaderComponent() {
  return (
    <header>
      <h1 className={styles.example_test}>Hello React</h1>
    </header>
  );
}

export const Header = hot(HeaderComponent);
