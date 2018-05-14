import React from 'react';
import './Jumbo.css';

const Jumbo = () =>{
    return(
        <div className="jumbo">
          <h1 className="jumbo-text">Clicky Game!</h1>
          <h2 className="jumbo-subtext">Click on an image to earn points,<br /> but don't click on any more than once!</h2>          
        </div>
    );
};

export default Jumbo;