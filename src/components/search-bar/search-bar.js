import {Component} from 'react'
import './search-bar.css'

class SearchBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            search: ''
        }
    }

    onUpdateSearch = (e) => {
        const search = e.target.value
        this.setState({search})
        this.props.onUpdateSearch(search)
    }

    render() {
        return (
            <>
                <input className='search'
                       type='text'
                       placeholder='Search...'
                       value={this.state.search}
                       onChange={this.onUpdateSearch}/>
            </>
        )
    }
}

export default SearchBar