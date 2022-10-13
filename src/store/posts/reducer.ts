import {
  IPostData,
  POSTS_SET_POSTS_DATA,
  POSTS_LOADING_ON,
  POSTS_LOADING_ERROR,
  PostsSetPostsDataAction,
  PostsLoadingOnAction,
  PostsLoadingErrorAction
} from './actions';
import { Reducer } from 'react';

export type PostsState = {
  loading: boolean;
  error: string;
  postsWereLoaded: boolean;
  countLoads: number;
  nextAfter: string;
  posts: IPostData[];
}

type PostsActions = PostsSetPostsDataAction
  | PostsLoadingOnAction
  | PostsLoadingErrorAction;

export const postsReducer: Reducer<PostsState, PostsActions> = (state, action) => {
  switch (action.type) {
    case POSTS_SET_POSTS_DATA:
      return {
        ...state,
        posts: [...state.posts, ...action.postsData.posts],
        nextAfter: action.postsData.nextAfter,
        loading: false,
        postsWereLoaded: true,
        countLoads: state.countLoads === 2 ? 0 : ++state.countLoads
      };
    case POSTS_LOADING_ON:
      return {
        ...state,
        loading: true,
        error: ''
      };
    case POSTS_LOADING_ERROR:
      return {
        ...state,
        error: action.error,
        loading: false
      };
    default:
      return state;
  }
}
