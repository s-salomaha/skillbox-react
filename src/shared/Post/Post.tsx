import React, { useContext, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import styles from './post.scss';
import { CommentForm } from '../CommentForm';
import { KarmaCounter } from '../CardList/Card/KarmaCounter';
import { UserLink } from '../UserLink';
import { postContext } from '../context/postContext';

interface IPost {
  onClose?: () => void;
}

export function Post(props: IPost) {
  const ref = useRef<HTMLDivElement>(null);
  const postData = useContext(postContext);
  const title = postData.title;
  const authorName = postData.authorName;
  const subreddit = postData.subreddit;
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
            <span className={styles.modalCreatedAt}>опубликовано {formattedDate}</span>
            {authorName !== '[deleted]' && <UserLink authorName={authorName}/>}
            <span className={styles.modalCategory}>{subreddit}</span>
          </div>
        </div>
      </div>

      <div className={styles.contentWrap}>
        <div className={styles.content}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
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
