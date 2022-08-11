import { ActionCreator, AnyAction, Reducer } from 'redux';

export type RootState = {
  commentValues: any;
  onChange: (value: string) => void;
}

const initialState: RootState = {
  commentValues: {},
  onChange: () => {}
};

const UPDATE_COMMENT = 'UPDATE_COMMENT';

export const updateComment: ActionCreator<AnyAction> = (commentValues) => ({
  type: UPDATE_COMMENT,
  commentValues
});

export const rootReducer: Reducer<RootState> = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_COMMENT:
      return {
        ...state,
        commentValues: action.commentValues
      };
    default:
      return state;
  }
};
