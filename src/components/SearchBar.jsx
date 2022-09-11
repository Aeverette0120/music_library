import React, { useState } from "react"

const SearchBar = ({ handleSearch}) => {
    const [searchTerm, setSearchTerm] = useState('');


    return (
        <form> 

            <input type="text" placeholder="Enter a search term here..."
            onChange={ (e) => handleSearch(e, e.target.value)} 
            />
            <input type="submit"  value='clear'/>

        </form>

    )
}
export default SearchBar