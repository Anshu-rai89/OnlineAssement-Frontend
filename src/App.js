import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';

import Navbar from './components/layout/navbar';
import DashBord from './components/dashbord/dashbord';
function App() {

  
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar />
      <Switch>
        <Route path='/' component ={DashBord}  />
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
