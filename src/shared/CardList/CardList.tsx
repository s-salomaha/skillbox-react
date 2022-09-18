import React from 'react';
import styles from './cardlist.scss';
import { Card } from './Card';
import { usePostsData } from "../../hooks/usePostsData";
import { postsContext } from '../context/postsContext';
import { postContext } from '../context/postContext';
import { Spinner } from '../Spinner';

export function CardList() {
  const [posts] = usePostsData();

  return (
    <postsContext.Provider value={posts}>
      <ul className={styles.cardList}>
        {!posts.length && <Spinner />}

        {posts.map(post => (
          <postContext.Provider value={post} key={post.postID}>
            <Card />
          </postContext.Provider>
        ))}
      </ul>
    </postsContext.Provider>
  );
}
