import React from "react"

class Filter extends React.Component{
    constructor(){
        super()
        this.state = {
            filtering: false
        }
        this.applyChange = this.applyChange.bind(this)
    }
    
    applyChange(){
        this.setState(prevState => {
            return {
                filtering: !prevState.filtering
            }
        }, () => {
            this.props.hideTasks(this.state.filtering)
            })
    }
    
    render(){
        return (
            <div className="filter-box">
                <input 
                    type="checkbox"
                    checked={this.state.filterting}
                    onChange={this.applyChange}
                />
                <h5>Hide Completed</h5>
            </div>
        )
    }
}

export default Filter