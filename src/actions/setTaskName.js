import { SET_TASK_NAME } from './actionConstants';

export const setTaskName = (taskId, name) => {
   
    console.log(`inside action ${name}`);
    return {
        type: SET_TASK_NAME,
        taskId,
        name
       
    }
}