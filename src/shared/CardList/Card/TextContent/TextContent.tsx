import React, { useContext, useState } from 'react';
import styles from './textcontent.scss';
import { UserLink } from '../../../UserLink';
import { postContext } from '../../../context/postContext';
import { Post } from "../../../Post";

export function TextContent() {
  const postData = useContext(postContext);
  const title = postData.title;
  const url = postData.url;
  const authorName = postData.authorName;
  const formattedDate = new Date(postData.created_utc * 1000).toLocaleString();
  const [isModalOpened, setIsModalOpened] = useState(false);

  return (
    <div className={styles.textContent}>
      <div className={styles.metaData}>
        {authorName !== '[deleted]' && <UserLink />}
        <span className={styles.createdAt}>
            <span className={styles.publishedLabel}>опубликовано </span>
            {formattedDate}
          </span>
      </div>
      <h2 className={styles.title} onClick={ () => { console.log('clicked!!') } }>
        <a href={url} className={styles.postLink} target="_blank" onClick={() => { setIsModalOpened(true); }}>
          {title}
        </a>

        {isModalOpened && (
          <Post />
        )}
      </h2>
    </div>
  );
}
