import React, { useState } from 'react'

function Search({ users , filteredUser }) {
    

    const [text, setText] = useState("")
    return (
        <div className='search'>
            <input
                className='searchBar'
                type="text"
                value={text}
                onChange={(e) => {
                    setText(e.target.value)
                }
                } />
            <button className='searchButton' onClick={()=>filteredUser(text)}>Search</button>
        </div>
    )
}

export default Search