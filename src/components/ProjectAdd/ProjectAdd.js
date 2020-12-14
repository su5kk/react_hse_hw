import React, {useState} from 'react';
import styles from './ProjectAdd.module.scss'
import classnames from 'classnames/bind'
import { handleProjectAdd } from "../../actions/project";
import { connect } from "react-redux";
import { nanoid } from 'nanoid'

const cx = classnames.bind(styles)

const mapStateToProps = (state) => ({
  projects: state.project.projects,
  theme: state.theme.theme,
})

const mapDispatchToProps = (dispatch) => ({
  dispatchOnProjectAdd: (projectInfo) => dispatch(handleProjectAdd(projectInfo))
});

  const ProjectAddComponent = ({projects, dispatchOnProjectAdd, theme}) => {
    const [project, setProject] = useState({
      id: nanoid(),
      name: '',
      tasks: []
  })

  const onNameChange = (e) => {
      e.persist()
      setProject(previousProject => ({
          ...previousProject,
          name: e.target.value
      }))
  }

  // to-do: id addition
  const onSubmit = () => {
    setProject(previousProject => ({
      ...previousProject,
      id: nanoid()
    }))
    console.log(project)
    dispatchOnProjectAdd(project)
    setProject(previousState => ({
      ...previousState,
      name: ''
    }))
  }
  
  return (
    <div className={cx("project-container", {[`project-container-theme-${theme}`]: true})}>
    <h1 className={cx("project-heading", {[`project-heading-theme-${theme}`]: true})}>Add project</h1>
    <input 
        className={cx("project-input", {[`project-input-theme-${theme}`]: true})}
        name="name"
        value={project.name}
        onChange={onNameChange}
        placeholder="type in a project"
        theme={theme}
    />
    <button className={cx("project-add-btn", {[`project-add-btn-theme-${theme}`]: true})} onClick={onSubmit}>go!</button>
    </div>
  )
}
  

export const ProjectAdd = connect(mapStateToProps, mapDispatchToProps)(ProjectAddComponent)