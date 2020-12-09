import React from 'react'
import styles from '../MyToDoList.module.scss'
import classnames from 'classnames/bind'
import {connect} from 'react-redux'
import {Project} from './Project'
import {ProjectAdd} from '../ProjectAdd/ProjectAdd'

const cx = classnames.bind(styles);

const mapStateToProps = (state) => ({
    projects: state.project.projects,
    theme: state.theme.theme
    
})

const ProjectsComponent = ({projects, theme}) => {
    return (
        <div>
        <ProjectAdd />
        <h1>Current projects are: </h1>
        {
            
            projects.map(project => (
                <Project
                project={project}
                theme = {theme}
                />
            ))
        }
        </div>
    )
}

export const Projects = connect(mapStateToProps, null)(ProjectsComponent)