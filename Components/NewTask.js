import React from 'react'

class NewTask extends React.Component{
    constructor(){
        super()
        this.state = {
            id: 0,
            content: "",
            completed: false,
            handleChange: ""
        }
        this.onChange = this.onChange.bind(this)
    }
    
    static getDerivedStateFromProps(props, state){
        if(props.id !== state.id){
            return {
                id: props.id
            }
        }
        return null
    }
    
    onChange(event){
        const {name, value} = event.target
        this.setState({[name]: value})
        this.setState({handleChange: this.props.handleChange})
    }
    
    render(){
        return (
            <div className="new-task">
                <input 
                    name="content" 
                    value={this.state.content} 
                    type="text" 
                    onChange={this.onChange}
                />
                <button onClick={() => this.props.addTask(this.state)}>Add</button>
            </div>
        )
    }
}

export default NewTask