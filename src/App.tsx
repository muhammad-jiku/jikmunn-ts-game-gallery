import React from 'react';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path='/'></Route> {/* 👈 Renders at /app/ */}
      </Routes>
    </>
  );
}

export default App;
