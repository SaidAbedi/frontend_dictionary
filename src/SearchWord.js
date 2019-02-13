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
        this.props.isWordFound(this.state.keyword)
        this.setState({
            keyword: " "
        })
       console.log(this.state)
    }

    render ( ){
        return(
            <form onSubmit={this.handleSubmit} className="input-field container col s6">
                <label htmlFor="name" ></label>
                <input placeholder="Search Your KeyWord" type="text" id="keyword" onChange={this.handleChange} value={this.state.keyword}/>
                <button className="waves-effect waves-light btn">SEARCH</button>
            </form>
        )
    }
}

export default SearchWord
