export const COMPLETED_CHANGE = 'COMPLETED_CHANGE'

export const handleCompletedChange = (newCompletedTask, projectID) => ({
    type: COMPLETED_CHANGE,
    projectID: projectID,
    task: newCompletedTask
  })