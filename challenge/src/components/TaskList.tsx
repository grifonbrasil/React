
import React from 'react'
import { Task } from '../store/reducers/types'
import { TaskElement } from './TaskElement'

export interface TaskList {
  tasks: Task[]
}

export const TaskList = (props: TaskList) => {
  const { tasks } = props
  return (
    <ul>
      {tasks.map(task => (
        <TaskElement id={task.id} title={task.title} description={task.description} endDate={task.endDate} startDate={task.startDate} />
      ))}
    </ul>
  )
} 
