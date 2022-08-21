import React from 'react';
import './main.global.scss';
import { hot } from 'react-hot-loader/root';
import { Layout } from './shared/Layout';
import { Header } from './shared/Header';
import { Content } from './shared/Content';
import { CardList } from './shared/CardList';
import { UserContextProvider } from './shared/context/userContext';

import { Action, applyMiddleware, createStore } from 'redux';
import { Provider, useDispatch } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer, RootState } from './store';
import thunk, { ThunkAction } from 'redux-thunk';

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk)
));

export const timeout = (ms: number): ThunkAction<void, RootState, unknown, Action<string>> => (dispatch, _getState) => {
  dispatch({ type: 'START' });
  setTimeout(() => {
    dispatch({ type: 'FINISH' });
  }, ms);
};

function AppComponent() {
  return (
    <Provider store={store}>
      <UserContextProvider>
        <Layout>
          <Header />
          <Content>
            <CardList />
          </Content>
        </Layout>
      </UserContextProvider>
    </Provider>
  );
}

export const App = hot(() => <AppComponent />);
