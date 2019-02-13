import React from 'react'

const DefintionCard = ({allWordsList})=> {
    const wordList = allWordsList.map(item =>{
        return 
        if(item.visibility === true){
            return (
            <div className="card blue-grey darken-1">
                <div className="card-content white-text" key={item.id}>
                    <h3>Word: {item.keyword}</h3>
                    <p><strong>Defintion: {item.defintion}</strong></p>
                </div>
            </div>)
        }
    })
    return (
        <div >
            {wordList}
        </div>
    )
}

export default DefintionCard