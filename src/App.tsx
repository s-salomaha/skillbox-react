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
import { rootReducer, RootState } from './store/reducer';
import thunk, { ThunkAction } from 'redux-thunk';

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk)
));

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
