import { combineReducers } from "redux";
import taskReducer from './reducers/task'

export const rootReducer = combineReducers({
    tasks: taskReducer,
})

export type RootState = ReturnType<typeof rootReducer>