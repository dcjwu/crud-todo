import {Component} from 'react'
import './app.css'
import Nav from "../nav/nav";
import SearchBar from "../search-bar/search-bar";
import FilterBar from "../filter-bar/filter-bar";
import TodoList from "../todo-list/todo-list";
import TodoListAdd from "../todo-list-add/todo-list-add";

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [
                {text: 'Create React App.', completed: false, id: 1},
                {text: 'Try to understand setState.', completed: false, id: 2},
                {text: 'Sleep 8h.', completed: false, id: 3},
            ],
            filter: 'all',
            search: ''
        }
        this.maxId = 4
    }

    addItem = (text) => {
        const newItem = {
            text,
            completed: false,
            id: this.maxId++
        }
        this.setState(({data}) => {
            return {
                data: [...data, newItem]
            }
        })
    }

    completeItem = (id) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) return {
                    ...item, completed: !item.completed
                }
                return item
            })
        }))
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }

    filterPost = (items, filter) => {
        switch (filter) {
            case 'completed':
                return items.filter(item => item.completed)
            case 'scheduled':
                return items.filter(item => item.completed === false)
            default:
                return items
        }
    }

    onFilterSelect = (filter) => {
        this.setState(({filter}))
    }

    searchTodo = (items, search) => {
        if (search.length === 0) return items

        return items.filter(item => {
            return item.text.indexOf(search) > -1
        })
    }

    onUpdateSearch = (search) => {
        this.setState({search})
    }

    render() {

        const {data, filter, search} = this.state
        const visibleData = this.filterPost(this.searchTodo(data, search), filter)

        return (
            <div className='app'>
                <Nav/>
                <div className='container center'>
                    <SearchBar onUpdateSearch={this.onUpdateSearch}/>
                    <FilterBar
                        data={data}
                        filter={filter}
                        onFilterSelect={this.onFilterSelect}/>
                    <TodoList
                        data={visibleData}
                        filter={filter}
                        completeItem={this.completeItem}
                        deleteItem={this.deleteItem}/>
                    <TodoListAdd onAdd={this.addItem}/>
                </div>
            </div>
        )
    }
}

export default App