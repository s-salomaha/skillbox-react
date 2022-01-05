import { hot } from 'react-hot-loader/root';
import * as React from 'react';
import styles from './header.scss';
import {StarWarsNameClass} from "./StateExamples/StarWarsNameClass/StarWarsNameClass";

function HeaderComponent() {
  return (
    <header>
      <StarWarsNameClass />
    </header>
  );
}

export const Header = hot(HeaderComponent);
