import React, { useContext } from 'react';
import styles from './textcontent.scss';
import { UserLink } from '../../../UserLink';
import { postContext } from '../../../../context/postContext';
import { Title } from './Title';

export function TextContent() {
  const postData = useContext(postContext);
  const title = postData.title;
  const postID = postData.postID;
  const authorName = postData.authorName;
  const formattedDate = new Date(postData.created_utc * 1000).toLocaleString();

  return (
    <div className={styles.textContent}>
      <div className={styles.metaData}>
        {authorName !== '[deleted]' && <UserLink authorName={authorName}/>}
        <span className={styles.createdAt}>
          <span className={styles.publishedLabel}>published </span>
          {formattedDate}
        </span>
      </div>

      <Title postID={postID} title={title} />
    </div>
  );
}
