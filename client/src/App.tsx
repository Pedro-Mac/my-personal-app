import React from 'react';
import './App.scss';

//components
import AccountIcon from './components/AccountIcon';
import Projects from './components/Projects';
import Stack from './components/Stack';
import TitleSection from './components/TitleSection';
import MailForm from './components/MailForm'
import Scroller from './components/Scroller';

function App() {
  return (
    <div className="App">
      <TitleSection />
      <AccountIcon />
      <Stack />
      <Projects />
      <MailForm />
      <Scroller />
    </div>
  );
}

export default App;
