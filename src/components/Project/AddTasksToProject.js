import React from 'react'
import {TaskAdd} from '../TaskAdd/TaskAdd'
import {Items} from '../RenderTasks/items'

function AddTasksToProject (match) {
    return(
        <div>
            <TaskAdd projectID={match.match.params.projectID}/>
            <Items projectID={match.match.params.projectID}/>
        </div>
    )
}

export default AddTasksToProject;