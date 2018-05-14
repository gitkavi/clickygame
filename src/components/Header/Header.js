import React from 'react';
import './Header.css';

const Header = props => {
    console.log("score: ", props.score);
    return (
        <div>
            <div className="navbar navbar-header fixed-top">
                <strong><a className="App-title nav-link" href='/'>Clicky Game</a></strong>
                <a className="App-title nav-link">{props.message}</a>
                <a className="App-title nav-link">Score: {props.score} | Top Score: {props.topscore}</a>
            </div>
        </div>
    );
};

export default Header;