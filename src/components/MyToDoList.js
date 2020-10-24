import React from 'react'
import './MyToDoList.css'
import Item from './RenderTasks/item'
import TaskAdd from './TaskAdd/TaskAdd'

class MyToDoList extends React.Component {
    state = {
        tasks: []
    }

    addTask = task => {
        const tasksUpdated = [task, ...this.state.tasks]
        this.setState({
            tasks: tasksUpdated
        })
    }

    taskComplete = id => {
        this.setState({
            tasks: this.state.tasks.map(task => {
                if (task.id === id) {
                    return {
                        ...task,
                        completed: !task.completed,
                        buttonText: task.buttonText === "Tap to complete" ? "Tap to uncomplete" : "Tap to complete"
                    }
                } else {
                    return task
                }
            }),
        })   
    }

    render() {
        return ( 
        <div>
            <h1>Add task</h1>
            <div>
                <TaskAdd onSubmit={this.addTask} />
            </div>

            <h1>Current tasks are</h1>
            <div className="task-style">
                {this.state.tasks.map(task => ( 
                <Item 
                    key={task.id}
                    taskComplete={() => this.taskComplete(task.id)}
                    task = {task}
                />
            ))} 
            </div>
        </div>
        )
    }
}
export default MyToDoList