import React from 'react'

function Task(props){
    const finishedTask = {
        color: "grey",
        textDecoration: "line-through"
    }
    return (
        
        <label className="todo-item">
            <input 
                type="checkbox"
                checked={props.task.completed}
                onChange={() => props.handleChange(props.task.id)}
            />
            <p style={props.task.completed ? finishedTask : null}>{props.task.content}</p>
        </label>
    )
}

export default Task