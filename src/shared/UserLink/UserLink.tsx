import React, {useContext, useEffect, useState} from 'react';
import styles from './userlink.scss';
import axios from "axios";
import { postContext } from '../context/postContext';

interface IAuthorData {
  url?: string;
  avatar?: string;
}

export function UserLink() {
  const authorName = useContext(postContext).authorName;
  const [authorData, setAuthorData] = useState<IAuthorData>({});

  useEffect(() => {
    axios.get(`https://www.reddit.com/user/${authorName}/about.json`)
      .then((resp) => {
        const data = resp.data.data;

        setAuthorData({
          url: data.subreddit ? `https://www.reddit.com${data.subreddit.url}` : '#author_url',
          avatar: data.icon_img.split('?')[0]
        });
      })
      .catch(console.log);
  }, []);

  return (
    <div className={styles.userLink}>
      <img
        className={styles.avatar}
        src={authorData.avatar}
        alt="avatar"
      />
      <a href={authorData.url} className={styles.userName}>{authorName}</a>
    </div>
  );
}
