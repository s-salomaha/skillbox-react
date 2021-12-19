import { hot } from 'react-hot-loader/root';
import * as React from 'react';
import styles from './header.scss';

function HeaderComponent() {
  return (
    <header>
      <h1 className={styles.example_test}>Reddit for our own!</h1>
      <p>Text here</p>
    </header>
  );
}

export const Header = hot(HeaderComponent);
