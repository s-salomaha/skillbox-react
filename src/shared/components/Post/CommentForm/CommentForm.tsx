import React from 'react';
import styles from './commentform.scss';
import { Comment } from './Comment';
import { ControlledForm } from './ControlledForm';
import { usePostComments } from '../../../../hooks/usePostComments';
import { Spinner } from '../../Spinner';

interface ICommentFormProps {
  postID: string;
}

export function CommentForm({ postID }: ICommentFormProps) {
  const postComments = usePostComments(postID);

  return (
    <>
      <ControlledForm formId={postID}/>

      {!postComments.length && <Spinner />}

      {postComments.map(comment => (
        <Comment
          commentId={comment.commentID}
          authorName={comment.authorName}
          body={comment.body}
          createdUtc={comment.created_utc}
          key={comment.commentID}
        />
      ))}
    </>
  );
}
