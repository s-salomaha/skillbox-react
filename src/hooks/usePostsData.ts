import { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { RootState } from '../store/reducer';

interface IPostData {
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

export function usePostsData() {
  const [posts, setPosts] = useState<IPostData[]>([]);
  const token = useSelector<RootState, any>(state => state.token);

  useEffect(() => {
    axios.get('https://oauth.reddit.com/best/', {
      headers: { Authorization: `bearer ${token}` }
    })
      .then((resp) => {
        if (resp.data.data) {
          setPosts(resp.data.data.children.map((post: any) => ({
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
          })));
        }
      })
      .catch(console.log);
  }, [token]);

  return [posts];
}

function getPostThumbnail(thumbnail: string): string {
  return thumbnail === 'self' ? 'https://via.placeholder.com/500x500.png?text=Reddit' : thumbnail;
}
