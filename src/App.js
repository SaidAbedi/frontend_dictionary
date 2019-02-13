import React, { Component } from 'react';
import './App.css';
import SearchWord from './SearchWord'
import DefintionCard from './components/DefintionCard'

class App extends Component {
  state = {
    // Dummy Words for testing
    frontEndWords: [
      {keyword: "function",
      defintion: "A JavaScript function is a block of code designed to perform a particular task",
      visibility: false
    
      },
      {keyword: "render",
      defintion: "The method ReactDom.render() is used to render (display) HTML elements:",
      visibility: false
      }
   ],
   foundWord: null
}

  addToDictionary = (passedWord )=>{
    alert(`The word - ${passedWord} - was not found. Would you like to add it to the dictionary?`)
    console.log("added to dictionary")
  }
  foundWord = (passedWord)=>{
    console.log("foundWord function fired")
  }

  isWordFound= (passedWord) => {
    
    let filteredIndex = this.state.frontEndWords.findIndex(item => 
      item.keyword === passedWord
    )    
    if(filteredIndex > -1){
      const foundWord = this.state.frontEndWords[filteredIndex]
    
      foundWord.visibility = true

      this.setState((prevState) => {
        return{
          foundWord: foundWord
        }
      })
      console.log(this.state)
     } else {
     
        this.addToDictionary(passedWord)
    }
 }

  render() {
    console.log(this.state)
    return (
      <div className="App ">
        <h1>front end dic·tion·ar·y</h1>
        <h4>Search your keyword</h4>
        <SearchWord isWordFound = {this.isWordFound} allWordsList = {this.state.frontEndWords}/>
        <DefintionCard allWordsList = {this.state.frontEndWords} isWordFound={this.isWordFound}/>
      </div>
    );
  }
}

export default App;
