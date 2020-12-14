import React, {useState} from 'react';
import styles from './TaskAdd.module.scss'
import classnames from 'classnames/bind'
import shortid from 'shortid'
import { handleTaskAdd } from "../../actions/task";
import { connect } from "react-redux";

const cx = classnames.bind(styles)

const mapStateToProps = (state) => ({
  tasks: state.task.tasks,
  theme: state.theme.theme
})

const mapDispatchToProps = (dispatch) => ({
  dispatchOnTaskAdd: (taskInfo) => dispatch(handleTaskAdd(taskInfo))
});

  const TaskAddComponent = ({tasks, dispatchOnTaskAdd, theme}) => {
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
      id: tasks.length + 1,
      completed: false,
      buttonText: "Tap to complete"
    }))
    console.log(task)
    dispatchOnTaskAdd(task)
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
