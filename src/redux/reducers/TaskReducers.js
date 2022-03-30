import {ActionTypes} from '../constants/productConstants';

export const taskManager = {
    allTasks: [],
    // onlyCompletedTasks : [],
  };
  
  const taskMapper = (allTask,payload) => {
    const newTask = allTask.map(task => {
      if (task.id === payload.id) {
        return {...task,status: payload.status};
      } else {
        return task;
      }

    } );
    return newTask
  }

  const deleteTasks = (allTask,payload) => {
    console.log('payload=====>', payload.id)
    

    const removeTask = allTask.filter(task => {
      console.log('task=====>', task.id)
      if (task.id === payload.id) {
        return false
        
      } else 
      {
        return true
      }

    } );
    return removeTask
  }

  const TaskReducers = (state = taskManager, action) => {
    switch (action.type) {
      case ActionTypes.CREATE_TASKS:
        return {
          ...state,
          allTasks: [...state.allTasks, action.payload],
        };

        case ActionTypes.CHANGE_STATUS:
          return {
            ...state,
            allTasks: taskMapper(state.allTasks, action.payload),
            
          };

          case ActionTypes.DELETE_TASK:
          return {
            ...state,
            allTasks: deleteTasks(state.allTasks, action.payload),
            
          };
         

         

      default:
        return state;
    }
  };
  
  export default TaskReducers;