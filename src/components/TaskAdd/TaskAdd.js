import React from 'react';
import shortid from 'shortid'

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
                <input name="name"
                    value={this.state.name}
                    onChange={this.handleChange}
                    placeholder="type in a task"
                />
                <input name="description"
                    value={this.state.description}
                    onChange={this.handleChangeDescription}
                    placeholder="type in a description"
                />
                <button onClick={this.handleSubmit}>add</button>
            </form>
        )
    }
};
