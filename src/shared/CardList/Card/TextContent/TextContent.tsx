import React from 'react';
import styles from './textcontent.scss';
import { UserLink } from '../../../UserLink';

export function TextContent() {
  return (
    <div className={styles.textContent}>
      <div className={styles.metaData}>
        <UserLink />
        <span className={styles.createdAt}>
            <span className={styles.publishedLabel}>опубликовано </span>
            4 часа назад
          </span>
      </div>
      <h2 className={styles.title}>
        <a href="#post-url" className={styles.postLink}>
          Следует отметить, что новая модель организационной... Следует отметить, что новая модель организационной...
        </a>
      </h2>
    </div>
  );
}
