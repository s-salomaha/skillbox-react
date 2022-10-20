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

export type PostsType = {
  [key: string]: IPostData;
}

export interface IPostsData {
  posts: PostsType;
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
        const posts = children.reduce(function(result: any, currentPost: any) {
          result[currentPost.data.id] = {
            postID: currentPost.data.id,
            title: currentPost.data.title,
            thumbnail: getPostThumbnail(currentPost.data.thumbnail),
            authorName: currentPost.data.author,
            karmaValue: currentPost.data.ups,
            created_utc: currentPost.data.created_utc,
            linkFlairText: currentPost.data.link_flair_text,
            linkFlairBackgroundColor: currentPost.data.link_flair_background_color,
            linkFlairTextColor: currentPost.data.link_flair_text_color === 'dark' ? '#333333' : '#fff',
            selftext: currentPost.data.selftext ? currentPost.data.selftext : null,
            postHint: currentPost.data.post_hint,
            imageUrl: currentPost.data.post_hint === 'image' ? currentPost.data.url_overridden_by_dest : null,
            linkUrl: currentPost.data.post_hint === 'link' ? currentPost.data.url_overridden_by_dest : null,
            url: currentPost.data.url
          };
          return result;
        }, {});

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
