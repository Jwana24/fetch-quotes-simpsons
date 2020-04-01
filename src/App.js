// Modules
import React, { Component } from 'react';
// Components
import QuoteCard from "./components/QuoteCard";
// CSS
import './App.css';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      quotes: {
        "character": "Ralph Wiggum",
        "image": "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FRalphWiggum.png?1497567511523",
        "quote": "That's where I saw the leprechaun...He told me to burn things.",
      }
    }
  }

  getQuotes = () => { // cette écriture de la fonction (fléchée) permet de ne pas rajouter de bind dans le constructor, il comprend que cette fonction doit être utilisée par la suite
    const url = "https://thesimpsonsquoteapi.glitch.me/quotes";
    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState({
          quotes: data[0]
        });
      });
  }

  render(){
    return (
      <div className="App">
        <QuoteCard quotes={this.state.quotes}/>
        <button type="button" onClick={this.getQuotes}>Get more quotes</button>
      </div>
    );
  }
}

export default App;
