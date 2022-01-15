import React from 'react';
import styles from './preview.scss';

export function Preview() {
  return (
    <div className={styles.preview}>
      <div className={styles.previewImgWrap}>
        <img
          className={styles.previewImg}
          src="https://cdn.dribbble.com/users/202174/screenshots/17229929/media/24d0f6a9fe5cfeb3a486b9da1396ad08.png?compress=1&resize=800x600"
          alt="preview"
        />
      </div>
    </div>
  );
}
