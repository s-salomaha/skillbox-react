import React, { useContext } from 'react';
import styles from './commentform.scss';
import { Comment } from '../Comment';
import { ControlledForm } from '../ControlledForm';
import { postContext } from '../context/postContext';

export function CommentForm() {
  const postData = useContext(postContext);
  const postId = postData.postID;

  return (
    <>
      <ControlledForm formId={postId}/>

      <div className={styles.comments}>
        <Comment commentId={`${postId}$-comment1`} >
          <Comment commentId={`${postId}$-comment2`} />
          <Comment commentId={`${postId}$-comment3`} />
        </Comment>
      </div>
    </>
  );
}
