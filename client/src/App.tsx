import React from 'react';
import './App.scss';
import AccountIcon from './components/AccountIcon';
import Stack from './components/Stack';
import TitleSection from './components/TitleSection';

function App() {
  return (
    <div className="App">
      <TitleSection />
      <AccountIcon />
      <Stack />
    </div>
  );
}

export default App;
