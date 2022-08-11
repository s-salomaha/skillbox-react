import React from 'react';

type CommentContextType = {
  value: any;
  onChange: (value: string) => void;
}

export const commentContext = React.createContext<CommentContextType>({
  value: {},
  onChange: () => {}
});
