import './filter-bar.css'

const FilterBar = ({data, filter, onFilterSelect}) => {

    const completedItem = data.filter(item => item.completed === true)
    const notCompletedItem = data.filter(item => item.completed === false)

    const buttonsData = [
        {name: 'all', label: 'All'},
        {name: 'completed', label: 'Completed'},
        {name: 'scheduled', label: 'Scheduled'}
    ]

    const buttons = buttonsData.map(({name, label}) => {
        const active = filter === name
        const clazz = active ? 'active' : ''
        return (
            <button className={`btn ${clazz}`}
                    key={name}
            onClick={() => onFilterSelect(name)}>
                <span className='btn-inner'>
                        <div className={name === 'all' ? 'btn-bg grey' : name === 'completed' ? 'btn-bg green' : 'btn-bg red'}>
                            {name === 'all' ? <i className="fas fa-inbox"/> : name === 'completed' ?
                                <i className="fas fa-check"/> : <i className="fas fa-calendar-alt"/>}
                        </div>
                        <p className='btn-name'>{label}</p>
                    </span>
                {name === 'all' ? <p className='btn-count'>{data.length}</p> : name === 'completed' ?
                    <p className='btn-count'>{completedItem.length}</p> :
                    <p className='btn-count'>{notCompletedItem.length}</p>}
            </button>
        )
    })

    return (
        <div className='btn-group'>
            {buttons}
        </div>
    )
}

export default FilterBar