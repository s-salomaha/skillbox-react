import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { RootState } from '../store/reducer';
import { IPostData, postRequestAsync } from '../store/posts/actions';

export function usePostsData(bottomOfListRef: React.RefObject<HTMLDivElement>) {
  const token = useSelector<RootState, any>(state => state.token);
  const posts = useSelector<RootState, IPostData[]>(state => state.postsData.posts);
  const postsCountLoads = useSelector<RootState, number>(state => state.postsData.countLoads);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!token) return;

    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        // @ts-ignore
        dispatch(postRequestAsync());
      }
    }, {
      rootMargin: '100px'
    });
    
    if (bottomOfListRef.current) {
      observer.observe(bottomOfListRef.current);
    }

    return () => {
      if (bottomOfListRef.current) {
        observer.unobserve(bottomOfListRef.current);
      }
    }
  }, [token, bottomOfListRef.current, postsCountLoads]);

  return [ posts ];
}
