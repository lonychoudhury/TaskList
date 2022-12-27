
import React, { useState } from 'react'
import AddInput from '../AddInput/AddInput'
import Header from '../Header/Header'
import TodoList from '../TodoList/TodoList'
import "./Todo.css"
import TodoFooter from '../TodoFooter/TodoFooter'

function Todo() {

    const [todos, setTodos] = useState([])

    const calcNumberOfIncompletedTasks = () => {
        let count = 0;
        todos.forEach(todo => {
            if(!todo.completed) count++
        })
        return count
    }


    return (
        <div className="todo">
            <Header title="Tasks" />
            <AddInput 
                setTodos={setTodos}
                todos={todos}
            />
            <TodoList 
                todos={todos}
                setTodos={setTodos}
            />
            {/* <TodoFooter 
                numberOfIncompleteTasks={calcNumberOfIncompletedTasks()}
            /> */}
        </div>
    )
}

export default Todo
