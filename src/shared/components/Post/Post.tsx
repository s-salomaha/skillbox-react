import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import styles from './post.scss';
import { CommentForm } from './CommentForm';
import { KarmaCounter } from '../CardList/Card/Controls/KarmaCounter';
import { UserLink } from '../UserLink';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/reducer';
import { PostsType } from '../../../store/posts/actions';

export function Post() {
  const ref = useRef<HTMLDivElement>(null);
  const { postID } = useParams();
  const navigate = useNavigate();

  const posts = useSelector<RootState, PostsType>(state => state.postsData.posts);
  // @ts-ignore
  const post = posts[postID];

  if (!post) return null;

  const postDataID = post.postID;
  const title = post.title;
  const authorName = post.authorName;
  const linkFlairText = post.linkFlairText;
  const linkFlairTextColor = post.linkFlairTextColor;
  const linkFlairBackgroundColor = post.linkFlairBackgroundColor;
  const selftext = post.selftext;
  const imageUrl = post.imageUrl;
  const linkUrl = post.linkUrl;
  const karmaValue = post.karmaValue;
  const formattedDate = new Date(post.created_utc * 1000).toLocaleString();

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (event.target instanceof Node && !ref.current?.contains(event.target)) {
        navigate('/posts');
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
    navigate('/posts');
  }

  return ReactDOM.createPortal((
    <div className={styles.modal} ref={ref}>
      <div className={styles.modalHeader}>
        <KarmaCounter value={karmaValue}/>
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

        <CommentForm postID={postDataID} />
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
