import Delete from './Delete'

const ToDo = ({ todos, handleDelete }) => {
    return (
        <div>
            {/* conditionally render the prompt if todos state is an empty array */}
            {todos.length === 0 && <p>✨ Add some items to your to-do list! ✨</p>}
            {
                todos.map((todo) => (
                    <div className='todo' key={todo.id}>
                        {todo.name}
                        <Delete toDoId={todo.id} handleDelete={handleDelete}/>
                    </div>
                ))
            }
        </div>
    )
}

export default ToDo