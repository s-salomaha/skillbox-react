import React, { useRef } from 'react';
import styles from './cardlist.scss';
import { Card } from './Card';
import { usePostsData } from '../../../hooks/usePostsData';
import { postContext } from '../../context/postContext';
import { Spinner } from '../Spinner';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store/reducer';
import { postRequestAsync } from '../../../store/posts/actions';
import { useNavigate } from 'react-router-dom';

export function CardList() {
  const token = useSelector<RootState, string>(state => state.token);
  const bottomOfListRef = useRef<HTMLDivElement>(null);
  const [ posts ] = usePostsData(bottomOfListRef);
  const postsInArray = Object.values(posts);
  const loading = useSelector<RootState, boolean>(state => state.postsData.loading);
  const errorLoading = useSelector<RootState, string>(state => state.postsData.error);
  const postsWereLoaded = useSelector<RootState, boolean>(state => state.postsData.postsWereLoaded);
  const postsCountLoads = useSelector<RootState, number>(state => state.postsData.countLoads);
  const isPostListIsEmpty = !postsInArray.length && postsWereLoaded && !loading && !errorLoading;
  const showSpinner = loading || !postsWereLoaded;
  const showLoadMoreButton = postsCountLoads === 2;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (token === 'undefined') navigate('/');

  return (
    <>
      {isPostListIsEmpty && <div className={styles.notify}>The post list is empty</div>}

      {errorLoading && <div className={styles.notify}>Something went wrong please try again later</div>}

      <ul className={styles.cardList}>
        {postsInArray.map(post => (
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
  );
}
