import { Moment } from "moment"

export interface TaskState {
  id: number
  title: string
  description: string
  startDate: object
  endDate: object
}

export interface Task {
  id: string
  title: string
  description: string
  startDate: Moment
  endDate: Moment
}

export type TaskAction = {
  type: string
  payload: object
}

export const addJob = (task: Task): TaskAction => ({ type: 'ADD_TASK', payload: task })
