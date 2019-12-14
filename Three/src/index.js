import React from 'react';
import ReactDOM from 'react-dom';

// Importando Home
import Home from './pages/Home';
// Importando CSS
import './assets/css/estilos.css'

import * as serviceWorker from './serviceWorker';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';


const Rotas = (
    <Router>
        <div>
            <Switch>
                <Route exact path="/" component={Home}/>
            </Switch>
        </div>
    </Router>
)


ReactDOM.render(Rotas, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
