import React from "react";
import {connect} from 'react-redux'
import {Item} from './item'

const mapStateToProps = (state) => ({
    tasks: state.task.tasks,
    theme: state.theme.theme
})


const ItemsComponent = ({tasks, theme}) => {
    return (
        <div>
        {
            tasks.map(task => (
                <Item
                task={task}
                theme = {theme}
                />
            ))
        }
        </div>
    )
}

export const Items = connect(mapStateToProps, null)(ItemsComponent)
