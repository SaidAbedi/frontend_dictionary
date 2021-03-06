import React, { Component } from 'react'

class AddNewWord extends Component {
    state={
        keyword: null, 
        defintion: null, 
        visibility: false,
        id: null
    }
    handleSubmit = (e)=>{
        e.preventDefault()
        // To prevent empty entries
        if(this.state.keyword && this.state.defintion){
        // Check for duplicates
            this.props.checkForDuplicates(this.state)
            // this.props.addToDictionary(this.state)
        //To reset the input values
            this.setState({
                keyword: " ",
                defintion: " "
            })

        }
            else {
                alert("You must enter a value")
            }
    }

    handleChange = (e )=>{
        this.setState({
            [e.target.id]: e.target.value.toLowerCase()
        })
    }

    render( ){
        return (
            <form className="container col s12 m6 " onSubmit={this.handleSubmit}>
                <div class="input-field col s12 ">
                    <h1>add a new word</h1>
                    <label htmlFor="keyword"></label>
                    <input type="text" placeholder="Enter Your New Word"id="keyword" onChange={this.handleChange} value={this.state.keyword}/>
                    <label for="textarea1"></label>
                    <input type="text" placeholder="Enter Your New Definition"id="defintion" onChange={this.handleChange} value={this.state.defintion}/>
                    <button class="btn-floating btn-large blue"><i class="material-icons">+</i></button>
                </div>
             </form>
        )
        
    }
}
AddNewWord.defaultProps = {
    keyword: "not given"
}


export default AddNewWord