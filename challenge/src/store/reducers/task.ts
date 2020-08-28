import { TaskState, TaskAction } from "./types";
import moment from 'moment'

const initialState: TaskState[] = [
  {
    id: 1,
    title: 'Inicial',
    startDate: moment(),
    endDate: moment(),
    description: 'Exemplo teste',
  },
];

const tasks = (state: TaskState[] = initialState, action: TaskAction) => {
  switch (action.type) {
    case 'ADD_TASK':
      return [...state, action.payload]
    default:
      return state
  }
}

export default tasks 