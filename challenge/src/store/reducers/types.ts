import { type } from "os"

export interface TaskState {
  id: number
  title: string
  description: string
  startDate: object
  endDate: object
}

export interface Task {
  id: number
  title: string
  description: string
  startDate: object
  endDate: object
}

export type TaskAction = {
  type: string
  payload: object
}

export const addJob = (task: Task): TaskAction => ({ type: 'ADD_TASK', payload: task })
