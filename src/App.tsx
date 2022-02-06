import React from 'react';
import './main.global.scss';
import { hot } from 'react-hot-loader/root';
import { Layout } from "./shared/Layout";
import { Header } from './shared/Header';
import { Content } from './shared/Content';
import { CardList } from './shared/CardList';
import { GenericList } from './shared/GenericList/GenericList';
import { generateId, generateRandomString } from './utils/react/generateRandomIndex';
import { merge } from './utils/js/merge';
import {Dropdown} from "./shared/Dropdown";

const LIST = [
  { As: 'a' as const, href: '#', text: 'some' },
  { As: 'a' as const, text: 'other some' },
  { As: 'a' as const, text: 'some' },
].map(generateId);

function AppComponent() {
  const [list, setList] = React.useState(LIST);

  const handleItemClick = (id: string) => {
    setList(list.filter((item) => item.id !== id));
  }

  const hanleAdd = () => {
    setList(list.concat(generateId({ text: generateRandomString(), As: 'a' as const })));
  }

  return (
    <Layout>
      <Header />
      <Content>
        <CardList />
        <div style={{padding: 20}}>
          <br />
          <Dropdown
            onClose={() => console.log('closed')}
            onOpen={() => console.log('opened')}
            isOpen={false}
            button={<button>Test</button>}
          >
            <CardList />
          </Dropdown>
        </div>
      </Content>
    </Layout>
  );
}

export const App = hot(() => <AppComponent />);
