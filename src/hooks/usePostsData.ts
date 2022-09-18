import { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { RootState } from '../store/reducer';

export function usePostsData() {
  const [posts, setPosts] = useState<any[]>([]);
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
            subreddit: post.data.subreddit,
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
