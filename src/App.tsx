import React from 'react';
import './main.global.scss';
import { hot } from 'react-hot-loader/root';
import { Layout } from "./shared/Layout";
import { Header } from './shared/Header';
import { Content } from './shared/Content';
import { CardList } from './shared/CardList';
import { getValue } from './FunctionalExample';
import { MyHooks } from './HooksExample';

function AppComponent() {
  const [isVisible, setIsVisible] = React.useState(true);
  const [title, setTitle] = React.useState('');

  return (
    <Layout>
      <Header />
      <Content>
        <CardList />
        <button onClick={() => setIsVisible(!isVisible)}>Change me!</button>
        <input type="text" onChange={getValue(setTitle)} />
        {isVisible && <MyHooks title={title} id="11" />}
      </Content>
    </Layout>
  );
}

export const App = hot(() => <AppComponent />);
