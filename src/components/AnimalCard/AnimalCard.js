import React from 'react';
import './AnimalCard.css';

const AnimalCard = props =>{

    const shuffleCard =() =>{
        props.shuffleCard(props.id,props.hit);
    }

    return(
        <div className="card" onClick={shuffleCard}>
            <img className="image" alt={props.name} src={require(`../../img/${props.image}`)}/>
        </div>
    )
}

export default AnimalCard;