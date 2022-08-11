import React from 'react';
import './main.global.scss';
import { hot } from 'react-hot-loader/root';
import { Layout } from './shared/Layout';
import { Header } from './shared/Header';
import { Content } from './shared/Content';
import { CardList } from './shared/CardList';
import { useToken } from './hooks/useToken';
import { tokenContext } from './shared/context/tokenContext';
import { UserContextProvider } from './shared/context/userContext';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from './store';

const store = createStore(rootReducer, composeWithDevTools());

function AppComponent() {
  const [token] = useToken();

  return (
    <Provider store={store}>
      <tokenContext.Provider value={token}>
        <UserContextProvider>
          <Layout>
            <Header />
            <Content>
              <CardList />
            </Content>
          </Layout>
        </UserContextProvider>
      </tokenContext.Provider>
    </Provider>
  );
}

export const App = hot(() => <AppComponent />);
