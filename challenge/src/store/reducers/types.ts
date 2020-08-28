import { type } from "os"

export interface TaskState {
    title: string
    description: string
    startDate: object
    endDate: object
}

export interface Task {
    title: string
    description: string
    startDate: object
    endDate: object
}

export type TaskAction = {
    type: string
    payload: object
}
export const ADD_JOB: TaskAction = { type: 'ADD_JOB', payload: {} }
