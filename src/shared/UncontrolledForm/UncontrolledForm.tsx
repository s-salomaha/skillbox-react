import React from 'react';
import { Form } from '../Form';

interface IUncontrolledFormProps {
  authorName?: string;
  setFocusOnField?: boolean;
}

export function UncontrolledForm({ authorName = '', setFocusOnField = false }: IUncontrolledFormProps) {
  return (
    <Form
      setFocusOnField={setFocusOnField}
      setAuthorNameByFocus={true}
      authorName={authorName}
    />
  );
}
