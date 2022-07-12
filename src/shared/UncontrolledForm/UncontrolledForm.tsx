import React from 'react';
import { Form } from '../Form';

interface IUncontrolledFormProps {
  authorName?: string;
  setFocus?: boolean;
}

export function UncontrolledForm({ authorName = '', setFocus = false }: IUncontrolledFormProps) {
  return (
    <Form
      setFocus={setFocus}
      setAuthorNameByFocus={true}
      authorName={authorName}
    />
  );
}
