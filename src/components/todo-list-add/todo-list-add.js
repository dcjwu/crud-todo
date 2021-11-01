import {Component} from 'react'
import './todo-list-add.css'

class TodoListAdd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
    }

    onValueChange = (e) => {
        this.setState({
            text: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault()
        if (this.state.text < 3 || !this.state.text) return
        this.props.onAdd(this.state.text)
        this.setState({
            text: ''
        })
    }

    render() {

        const {text} = this.state

        return (
            <div className='todo-list-add'>
                <input className='todo-list-add-input'
                       type="text"
                       placeholder='Add new To-do...'
                       value={text}
                       onChange={this.onValueChange}/>
                <button className='todo-list-add-btn'
                        onClick={this.onSubmit}>
                    <i className="fas fa-plus-circle"/>
                </button>
            </div>
        )
    }
}

export default TodoListAdd