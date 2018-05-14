import React, { Component } from 'react';
import './App.css';
import Jumbo from './components/Jumbo';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import animals from './animals.json';
import AnimalCard from './components/AnimalCard';

class App extends Component {
  state = {
    animals: animals,
    score: 0,
    topscore:0,
    message:"Click an Image to Begin!",
    className:"container body"
  };

  shuffleCard = (id, hit) => {
    console.log("current id: ",id);
    if(!hit){
      animals.forEach(animal => {
        if(animal.id === id && !animal.hit){
          animal.hit = true;
        }
      });
      this.shuffle();
      this.setState({animals:animals, score: this.state.score+1, topscore: this.state.topscore+1, message:"You guessed Correctly!!!", className:"container body"})
    }
    else{
      this.shuffle();
      this.setState({animals:animals, score: 0, message:"You guessed Incorrectly!!!", className:"container body bodyAnimate"});
    }
    console.log(animals);
  }
  
  shuffle = () =>{
    let ctr = animals.length;
    let temp;
    let index;
    
    while (ctr > 0) {
      index = Math.floor(Math.random() * ctr);
      ctr--;
      temp = animals[ctr];
      animals[ctr] = animals[index];
      animals[index] = temp;
    }
  }   

  render() {
    return (
      <div className="">
        <Header score={this.state.score} message={this.state.message} topscore={this.state.topscore}/>
        <Jumbo />
        <Content className={this.state.className}>
          {this.state.animals.map((animal)=><AnimalCard key={animal.id} name={animal.name} image={animal.image} hit={animal.hit} id={animal.id} shuffleCard={this.shuffleCard}/>)}
        </Content>
        <Footer />
      </div>
    );
  }
}

export default App;
