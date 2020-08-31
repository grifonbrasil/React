
import React from 'react'
import { Task } from '../store/reducers/types'
import { TaskElement } from './TaskElement'

import styled from 'styled-components'

export interface TaskList {
  tasks: Task[]
}

export const TaskList = (props: TaskList) => {
  const { tasks } = props
  return (
    <ListContainer>
      {tasks.map(task => (
        <TaskElement key={task.id} {...task} />
      ))}
    </ListContainer>
  )
}


const ListContainer = styled.li`
  list-style: none;
  padding: 0;
`