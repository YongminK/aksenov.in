import React from 'react';
import Landing from './Landing/Landing';
import Cube from "./screens/NotFound/Cube";
import {Switch, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/main.sass';
function App() {
  return (
      <Switch>
          <Route exact path='/' component={Landing}/>
          <Route exact path='/404' component={Cube}/>
      </Switch>
  );
}

export default App;
