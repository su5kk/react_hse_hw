export const PROJECT_ADD = 'PROJECT_ADD'

export const handleProjectAdd = (project) => {
    console.log(project)
  return {
    type: PROJECT_ADD,
    payload: project
  }
}