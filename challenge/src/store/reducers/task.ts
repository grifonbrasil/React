import { TaskState, TaskAction } from "./types";

const initialState: TaskState[] = [];

const tasks = (state: TaskState[] = initialState, action: TaskAction) => {
  switch (action.type) {
    case 'ADD_TASK':
      return [...state, action.payload]
    default:
      return state
  }
}

export default tasks 