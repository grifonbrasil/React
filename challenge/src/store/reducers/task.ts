import { TaskState, TaskAction } from "./types";
import moment from 'moment'
import { stat } from "fs";

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