import React, { ChangeEvent } from 'react';
import { Form } from '../Form';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, updateComment } from '../../../../../store/reducer';

interface IControlledFormProps {
  authorName?: string;
  setFocusOnField?: boolean;
  formId: string;
}

export function ControlledForm({ authorName = '', setFocusOnField = false, formId }: IControlledFormProps) {
  const commentValueData = useSelector<RootState, any>(state => state.commentValues);
  const dispatch = useDispatch();

  const commentValue: string = getCommentValue(commentValueData);

  function getCommentValue(commentValueObjext: any) {
    if (commentValueObjext && commentValueObjext[formId]) return commentValueObjext[formId];
    return '';
  }

  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    const newCommentValueData = { ...commentValueData, [formId]: event.target.value };
    dispatch(updateComment(newCommentValueData));
  }

  function getTextareaValue() {
    return (commentValue === '' && authorName !== '') ? authorName : commentValue;
  }

  return (
    <Form
      textareaTagProps={{
        value: getTextareaValue()
      }}
      handleChange={handleChange}
      setFocusOnField={setFocusOnField}
    />
  );
}
