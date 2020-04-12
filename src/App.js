import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';

import Navbar from './components/layout/navbar';
import DashBord from './components/dashbord/dashbord';
import SignIn from './components/auth/signin';
import SignUp  from './components/auth/signup';
function App() {

  
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar />
      <Switch>
        
        <Route path='/signin' component={SignIn} />
        <Route path='/signup' component ={SignUp}  />
        <Route path='/' component ={DashBord}  />
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
