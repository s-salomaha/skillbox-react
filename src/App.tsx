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

function AppComponent() {
  const [commentValue, setCommentValue] = useState('');
  const [token] = useToken();

  return (
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
  );
}

export const App = hot(() => <AppComponent />);
