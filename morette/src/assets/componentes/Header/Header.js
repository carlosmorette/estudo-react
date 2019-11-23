import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
            <header>
                <div className="cabecalho">
                    <div className="local_logo">
                        <h2>Morette</h2>
                    </div>
                    <div className="localnav">
                        <nav>
                            <ul>
                                <Link to="/">
                                    <li>Home</li>
                                </Link>
                                <Link to="">
                                    <li>Contato</li>
                                </Link>
                                <Link to="/">
                                    <li>Login</li>
                                </Link>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header >
        );
    }
}