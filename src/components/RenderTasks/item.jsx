import React from 'react'

export default class Item extends React.Component {
    handleClick = () => {
        let ID = this.props.task.id;
        let completeness = this.props.task.completed;
        if (completeness === false)
        {
            completeness = !completeness;
        }
        console.log("The " + ID + " task is completed. Status is: " + completeness);
    }
   
    render() {
        return (
            <div className="task-blocks">
                <p className="task-name">{this.props.task.name}</p>
                <p className="task-completeness">Is it completed: {this.props.task.completed.toString()}</p>
                <p className="task-description">{this.props.task.description}</p>
                <p className="task-id">ID: {this.props.task.id}</p>
                <button onClick={this.handleClick} className="btn">Complete this task</button>
            </div>
        )
    }
}