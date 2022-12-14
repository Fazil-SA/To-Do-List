import React from 'react'
import {useState , useEffect , useRef} from 'react'

function TodoForm(props) {
const [input, setInput] = useState(props.edit ? props.edit.value : '');

const inputRef = useRef(null)

useEffect(()=>{
    inputRef.current.focus()
})

const handleChange = e => {
    setInput(e.target.value)
}
const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit({
        id:Date.now(),
        text: input
    })
    setInput('')
}

    return (
      <form className="todo-form" onSubmit={handleSubmit}>
        {props.edit ? (
          <>
          <input
          type="text"
          value={input}
          onChange={handleChange}
          ref={inputRef}
          name="text"
          className="todo-input"
          placeholder="Add-A-Todo"
        />
        <button className="todo-button">Add Todo</button>
        </>
        ) : (
          <>
          <input
          type="text"
          value={input}
          onChange={handleChange}
          ref={inputRef}
          name="text"
          className="todo-input"
          placeholder="Add-A-Todo"
        />
        <button className="todo-button">Add Todo</button>
        </>
        )}

        
      </form>
    );
}

export default TodoForm
