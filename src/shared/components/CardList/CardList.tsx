import React, { useRef } from 'react';
import styles from './cardlist.scss';
import { Card } from './Card';
import { usePostsData } from '../../../hooks/usePostsData';
import { postContext } from '../../context/postContext';
import { Spinner } from '../Spinner';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store/reducer';
import { Welcome } from '../Welcome';
import { postRequestAsync } from '../../../store/posts/actions';

export function CardList() {
  const token = useSelector<RootState, any>(state => state.token);
  const bottomOfListRef = useRef<HTMLDivElement>(null);
  const [ posts ] = usePostsData(bottomOfListRef);
  const loading = useSelector<RootState, boolean>(state => state.postsData.loading);
  const errorLoading = useSelector<RootState, string>(state => state.postsData.error);
  const postsWereLoaded = useSelector<RootState, boolean>(state => state.postsData.postsWereLoaded);
  const postsCountLoads = useSelector<RootState, number>(state => state.postsData.countLoads);
  const isPostListIsEmpty = !posts.length && postsWereLoaded && !loading && !errorLoading;
  const showSpinner = loading || !postsWereLoaded;
  const showLoadMoreButton = postsCountLoads === 2;

  const dispatch = useDispatch();

  return (
    <>
      {token === 'undefined' ? (
        <Welcome />
      ) : (
        <>
          {isPostListIsEmpty && <div className={styles.notify}>The post list is empty</div>}

          {errorLoading && <div className={styles.notify}>Something went wrong please try again later</div>}

          <ul className={styles.cardList}>
            {posts.map(post => (
              <postContext.Provider value={post} key={post.postID}>
                <Card />
              </postContext.Provider>
            ))}
          </ul>

          {showSpinner && <Spinner />}

          {showLoadMoreButton ? (
            <span className={styles.buttonWrapper}>
              <button
                className={styles.button}
                onClick={() => {
                  // @ts-ignore
                  dispatch(postRequestAsync());
                }}
              >
                Load more
              </button>
            </span>
          ) : (
            <div ref={bottomOfListRef} />
          )}
        </>
      )}
    </>
  );
}
