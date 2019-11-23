import React from 'react';

// Página Home
import Home from './assets/pages/Home/Home';
import Consulta from './assets/pages/Consulta/Consulta';
import * as serviceWorker from './serviceWorker';

// react-router-dom
import ReactDOM from 'react-dom';
import {Route , BrowserRouter as Router, Switch} from 'react-router-dom';

const Rotas = (
    <Router>
        <div>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/consulta" component={Consulta} />
            </Switch>
        </div>
    </Router>
)


ReactDOM.render(Rotas , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
