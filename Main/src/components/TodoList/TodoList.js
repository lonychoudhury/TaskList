import React, { useEffect, useRef, useState } from 'react'
import TodoFooter from '../TodoFooter/TodoFooter'
import "./TodoList.css"

function TodoList({
    todos, setTodos
}) {
    const noOfListRenders= useRef(0)

    useEffect(() => {
        noOfListRenders.current=noOfListRenders.current+1;
      });

    const updateTask = (id) => {
        let updatedTasks = todos.map((todo) => {
            if(todo.id === id) {
                todo.completed = !todo.completed;
                return todo
            } else {
                return todo
            }
        });
        setTodos(updatedTasks)
    }

    const calcNumberOfIncompletedTasks = () => {
        let count = 0;
        todos.forEach(todo => {
            if(!todo.completed) count++
        })
        return count
    }

    return (
        <div className="todolist-container">
            <div className="todos-container">
                <div>
                    {
                        todos.map((todo, index) => (
                            <div 
                                className={`todo-item ${todo.completed && "todo-item-active"}`} 
                                onClick={() => updateTask(todo.id)}
                            >
                                {todo.task}
                            </div>
                        ))
                    }
                </div>
            </div>
            <div>
                <TodoFooter 
                    noOfListRenders={noOfListRenders.current}
                />
            </div>
        </div>
    )
}

export default TodoList