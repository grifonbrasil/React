import { TaskState, TaskAction } from "./types";
import moment from 'moment'

const initialState: TaskState[] = [
    {
        title: '',
        description: '',
        endDate: moment(),
        startDate: moment()
    }
];


const tasks = (state: TaskState[] = initialState, action: TaskAction) => {
    switch (action.type) {
        default:
            return state
    }
}

export default tasks 