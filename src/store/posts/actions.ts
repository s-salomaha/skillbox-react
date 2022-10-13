import { Action, ActionCreator } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../reducer';
import axios from 'axios';

export interface IPostData {
  postID: string;
  title: string;
  thumbnail: string;
  authorName: string;
  karmaValue: number;
  created_utc: number;
  linkFlairText: string;
  linkFlairBackgroundColor: string;
  linkFlairTextColor: string;
  selftext: string | null;
  postHint: string;
  imageUrl: string | null;
  linkUrl: string | null;
  url: string;
}

export interface IPostsData {
  posts: IPostData[];
  nextAfter: string;
}

export const POSTS_SET_POSTS_DATA = 'POSTS_SET_POSTS_DATA';
export type PostsSetPostsDataAction = {
  type: typeof POSTS_SET_POSTS_DATA;
  postsData: IPostsData;
}
export const postsSetPostsData: ActionCreator<PostsSetPostsDataAction> = (postsData: IPostsData) => ({
  type: POSTS_SET_POSTS_DATA,
  postsData
});

export const POSTS_LOADING_ON = 'POSTS_LOADING_ON';
export type PostsLoadingOnAction = {
  type: typeof POSTS_LOADING_ON;
}
export const postsLoadingOn: ActionCreator<PostsLoadingOnAction> = () => ({
  type: POSTS_LOADING_ON
});

export const POSTS_LOADING_ERROR = 'POSTS_LOADING_ERROR';
export type PostsLoadingErrorAction = {
  type: typeof POSTS_LOADING_ERROR;
  error: string;
}
export const postsLoadingError: ActionCreator<PostsLoadingErrorAction> = (error) => ({
  type: POSTS_LOADING_ERROR,
  error
});

export const postRequestAsync = (): ThunkAction<
  void,
  RootState,
  unknown,
  Action<string>
  > => (dispatch, getState) => {
  async function loadPosts() {
    dispatch(postsLoadingOn());

    try {
      const { data: { data: { after, children } } } = await axios.get('https://oauth.reddit.com/best/', {
        headers: { Authorization: `bearer ${getState().token}` },
        params: {
          limit: 10,
          after: getState().postsData.nextAfter
        }
      });

      if (children) {
        const posts = children.map((post: any) => ({
          postID: post.data.id,
          title: post.data.title,
          thumbnail: getPostThumbnail(post.data.thumbnail),
          authorName: post.data.author,
          karmaValue: post.data.ups,
          created_utc: post.data.created_utc,
          linkFlairText: post.data.link_flair_text,
          linkFlairBackgroundColor: post.data.link_flair_background_color,
          linkFlairTextColor: post.data.link_flair_text_color === 'dark' ? '#333333' : '#fff',
          selftext: post.data.selftext ? post.data.selftext : null,
          postHint: post.data.post_hint,
          imageUrl: post.data.post_hint === 'image' ? post.data.url_overridden_by_dest : null,
          linkUrl: post.data.post_hint === 'link' ? post.data.url_overridden_by_dest : null,
          url: post.data.url
        }));

        dispatch(postsSetPostsData({
          posts,
          nextAfter: after
        }));
      }
    } catch (error) {
      dispatch(postsLoadingError(String(error)));
    }
  }

  if (getState().postsData.loading) return;

  loadPosts();
}

function getPostThumbnail(thumbnail: string): string {
  return thumbnail === 'self' ? 'https://via.placeholder.com/500x500.png?text=Reddit' : thumbnail;
}
