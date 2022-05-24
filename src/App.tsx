import React from 'react';
import './main.global.scss';
import { hot } from 'react-hot-loader/root';
import { Layout } from "./shared/Layout";
import { Header } from './shared/Header';
import { Content } from './shared/Content';
import { CardList } from './shared/CardList';
import {useToken} from "./hooks/useToken";

function AppComponent() {
  const [token] = useToken();

  return (
    <Layout>
      <Header token={token} />
      <Content>
        <CardList />
      </Content>
    </Layout>
  );
}

export const App = hot(() => <AppComponent />);
