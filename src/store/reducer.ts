import { ActionCreator, Reducer } from 'redux';
import {
  ME_REQUEST,
  ME_REQUEST_ERROR,
  ME_REQUEST_SUCCESS,
  MeRequestAction,
  MeRequestErrorAction,
  MeRequestSuccessAction
} from './me/actions';
import { meReducer, MeState } from './me/reducer';

export type RootState = {
  commentValues: any;
  onChange: (value: string) => void;
  token: string;
  me: MeState;
}

const initialState: RootState = {
  commentValues: {},
  onChange: () => {},
  token: '',
  me: {
    loading: false,
    error: '',
    data: {}
  }
};

const UPDATE_COMMENT = 'UPDATE_COMMENT';
export type UpdateCommentAction = {
  type: typeof UPDATE_COMMENT;
  commentValues: any;
}
export const updateComment: ActionCreator<UpdateCommentAction> = (commentValues) => ({
  type: UPDATE_COMMENT,
  commentValues
});

const SET_TOKEN = 'SET_TOKEN';
export type SetTokenAction = {
  type: typeof SET_TOKEN;
  token: string;
}
export const setToken: ActionCreator<SetTokenAction> = (token) => ({
  type: SET_TOKEN,
  token
});

type MyAction = UpdateCommentAction
  | SetTokenAction
  | MeRequestAction
  | MeRequestSuccessAction
  | MeRequestErrorAction;

export const rootReducer: Reducer<RootState, MyAction> = (state = initialState, action) => {
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
    case ME_REQUEST:
    case ME_REQUEST_SUCCESS:
    case ME_REQUEST_ERROR:
      return {
        ...state,
        me: meReducer(state.me, action)
      };
    default:
      return state;
  }
};
