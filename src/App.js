import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';

import Menubar from './newsreader/menubar/Menubar.js';
import NewsList from "./newsreader/news/list/NewsList";

function App() {
  const defaultKind = 'primary_income_account'
  return (
      <>
        <Menubar/>
        <Route path="/" exact={true} component={NewsList}>
        </Route>
        <Route path="/:kind" component={NewsList}>
        </Route>
        {/*<NewsList kind={defaultKind}/>*/}
      </>
  );
}

export default App;
