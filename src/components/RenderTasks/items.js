import React from "react";
import {connect} from 'react-redux'
import {Item} from './item'
import {Redirect} from 'react-router-dom'

const mapStateToProps = (state) => ({
    projects: state.project.projects,
    theme: state.theme.theme,
})


const ItemsComponent = ({projectID, theme, projects}) => {
    let checkProject = {};
    for (let i = 0; i < projects.length; i++) {
        const project = projects[i];
        if (project.id === projectID) {
            checkProject = project;
            break;
        }
    }
    if (checkProject.tasks === undefined) {
        return <Redirect to="/projects" />
    }
    let tasks = checkProject.tasks
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
