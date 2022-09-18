import React, { useState } from 'react';
import styles from './title.scss';
import { Post } from '../../../Post';

interface ITitleProps {
  url: string;
  title: string;
}

export function Title({ url, title }: ITitleProps) {
  const [isModalOpened, setIsModalOpened] = useState(false);

  return (
    <h2 className={styles.title}>
      <a href="#post-url" className={styles.postLink} onClick={() => { setIsModalOpened(true); }}>
        {title}
      </a>

      {isModalOpened && (
        <Post
          onClose={() => { setIsModalOpened(false); }}
        />
      )}
    </h2>
  );
}
