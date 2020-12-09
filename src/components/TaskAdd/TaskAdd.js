import React, {useState} from 'react';
import styles from './TaskAdd.module.scss'
import classnames from 'classnames/bind'
import { handleTaskAdd } from "../../actions/task";
import { connect } from "react-redux";
import { Redirect } from 'react-router-dom';

const cx = classnames.bind(styles)

const mapStateToProps = (state) => ({
  projects: state.project.projects,
  theme: state.theme.theme,
  tasks: state.task.tasks
})

const mapDispatchToProps = (dispatch) => ({
  dispatchOnTaskAdd: (taskInfo) => dispatch(handleTaskAdd(taskInfo))
});

  const TaskAddComponent = ({projects, dispatchOnTaskAdd, theme, projectID, tasks}) => {
    const [task, setTask] = useState({
      id: 0,
      name: '',
      description: '',
      completed: false,
      buttonText: "Tap to complete"
  })
  
  const onNameChange = (e) => {
      e.persist()
      setTask(previousTask => ({
          ...previousTask,
          name: e.target.value
      }))
  }

  const onDescriptionChange = (e) => {
      e.persist()
      setTask(previousTask => ({
          ...previousTask,
          description: e.target.value
      }))
  }
  const onSubmit = () => {
    setTask(previousTask => ({
      ...previousTask,
      id: projects[projectID].tasks.length + 1,
      completed: false,
      buttonText: "Tap to complete"
    }))
    projects[projectID].tasks = [...projects[projectID].tasks, task]
    console.log("Added")
    console.log(projects[projectID].tasks)
  }
  
  return (
    <div className={cx("container", {[`container-theme-${theme}`]: true})}>
    <h1 className={cx("heading", {[`heading-theme-${theme}`]: true})}>Add task</h1>
    <input 
        className={cx("input", {[`input-theme-${theme}`]: true})}
        name="name"
        value={task.name}
        onChange={onNameChange}
        placeholder="type in a task"
        theme={theme}
    />
    <input 
        className={cx("input", {[`input-theme-${theme}`]: true})}
        name="description"
        value={task.description}
        onChange={onDescriptionChange}
        placeholder="type in a description"
        theme={theme}
    />
    <button className={cx("add-btn", {[`add-btn-theme-${theme}`]: true})} onClick={onSubmit}>add</button>
    </div>
  )
}
  

export const TaskAdd = connect(mapStateToProps, mapDispatchToProps)(TaskAddComponent)