import React, { ChangeEvent } from 'react';
import { Form } from '../Form';
import create from 'zustand';

type CommentValuesDataType = {
  [key: string]: string;
}

interface CommentValuesState {
  commentValuesData: CommentValuesDataType;
  changeCommentValues: (event: ChangeEvent<HTMLTextAreaElement>, formId: string) => void;
}

const useCommentValuesStore = create<CommentValuesState>((set) => ({
  commentValuesData: {},
  changeCommentValues: (event, formId) => set((state) => ({
    commentValuesData: { ...state.commentValuesData, [formId]: event.target.value }
  }))
}));

interface IControlledFormProps {
  authorName?: string;
  setFocusOnField?: boolean;
  formId: string;
}

export function ControlledForm({ authorName = '', setFocusOnField = false, formId }: IControlledFormProps) {
  const { commentValuesData, changeCommentValues }: CommentValuesState = useCommentValuesStore();
  const commentValue: string = getCommentValue(commentValuesData);

  function getCommentValue(commentValueObjext: CommentValuesDataType) {
    if (commentValueObjext && commentValueObjext[formId]) return commentValueObjext[formId];
    return '';
  }

  function getTextareaValue() {
    return (commentValue === '' && authorName !== '') ? authorName : commentValue;
  }

  return (
    <Form
      textareaTagProps={{
        value: getTextareaValue()
      }}
      handleChange={(event: ChangeEvent<HTMLTextAreaElement>) => changeCommentValues(event, formId)}
      setFocusOnField={setFocusOnField}
    />
  );
}
