import TodoListItem from "../todo-list-item/todo-list-item";
import './todo-list.css'

const TodoList = ({data, completeItem, deleteItem, filter}) => {

    const elements = data.map(item => {
        const {id, ...otherProps} = item
        return <TodoListItem
            key={id}
            {...otherProps}
            completeItem={(e) => completeItem(id)}
            deleteItem={(e) => deleteItem(id)}/>
    })

    return (
        <div className='todo-list'>
            {elements.length === 0 && filter === 'completed'
                ?
                <h1>Completed To-do list is empty.</h1>
                :
                elements.length === 0 && filter === 'scheduled'
                    ?
                    <h1>Scheduled To-do list is empty.</h1>
                    :
                    elements.length === 0 && filter === 'all'
                        ?
                        <h1>Please, set a new To-do.</h1>
                        :
                        elements
            }
        </div>
    )
}

export default TodoList