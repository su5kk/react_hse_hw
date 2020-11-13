import React from 'react'
import Item from './RenderTasks/item'
import TaskAdd from './TaskAdd/TaskAdd'
import styles from './MyToDoList.module.scss'
import classnames from 'classnames/bind'

const cx = classnames.bind(styles);


class MyToDoList extends React.Component {
    state = {
        tasks: [],
        theme: "light"
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

    handleThemeChange = event => {
        this.setState({theme: event.target.value});
    }

    render() {
        return (
            <div className={cx("container", {[`container-theme-${this.state.theme}`]: true})}>
                    <div className={cx("radios")}>
                        <div>
                            <input
                            type="radio"
                            name="theme"
                            id="light"
                            value="light"
                            checked={this.state.theme === "light"}
                            onChange={this.handleThemeChange}
                            />
                            <label htmlFor="light">Go light</label>
                        </div>
    
                        <div>
                            <input
                            type="radio"
                            name="theme"
                            id="dark"
                            value="dark"
                            checked={this.state.theme === "dark"}
                            onChange={this.handleThemeChange}
                            />
                            <label htmlFor="dark">Go dark</label>
                        </div>
                    </div>

                <h1 className={cx("heading", {[`heading-theme-${this.state.theme}`]: true})}>Add task</h1>
                <div>
                    <TaskAdd onSubmit={this.addTask} theme={this.state.theme} />
                </div>

                <h1 className={cx("heading", {[`heading-theme-${this.state.theme}`]: true})}>Current tasks are</h1>
                <div className={cx("task-style", {[`task-style-theme-${this.state.theme}`]: true})}>
                    {this.state.tasks.map(task => ( 
                    <Item 
                        key={task.id}
                        taskComplete={() => this.taskComplete(task.id)}
                        task = {task}
                        theme = {this.state.theme}
                    />
                ))} 
                </div>
            </div>
        )
    }
}
export default MyToDoList