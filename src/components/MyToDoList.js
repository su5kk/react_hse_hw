import React from 'react'
import './MyToDoList.css'
import Item from './RenderTasks/item'

class MyToDoList extends React.Component {
    state = {
        tasks: [
            {
                id: 1,
                name: 'Study',
                description: 'Study for 5 minutes',
                completed: false
            },
            {
                id: 2,
                name: "Meet with Ryan",
                description: 'Meet with Ryan at 10 a.m.',
                completed: true
            },
            {
                id: 3,
                name: "JBA extensive training",
                description: "Solve problems in order to get a better understanding",
                completed: true
            },
            {
                id: 4,
                name: "Hit the gym",
                description: "Triceps, biceps and push-ups",
                completed: false
            }
        ]
    }

    render() {
        return <div>
            <h1>Click the button to change completeness of the task</h1>
            <h2>Current tasks are:</h2>
            <div className="task-style">
            {this.state.tasks.map(task => <Item task = {task}/>)} 
            </div>
        </div>
    }
}
export default MyToDoList