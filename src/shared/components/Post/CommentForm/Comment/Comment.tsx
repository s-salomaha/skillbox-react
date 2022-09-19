import React, { useState } from 'react';
import Markdown from 'markdown-to-jsx';
import styles from './comment.scss';
import { UserLink } from '../../../UserLink';
import { CommentsButton } from '../../../CardList/Card/Controls/CommentsButton';
import { ShareButton } from '../../../CardList/Card/Controls/ShareButton';
import { ComplainButton } from '../../../CardList/Card/Controls/ComplainButton';
import { ControlledForm } from '../ControlledForm';
import { UncontrolledForm } from '../UncontrolledForm';

interface ICommentProps {
  commentId: string;
  authorName: string;
  body: string;
  createdUtc: number;
}

export function Comment({
  commentId,
  authorName,
  body,
  createdUtc
}: ICommentProps) {
  const [isFormOpened, setIsFormOpened] = useState(false);
  const formattedDate = new Date(createdUtc * 1000).toLocaleString();

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

      <div className={styles.commentBody}>
        <div className={styles.commentMetaData}>
          <UserLink authorName={authorName}/>
          <span className={styles.commentCreatedAt}>{formattedDate}</span>
        </div>
        <div className={styles.commentText}>
          <Markdown options={{ forceBlock: true }}>{body}</Markdown>
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
            <ControlledForm setFocusOnField={true} authorName={`${authorName}, `} formId={commentId} />
            <h3>Uncontrolled form:</h3>
            <UncontrolledForm setFocusOnField={true} authorName={`${authorName}, `} />
          </div>
        )}

        <div className="commentChildren">
        </div>
      </div>
    </div>
  );
}
