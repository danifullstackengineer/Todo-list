import {combineReducers} from 'redux';
import {reducer} from './tasks';

export const reducers = combineReducers({
    reducer,
})
export type RootState = ReturnType<typeof reducers>