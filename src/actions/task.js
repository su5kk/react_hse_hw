import { projectReducer } from "../reducers/project"

export const TASK_ADD = 'TASK_ADD'

export const handleTaskAdd = (task, projectID) => {
  return {
    type: TASK_ADD,
    task: task,
    projectID: projectID
  }
}