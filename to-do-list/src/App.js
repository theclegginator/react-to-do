import Header from './components/Header.js'
import ToDo from './components/ToDo.js'
import { useState } from 'react'


function App() {
  // setting default state for the todo list
  const [todos, setTodo] = useState([]);
  
  // todo state handling functions
  const handleDelete = (index) => {
    setTodo(todos.filter((todo) => (todo.id !== index)));
  }
  const handleAdd = (inputText) => {
    // use state from child component for text value
    // don't allow blank strings
    if (inputText) {
      // use unix timestamp to create unique ID
      setTodo(prevState => [...prevState, {name: inputText, id: Date.now()}]);
    }
  }

  return (
    <div className="App container">
      <Header title={`Cody's To-Do List`} handleAdd={handleAdd} />
      <ToDo todos={todos} handleDelete={handleDelete} />
    </div>
  );
}

export default App;
