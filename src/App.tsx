import React from 'react';
import './main.global.scss';
import { hot } from 'react-hot-loader/root';
import { Layout } from "./shared/Layout";
import { Header } from './shared/Header';
import { Content } from './shared/Content';
import { CardList } from './shared/CardList';
import { EColor, Text } from './shared/Text';
import { Break } from "./shared/Break";

function AppComponent() {
  return (
    <Layout>
      <Header />
      <Content>
        <CardList />
        <br/>
        <Text size={20} mobileSize={28} color={EColor.green} bold>Label1</Text>
        <Break size={8} top />
        <Text size={20}>Label2</Text>
        <Break size={8} mobileSize={16} top />
        <Text size={20} mobileSize={16}>Label3</Text>
      </Content>
    </Layout>
  );
}

export const App = hot(() => <AppComponent />);
