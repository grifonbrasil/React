
import React from 'react'
import { Task } from '../store/reducers/types'
import { TaskElement } from './TaskElement'

import { Box, Flex } from 'grape-ui-react'

export interface TaskList {
  tasks: Task[]
}

export const TaskList = (props: TaskList) => {
  const { tasks } = props
  return (
    <ul>
      {tasks.map(task => (
        <TaskElement title={task.title} description={task.description} endDate={task.endDate} startDate={task.startDate} />
      ))}
    </ul>
  )
} 
