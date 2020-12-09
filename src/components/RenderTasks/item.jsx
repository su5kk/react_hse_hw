import React from "react";
import { connect } from "react-redux";
import styles from './item.module.scss'
import classnames from 'classnames/bind'
import {handleCompletedChange} from "../../actions/tasks"

const cx = classnames.bind(styles)

const mapDispatchToProps = (dispatch) => ({
  dispatchOnCompletedChange: (newCompleted, projectID) => dispatch(handleCompletedChange(newCompleted, projectID))
})

const ItemComponent = ({
  task,
  theme,
  projectID,
  dispatchOnCompletedChange
}) => {
    const onCompletedChange = (e) => {
      e.preventDefault()
      dispatchOnCompletedChange({
        id: task.id,
        name: task.name,
        description: task.description,
        completed: !task.completed,
        buttonText: task.completed ? "Tap to complete" : "Tap to uncomplete"
      }, projectID)
      
    }
    return (
    <div className={cx("task-blocks", {[`task-blocks-theme-${theme}`]: true})}>
        <p className={cx("task-name", {[`task-name-theme-${theme}`]: true})}>{task.name}</p>
        <p className={cx("task-completeness", {[`task-completeness-theme-${theme}`]: true})}>Is it completed: {String(task.completed)}</p>
        <p className={cx("task-description", {[`task-description-theme-${theme}`]: true})}>{task.description}</p>   
        <button
            onClick={onCompletedChange} 
            className={cx("btn", {[`btn-theme-${theme}`]: true})}>{task.buttonText}
        </button>
    </div>
    );
}

export const Item = connect(null, mapDispatchToProps)(ItemComponent);