import React from 'react';
import styles from './title.scss';
import { Link } from 'react-router-dom';

interface ITitleProps {
  postID: string;
  title: string;
}

export function Title({ postID, title }: ITitleProps) {
  return (
    <h2 className={styles.title}>
      <Link to={`/posts/${postID}`} className={styles.postLink}>
        {title}
      </Link>
    </h2>
  );
}
