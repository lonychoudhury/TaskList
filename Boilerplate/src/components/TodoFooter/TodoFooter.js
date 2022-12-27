import React from 'react'
import "./TodoFooter.css"
import { Link } from "react-router-dom"

function TodoFooter({
    noOfListRenders
}) {
    return (
        <div className="todo-footer">
            <p>No of times the list has rendered= {noOfListRenders}</p>
            
        </div>
    )
}

export default TodoFooter
