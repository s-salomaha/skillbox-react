import React, {useContext} from 'react';
import styles from './preview.scss';
import { postContext } from '../../../context/postContext';

export function Preview() {
  const thumbnail = useContext(postContext).thumbnail === 'self'
    ? 'https://via.placeholder.com/500x500.png?text=Reddit'
    : useContext(postContext).thumbnail;

  return (
    <div className={styles.preview}>
      <div className={styles.previewImgWrap}>
        <img
          className={styles.previewImg}
          src={thumbnail}
          alt="preview"
        />
      </div>
    </div>
  );
}
