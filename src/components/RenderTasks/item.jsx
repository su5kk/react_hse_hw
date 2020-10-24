import React from 'react'

export default class Item extends React.Component {
    render() {
        return (
            <div className="task-blocks">
                <p className="task-name">{this.props.task.name}</p>
                <p className="task-completeness">Is it completed: {this.props.task.completed.toString()}</p>
                <p className="task-description">{this.props.task.description}</p>   
                <button
                    onClick={this.props.taskComplete} 
                    className="btn">{this.props.task.buttonText}
                </button>
            </div>
        )
    }
}