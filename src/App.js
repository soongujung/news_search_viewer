import React from 'react';
import logo from './logo.svg';
import './App.css';
import Menubar from './newsreader/menubar/Menubar.js';
import NewsList from "./newsreader/news/list/NewsList";

function App() {
  const defaultKind = 'primary_income_account'
  return (
      <>
        <Menubar/>
        <NewsList kind={defaultKind}/>
      </>
  );
}

export default App;
