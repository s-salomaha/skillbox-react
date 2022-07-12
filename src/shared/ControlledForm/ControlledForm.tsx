import React, { ChangeEvent, useContext } from 'react';
import { commentContext } from '../context/commentContext';
import { Form } from '../Form';

interface IControlledFormProps {
  authorName?: string;
  setFocus?: boolean;
  formId: string;
}

export function ControlledForm({ authorName = '', setFocus = false, formId }: IControlledFormProps) {
  const { value: commentValueData, onChange } = useContext(commentContext);
  const commentValue: string = getCommentValue(commentValueData);

  function getCommentValue(commentValueObjext: any) {
    if (commentValueObjext && commentValueObjext[formId]) return commentValueObjext[formId];
    return '';
  }

  function handeChange(event: ChangeEvent<HTMLTextAreaElement>) {
    const newCommentValueData = { ...commentValueData, [formId]: event.target.value };
    onChange(newCommentValueData);
  }

  function getTextareaValue() {
    return (commentValue === '' && authorName !== '') ? authorName : commentValue;
  }

  return (
    <Form
      textareaTagProps={{
        value: getTextareaValue(),
        onChange: handeChange
      }}
      setFocus={setFocus}
    />
  );
}
