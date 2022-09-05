import React, { useState } from 'react';
import styles from './comment.scss';
import { UserLink } from '../UserLink';
import { CommentsButton } from '../CardList/Card/CommentsButton';
import { ShareButton } from '../CardList/Card/ShareButton';
import { ComplainButton } from '../CardList/Card/ComplainButton';
import { ControlledForm } from '../ControlledForm';
import { UncontrolledForm } from '../UncontrolledForm';

interface ICommentProps {
  commentId: string;
  children?: React.ReactNode;
}

export function Comment({ commentId, children }: ICommentProps) {
  const [isFormOpened, setIsFormOpened] = useState(false);

  return (
    <div className={styles.comment}>
      <div className={styles.commentCounter}>
        <button className={styles.commentCounterUp}>
          <svg width="19" height="10" viewBox="0 0 19 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.5 0L0 10H19L9.5 0Z" fill="#D9D9D9"/>
          </svg>
        </button>
        <button className={styles.commentCounterDown}>
          <svg className={styles.down} width="19" height="10" viewBox="0 0 19 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.5 0L0 10H19L9.5 0Z" fill="#D9D9D9"/>
          </svg>
        </button>
        <div className={styles.commentCounterLine} />
      </div>

      <div className="commentBody">
        <div className={styles.commentMetaData}>
          <UserLink />
          <span className={styles.commentCreatedAt}>1 час назад</span>
          <span className={styles.commentCategory}>Законодательство</span>
        </div>
        <div className={styles.commentText}>
          <p>
            Сторонники тоталитаризма в науке будут объективно рассмотрены соответствующими инстанциями.
            Лишь реплицированные с зарубежных источников, современные исследования будут описаны максимально подробно.
          </p>
        </div>
        <div className={styles.commentButtons}>
          <span onClick={() => setIsFormOpened(!isFormOpened)}>
            <CommentsButton buttonTitle="Ответить" />
          </span>
          <ShareButton />
          <ComplainButton />
        </div>

        {isFormOpened && (
          <div className={styles.commentReplyForm}>
            <h3>Controlled form:</h3>
            <ControlledForm setFocusOnField={true} authorName="Михаил Рогов, " formId={commentId} />
            <h3>Uncontrolled form:</h3>
            <UncontrolledForm setFocusOnField={true} authorName="Михаил Рогов, " />
          </div>
        )}

        <div className="commentChildren">
          {children}
        </div>
      </div>
    </div>
  );
}
