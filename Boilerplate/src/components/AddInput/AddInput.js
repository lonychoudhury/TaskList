import React, { useEffect, useState,useRef } from 'react'
import "./AddInput.css"
import { v4 } from "uuid"
import TodoList from '../TodoList/TodoList'

function AddInput({
    setTodos, todos
}) {

    const [todo, setTodo] = useState("")

    const addTodo = () => {
        if(todo.trim()=="") return;
        let updatedTodos = [
            ...todos,
            {
                id: v4(),
                task: todo,
                completed: false
            }
        ]
        setTodos(updatedTodos);
        setTodo("")
    }
    
    // const inputRef= useRef();

    // useEffect(() => {
    //     inputRef.current.focus();
    //   },[]);

    // const mouseEnter=() =>{
    //     inputRef.current.style.backgroundColor= "white" 
    // }
    // const mouseLeave=() =>{
    //     inputRef.current.style.backgroundColor= "#e0d9d9" 
    // }

    return (
        <div className="input-container">
            <input 
                className="input" 
                value={todo} 
                onChange={(e) => setTodo(e.target.value)}
                placeholder="Add a new task here..."
                // ref= {inputRef}                    
                // onMouseEnter= {mouseEnter}
                // onMouseLeave= {mouseLeave}                
            />
            <button 
                className="add-btn"
                onClick={addTodo}
            >
                Add
            </button>
        </div>
    )
}

export default AddInput