import { hot } from 'react-hot-loader/root';
import * as React from 'react';
// import styles from './header.scss';
// import {StarWarsNameClass} from "./StateExamples/StarWarsNameClass/StarWarsNameClass";
import { StarWarsNameFunction } from './StateExamples/StarWarsNameFunction/StarWarsNameFunction';

function HeaderComponent() {
  return (
    <header>
      <StarWarsNameFunction />
    </header>
  );
}

export const Header = hot(HeaderComponent);
