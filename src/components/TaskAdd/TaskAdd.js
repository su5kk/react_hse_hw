import React from 'react';
import shortid from 'shortid'
import styles from './TaskAdd.module.scss'
import classnames from 'classnames/bind'

const cx = classnames.bind(styles)

export default class TaskAdd extends React.Component {
    state = {
        name: '',
        description: ''
    }
    
    handleChange = event => {
        this.setState({
            name: event.target.value
        })
    }
    handleChangeDescription = event => {
        this.setState({
            description: event.target.value
        })
    }

    handleSubmit = (event) =>{
        event.preventDefault();
        this.props.onSubmit({
            name: this.state.name,
            description: this.state.description,
            completed: false,
            id: shortid.generate(),
            buttonText: "Tap to complete"
        })
        this.setState({
            name: '',
            description: ''
        })
    }

    render() {
        return ( 
            <form onSubmit={this.handleSubmit}>
                <input 
                    className={cx("input", {[`input-theme-${this.props.theme}`]: true})}
                    name="name"
                    value={this.state.name}
                    onChange={this.handleChange}
                    placeholder="type in a task"
                    theme={this.state.theme}
                />
                <input 
                    className={cx("input", {[`input-theme-${this.props.theme}`]: true})}
                    name="description"
                    value={this.state.description}
                    onChange={this.handleChangeDescription}
                    placeholder="type in a description"
                    theme={this.state.theme}
                />
                <button className={cx("add-btn", {[`add-btn-theme-${this.props.theme}`]: true})} onClick={this.handleSubmit}>add</button>
            </form>
        )
    }
};
