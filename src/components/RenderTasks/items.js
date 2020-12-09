import React from "react";
import {connect} from 'react-redux'
import {Item} from './item'
import {Redirect} from 'react-router-dom'

const mapStateToProps = (state) => ({
    projects: state.project.projects,
    theme: state.theme.theme,
})


const ItemsComponent = ({projectID, theme, projects}) => {
    
    if (projects[projectID] === undefined) {
        return <Redirect to="/projects" />
    }
    let tasks = projects[projectID].tasks
    return (
        <div>
        {
            tasks.map(task => (
                <Item
                task={task}
                theme = {theme}
                projectID = {projectID}
                />
            ))
        }
        </div>
    )
}

export const Items = connect(mapStateToProps, null)(ItemsComponent)
