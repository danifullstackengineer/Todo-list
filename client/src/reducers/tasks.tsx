import ITasks from '../Interfaces/tasks';

const initialState:ITasks = {
    tasks: [null]
}

const reducer = (state:any, action:any) => {
    switch(action.type){
        case "ADD_TASK":
            return state;
        case "REMOVE_TASK":
            return state;
        case "REMOVE_ALL_TASKS":
            return state;
        case 'GET_ALL_TASKS':
            console.log("my balls!")
            return state;
        default: return initialState;
    }
}

export {reducer, initialState}