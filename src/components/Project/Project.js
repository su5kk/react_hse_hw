import React from 'react'
import {TaskAdd} from '../TaskAdd/TaskAdd'
import styles from './Project.module.scss'
import classnames from 'classnames/bind'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'

const cx = classnames.bind(styles);

const ProjectComponent = ({
  project,
  theme,
}) => {
    return (
    <div className={cx("project-block", {[`project-block-theme-${theme}`]: true})}>
        
            <div className={cx("project-blocks", {[`project-blocks-theme-${theme}`]: true})}>
                
                    <h3 className={cx("project-name", {[`project-name-theme-${theme}`]: true})}>
                        <Link to={`/projects/${project.id}`}>
                            {project.name}
                        </Link>
                    </h3>
                
            </div>
        
    </div>
    );
}

export const Project = connect(null, null)(ProjectComponent);