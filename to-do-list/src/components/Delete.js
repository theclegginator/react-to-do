const Delete = ({ toDoId, handleDelete }) => {
    return (
        // passes back the toDoIndex prop in the handleDelete prop back to the App.js parent
        <button 
            onClick={() => handleDelete(toDoId)} 
            className='delete-button'
        >×</button> 
    )
}

export default Delete