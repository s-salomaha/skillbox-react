import { ActionCreator, AnyAction, Reducer } from 'redux';

export type RootState = {
  commentValues: any;
  onChange: (value: string) => void;
  token: string;
}

const initialState: RootState = {
  commentValues: {},
  onChange: () => {},
  token: ''
};

const UPDATE_COMMENT = 'UPDATE_COMMENT';

export const updateComment: ActionCreator<AnyAction> = (commentValues) => ({
  type: UPDATE_COMMENT,
  commentValues
});

const SET_TOKEN = 'SET_TOKEN';

export const setToken: ActionCreator<AnyAction> = (token) => ({
  type: SET_TOKEN,
  token
});

export const rootReducer: Reducer<RootState> = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_COMMENT:
      return {
        ...state,
        commentValues: action.commentValues
      };
    case SET_TOKEN:
      return {
        ...state,
        token: action.token
      };
    default:
      return state;
  }
};
