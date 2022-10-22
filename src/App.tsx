import React, { useEffect, useState } from 'react';
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
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Post } from './shared/components/Post';
import { Welcome } from './shared/components/Welcome';
import { Error404 } from './shared/components/Error404';

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk)
));

function AppComponent() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <Provider store={store}>
      {mounted && (
        <BrowserRouter>
          <UserContextProvider>
            <Layout>
              <Header />
              <Content>
                <Routes>
                  <Route path='/auth' element={<Navigate to='/posts' replace={true} />} />
                  <Route path='/posts' element={<CardList />} >
                    <Route path=':postID' element={<Post />} />
                  </Route>
                  <Route path='/' element={<Welcome />} />
                  <Route path='/*' element={<Error404 />} />
                </Routes>
              </Content>
            </Layout>
          </UserContextProvider>
        </BrowserRouter>
      )}
    </Provider>
  );
}

export const App = hot(() => <AppComponent />);
