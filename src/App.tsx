import React from 'react';
import './main.global.scss';
import { hot } from 'react-hot-loader/root';
import { Layout } from './shared/Layout';
import { Header } from './shared/Header';
import { Content } from './shared/Content';
import { CardList } from './shared/CardList';
import { UserContextProvider } from './shared/context/userContext';

import { applyMiddleware, createStore, Middleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from './store';

const ping: Middleware = (store) => (next) => (action) => {
  console.log('ping');
  const returnValue = next(action);
};

const pong: Middleware = (store) => (next) => (action) => {
  console.log('pong');
  const returnValue = next(action);
};

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(ping, pong)
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
