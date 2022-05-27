import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { tokenContext } from '../shared/context/tokenContext';

export function usePostsData() {
  const [posts, setPosts] = useState<any[]>([]);
  const token = useContext(tokenContext);

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
            created_utc: post.data.created_utc
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
