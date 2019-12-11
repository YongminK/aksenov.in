import React from 'react';
import Main from "./screens/Main";
import Cube from "./screens/NotFound/Cube";
import {Switch, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/main.sass';

function App() {
    return (
        <>

            <Switch>
                <Route exact path='/' component={Main}/>
                <Route component={Cube}/>
            </Switch>

        </>
    );
}

export default App;
