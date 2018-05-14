import React from 'react';
import './Content.css';

const Content = props =>{
    console.log(props.className);
    return (
        <div className="wrapper">
            <div className={props.className}>
            {props.children}     
            </div>
        </div>
    );
};

export default Content;