export const TASK_ADD = 'TASK_ADD'

export const handleTaskAdd = (task) => {
  return {
    type: TASK_ADD,
    payload: task
  }
}