import { TASK_ADD } from "../actions/task" //this action should be created
import {COMPLETED_CHANGE} from "../actions/tasks"

const initialState = {
  tasks: []
}


// In actions/task: DESCRIPTION_CHANGE, NAME_CHANGE, ID_CHANGE, COMPLETED_CHANGE
export const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case TASK_ADD: {
      return {
        tasks: [...state.tasks, action.payload] // payload is a change
      }
    }
    case COMPLETED_CHANGE: {
      let newTasks = [...state.tasks]
      newTasks[action.payload.id] = action.payload
      return {
        tasks: newTasks
      }
    }
    default:
      return state
    }
}