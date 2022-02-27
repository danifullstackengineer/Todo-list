
import { stat } from 'fs/promises';
import ITasks from '../Interfaces/tasks';

const initialState:[] = []

const reducer = (state:any, action:any):any => {
    switch(action.type){
        case "ADD_TASK":
            if(state === initialState){
                return [action.payload]
            }
            return [...state, action.payload];
        case "REMOVE_TASK":
            const newState = state.filter((task:any):(ITasks | undefined) => 
                task._id !== action.payload ? task : undefined
            )
            return newState;
        case "REMOVE_ALL_TASKS":
            return initialState;
        case 'GET_ALL_TASKS':
            return action.payload;
        case 'CURRENT_TASK':
            return action.payload;
        case 'UPDATE_TASK':
            state = {
                _id: action.payload.id,
                completed: action.payload.completed,
                createdAt: action.payload.createdAt,
                task: action.payload.task
            }
            return state;
        default: return initialState;
    }
}

export {reducer, initialState}