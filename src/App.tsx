import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from './components';
import GlobalStyles from './styles';

function App() {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
