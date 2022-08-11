import React, { useState } from 'react';
import './main.global.scss';
import { hot } from 'react-hot-loader/root';
import { Layout } from './shared/Layout';
import { Header } from './shared/Header';
import { Content } from './shared/Content';
import { CardList } from './shared/CardList';
import { useToken } from './hooks/useToken';
import { tokenContext } from './shared/context/tokenContext';
import { UserContextProvider } from './shared/context/userContext';
import { commentContext } from './shared/context/commentContext';

import { createStore, Reducer } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';

export type RootState = {
  value: any;
  onChange: (value: string) => void;
}
const initialState: RootState = {
  value: {},
  onChange: () => {}
};
const rootReducer: Reducer<RootState> = (state = initialState, action) => {
  return state;
};
const store = createStore(rootReducer, composeWithDevTools());

function AppComponent() {
  const [commentValue, setCommentValue] = useState('');
  const [token] = useToken();

  return (
    <Provider store={store}>
      <commentContext.Provider value={{
        value: commentValue,
        onChange: setCommentValue
      }}>
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
      </commentContext.Provider>
    </Provider>
  );
}

export const App = hot(() => <AppComponent />);
