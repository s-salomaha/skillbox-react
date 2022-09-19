import React, { useContext, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import styles from './post.scss';
import { CommentForm } from './CommentForm';
import { KarmaCounter } from '../CardList/Card/Controls/KarmaCounter';
import { UserLink } from '../UserLink';
import { postContext } from '../../context/postContext';

interface IPost {
  onClose?: () => void;
}

export function Post(props: IPost) {
  const ref = useRef<HTMLDivElement>(null);
  const postData = useContext(postContext);
  const title = postData.title;
  const authorName = postData.authorName;
  const linkFlairText = postData.linkFlairText;
  const linkFlairTextColor = postData.linkFlairTextColor;
  const linkFlairBackgroundColor = postData.linkFlairBackgroundColor;
  const selftext = postData.selftext;
  const imageUrl = postData.imageUrl;
  const linkUrl = postData.linkUrl;
  const formattedDate = new Date(postData.created_utc * 1000).toLocaleString();

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (event.target instanceof Node && !ref.current?.contains(event.target)) {
        props.onClose?.();
      }
    }

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    }
  }, []);

  const node = document.querySelector('#modal_root');
  if (!node) return null;

  function closeModal() {
    props.onClose?.();
  }

  return ReactDOM.createPortal((
    <div className={styles.modal} ref={ref}>
      <div className={styles.modalHeader}>
        <KarmaCounter />
        <div className={styles.modalHeaderRight}>
          <h2 className={styles.modalTitle}>{title}</h2>
          <div className={styles.modalMetaData}>
            <span className={styles.modalCreatedAt}>published {formattedDate}</span>
            {authorName !== '[deleted]' && <UserLink authorName={authorName}/>}
            {linkFlairText && linkFlairBackgroundColor && <span
              className={styles.modalCategory}
              style={{
                background: linkFlairBackgroundColor,
                color: linkFlairTextColor
              }}
            >
              {linkFlairText}
            </span>}
          </div>
        </div>
      </div>

      <div className={styles.contentWrap}>
        <div className={styles.content}>
          {selftext && <p>
            {selftext}
          </p>}

          {imageUrl && <img
            src={imageUrl}
            alt={title}
          />}

          {linkUrl && <a href={linkUrl} target="_blank">{linkUrl}</a>}
        </div>

        <CommentForm />
      </div>

      <button className={styles.modalClose} type="button" onClick={closeModal}>
        <svg width="21" height="21" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="m19.8 0 .942.943-19.8 19.799L0 19.799 19.8 0Z" fill="#ADADAD"/>
          <path d="m20.742 19.799-.943.943L0 .942.943 0l19.799 19.799Z" fill="#ADADAD"/>
        </svg>
      </button>
    </div>
  ), node);
}
