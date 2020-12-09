import { PROJECT_ADD } from "../actions/project" 
import {COMPLETED_CHANGE} from "../actions/tasks"

const initialState = {
    projects: []
}

export const projectReducer = (state = initialState, action) => {
    switch (action.type) {
      case PROJECT_ADD: {
        console.log()
        return {
          projects: [...state.projects, action.payload]
        }
      }
      // Unstable and buggy
      /*
      case COMPLETED_CHANGE: {
      let newTasks = [...state.projects[action.projectID].tasks]
      newTasks[action.task.id] = action.task
      console.log(newTasks)

      let currentProj = {...state.projects[action.projectID], tasks: newTasks}
      state.projects[action.projectID] = currentProj

      let newProjects = [...state.projects]
      console.log(newProjects)
      return {
        projects: newProjects
      }
    }
    */
      default:
        return state
      }
      
  }