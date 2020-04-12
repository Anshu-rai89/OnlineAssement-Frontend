import React from 'react';
import {BrowserRouter} from 'react-router-dom';

import Navbar from './components/layout/navbar';

function App() {

  
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar />
      <h1>setup</h1>
    </div>
    </BrowserRouter>
  );
}

export default App;
