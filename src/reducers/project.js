import { PROJECT_ADD } from "../actions/project" 
import { TASK_ADD } from '../actions/task'
import {COMPLETED_CHANGE} from "../actions/tasks"

const initialState = {
    projects: [],
}

export const projectReducer = (state = initialState, action) => {
    switch (action.type) {
      case PROJECT_ADD: {
        return {
          projects: [...state.projects, action.payload],
        }
      }

      case TASK_ADD: {
        let changedProject = {};
        for (let i = 0; i < state.projects.length; i++) {
            let project = state.projects[i];
            if (project.id === action.projectID) {
                changedProject = {
                  ...project,
                  tasks: [...project.tasks, action.task]
                }
                state.projects[i] = changedProject;
                break;
            }
        }
        return {
          projects: [...state.projects],
        }
      }
      case COMPLETED_CHANGE: {
        for (let i = 0; i < state.projects.length; i++) {
          let project = state.projects[i];
          if (project.id === action.projectID) {
              state.projects[i].tasks[action.task.id] = action.task
              break;
          }
      }
      return {
        projects: [...state.projects]
      }
      }
      default:
        return state
      }
      
  }