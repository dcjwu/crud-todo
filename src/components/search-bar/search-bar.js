import {Component} from 'react'
import './search-bar.css'

class SearchBar extends Component {
    render() {
        return (
            <>
                <input className='search' type='text' placeholder='Search...'/>
            </>
        )
    }
}

export default SearchBar