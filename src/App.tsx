import React from 'react';
import './main.global.scss';
import { hot } from 'react-hot-loader/root';
import { Layout } from './shared/components/Layout';
import { Header } from './shared/components/Header';
import { Content } from './shared/components/Content';
import { CardList } from './shared/components/CardList';
import { UserContextProvider } from './shared/context/userContext';

import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from './store/reducer';
import thunk from 'redux-thunk';

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
