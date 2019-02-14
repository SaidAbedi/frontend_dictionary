import React, { Component } from 'react';
import './App.css';
import SearchWord from './SearchWord'
import DefintionCard from './components/DefintionCard'
import AddNewWord from './components/AddNewWord'

class App extends Component {
  state = {
    // Dummy Words for testing
    frontEndWords: [
      {keyword: "function",
      defintion: "A JavaScript function is a block of code designed to perform a particular task",
      visibility: false,
      key: 0
    
      },
      {keyword: "render",
      defintion: "The method ReactDom.render() is used to render (display) HTML elements:",
      visibility: false, 
      key: 1
      }
   ],
   foundWord: null
}

  addToDictionary = (passedWord)=>{
    alert(`The word - ${passedWord} - was not found. Would you like to add it to the dictionary?`)

    const frontEndWords = [...this.state.frontEndWords, passedWord]
    this.setState({frontEndWords: frontEndWords})
    alert(`You added ${passedWord} in the dictionary`)
  }
  
  // Argument from the SearchWord Component
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
      // console.log(this.state.frontEndWords)
     } else {
     
        this.addToDictionary(passedWord)
        console.log(`You added ${passedWord} in the dictionary`)
    }
 }
  checkForDuplicates = (passedWord) =>{
    let filteredIndex = this.state.frontEndWords.findIndex(item => 
      item.keyword === passedWord.keyword
      
    )  
    if(filteredIndex > -1){
      alert("This word already exists")
  } else{
    this.addToDictionary(passedWord)
  }
}

  render() {
    return (
      <div className="App container">
        <h1>front end dic·tion·ar·y</h1>
        <h4>Search your keyword</h4>
        <SearchWord isWordFound = {this.isWordFound} allWordsList = {this.state.frontEndWords}/>
        <DefintionCard allWordsList = {this.state.frontEndWords} isWordFound={this.isWordFound}/>
        <AddNewWord 
        addToDictionary={this.addToDictionary}
        checkForDuplicates = {this.checkForDuplicates}
        />
      </div>
    )
  }
}

export default App;
