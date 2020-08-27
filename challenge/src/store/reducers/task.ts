import { TaskState, TaskAction } from "./types";
import moment from 'moment'
import { start } from "repl";

const initialState: TaskState = {
    title: '',
    description: '',
    endDate: moment(),
    startDate: moment()
};

const tasks = (state = initialState, action: TaskAction) => {
    switch (action.type) {
        default:
            return []
    }
}

export default tasks 