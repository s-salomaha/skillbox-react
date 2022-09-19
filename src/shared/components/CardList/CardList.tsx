import React from 'react';
import styles from './cardlist.scss';
import { Card } from './Card';
import { usePostsData } from "../../../hooks/usePostsData";
import { postsContext } from '../../context/postsContext';
import { postContext } from '../../context/postContext';
import { Spinner } from '../Spinner';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/reducer';
import { Welcome } from '../Welcome';

export function CardList() {
  const [posts] = usePostsData();
  const token = useSelector<RootState, any>(state => state.token);

  return (
    <postsContext.Provider value={posts}>

      {token === 'undefined' ? (
        <Welcome />
      ) : (
        <ul className={styles.cardList}>
          {!posts.length && token !== 'undefined' && <Spinner />}

          {posts.map(post => (
            <postContext.Provider value={post} key={post.postID}>
              <Card />
            </postContext.Provider>
          ))}
        </ul>
      )}

    </postsContext.Provider>
  );
}
