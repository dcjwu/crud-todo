import './todo-list-item.css'

const TodoListItem = ({text, completed, completeItem, deleteItem}) => {

    let classNames = 'todo-list-item'
    if (completed) {
        classNames += ' completed'
    }

    return (
        <div className={classNames}>
            {/*<p className="todo-text">{text}</p>*/}
            <input type="text" className="todo-text" defaultValue={text}/>
            <div className='todo-list-btns'>
                <button
                    className='todo-list-btn green'
                    onClick={completeItem}>
                    {completed ? <i className="fas fa-redo-alt"/> : <i className="fas fa-thumbs-up"/>}
                </button>
                <button className='todo-list-btn red'
                        onClick={deleteItem}>
                    <i className="far fa-window-close"/>
                </button>
            </div>
        </div>
    )
}

export default TodoListItem