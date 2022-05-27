import React, {useContext} from 'react';
import styles from './textcontent.scss';
import { UserLink } from '../../../UserLink';
import { postContext } from '../../../context/postContext';

export function TextContent() {
  const postData = useContext(postContext);
  const title = postData.title;
  const url = postData.url;
  const authorName = postData.authorName;
  const formattedDate = new Date(postData.created_utc * 1000).toLocaleString();

  return (
    <div className={styles.textContent}>
      <div className={styles.metaData}>
        {authorName !== '[deleted]' && <UserLink />}
        <span className={styles.createdAt}>
            <span className={styles.publishedLabel}>опубликовано </span>
            {formattedDate}
          </span>
      </div>
      <h2 className={styles.title}>
        <a href={url} className={styles.postLink} target="_blank">
          {title}
        </a>
      </h2>
    </div>
  );
}
