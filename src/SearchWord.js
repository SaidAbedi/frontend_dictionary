import React, { Component} from 'react'


class SearchWord extends Component {
    state={
            keyword: null
    }
    handleChange = (e)=>{
        this.setState({
                [e.target.id]: e.target.value.toLowerCase().trim()
        })
        
    }
    handleSubmit = (e)=>{
        e.preventDefault()
        if(this.state.keyword){
            this.props.isWordFound(this.state.keyword)
            this.setState({
                keyword: " "
            })
        }else{
            alert("You must enter a value")
        }
       
    }

    render ( ){
        return(
            <form onSubmit={this.handleSubmit} className="input-field container col s6">
                <label htmlFor="name" ></label>
                <input placeholder="Search Your KeyWord" type="text" id="keyword" onChange={this.handleChange} value={this.state.keyword}/>
                <button className="waves-effect waves-light btn-large">SEARCH</button>
            </form>
        )
    }
}

export default SearchWord
