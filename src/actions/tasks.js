export const COMPLETED_CHANGE = 'COMPLETED_CHANGE'

export const handleCompletedChange = (newCompletedTask) => ({
    type: COMPLETED_CHANGE,
    payload: newCompletedTask
  })