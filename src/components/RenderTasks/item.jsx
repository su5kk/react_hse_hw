import React from 'react'
import styles from './item.module.scss'
import classnames from 'classnames/bind'

const cx = classnames.bind(styles)

export default class Item extends React.Component {

    render() {
        return (
            <div className={cx("task-blocks", {[`task-blocks-theme-${this.props.theme}`]: true})}>
                <p className={cx("task-name", {[`task-name-theme-${this.props.theme}`]: true})}>{this.props.task.name}</p>
                <p className={cx("task-completeness", {[`task-completeness-theme-${this.props.theme}`]: true})}>Is it completed: {this.props.task.completed.toString()}</p>
                <p className={cx("task-description", {[`task-description-theme-${this.props.theme}`]: true})}>{this.props.task.description}</p>   
                <button
                    onClick={this.props.taskComplete} 
                    className={cx("btn", {[`btn-theme-${this.props.theme}`]: true})}>{this.props.task.buttonText}
                </button>
            </div>
        )
    }
}