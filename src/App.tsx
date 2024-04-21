import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from './components';

function App() {
  return (
    <>
      <Routes>
        <Route path='/'>
          <Home />
        </Route>
      </Routes>
    </>
  );
}

export default App;
