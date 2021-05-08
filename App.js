import todosTasks from './todoTasks'
import React from 'react'
import Task from './Components/Task'
import ToDoList from './Components/ToDoList'
import NewTask from './Components/NewTask'
import Header from './Components/Header'
import Filter from './Components/Filter'

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      todos: todosTasks,
      isHidden: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.addTask = this.addTask.bind(this)
    this.hideTasks = this.hideTasks.bind(this)
  }

  handleChange(id){
    this.setState(prevState => {
      const newTodos = prevState.todos.map(task => {
        if(task.id === id){
          task.completed = !task.completed
        }
        return task
      })
      return {
        todos: newTodos
      }
    })
  }
  
  hideTasks(filter){
      this.setState({isHidden: filter})
  }

  addTask(content){
      this.setState(prevState => {
          const newTodos = prevState.todos
          newTodos.push({id: content.id, content: content.content, completed: content.completed})
          return {
              todos: newTodos
          }
        })
  }

  render(){
    const todoItems = this.state.todos
        .filter(val => {
            if(this.state.isHidden){
                return val.completed ? false : true
            } else {
                return true
            }
        })
        .map(item => <Task key={item.id} task={item} handleChange={this.handleChange}/>)
    return (
      <div className="App">
        <Header />
        <div className="list">
            <Filter hideTasks={this.hideTasks}/>
            <ToDoList todoItems={todoItems}/>
            <NewTask 
                id={todoItems.length + 1} 
                addTask={this.addTask} 
                handleChange={this.handleChange}
            />
        </div>
      </div>
    )
  }
}

export default App