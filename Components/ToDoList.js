import React from 'react'

function ToDoList(props){
    return (
        <div>
            {props.todoItems.length > 0 ? props.todoItems : <p>Nothing to do...</p>}
        </div>
    )
}

export default ToDoList