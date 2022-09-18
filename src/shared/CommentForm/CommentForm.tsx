import React, { useContext } from 'react';
import styles from './commentform.scss';
import { Comment } from '../Comment';
import { ControlledForm } from '../ControlledForm';
import { postContext } from '../context/postContext';
import { usePostComments } from '../../hooks/usePostComments';
import { Spinner } from '../Spinner';

export function CommentForm() {
  const postData = useContext(postContext);
  const postId = postData.postID;
  const postComments = usePostComments();

  return (
    <>
      <ControlledForm formId={postId}/>

      {!postComments.length && <Spinner />}

      {postComments.map(comment => (
        <Comment
          commentId={comment.commentID}
          authorName={comment.authorName}
          body={comment.body}
          createdUtc={comment.created_utc}
          subreddit={comment.subreddit}
          key={comment.commentID}
        />
      ))}
    </>
  );
}
