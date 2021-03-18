import Button from './Button'
import { useState } from 'react'

// destructuring to define the props of title
const Header = ({ title, handleAdd }) => {
    // component state set to input text value
    const [inputText, setInput] = useState('');

    return (
        <div>
            <h1 className='title'>{title}</h1> 
            <form 
                onSubmit={(e) => {
                    // prevent page reload upon form submission
                    e.preventDefault()
                    // pass text value from state to parent component (App)
                    handleAdd(inputText); 
                    // lastly, clear out text after submission
                    setInput('');
                }}>
                <input 
                    onChange={(e) => setInput(e.target.value)} 
                    value={inputText} 
                    type='text'
                    placeholder='Add a task!' 
                ></input>
                <Button text={'Add'} type='submit' />
            </form>
        </div>
    )
}

export default Header
