
import React from 'react'
import { Task } from '../store/reducers/types'
import { Paragraph } from 'grape-ui-react'

import styled from 'styled-components'

export const TaskElement = (props: Task) => {

  return (
    <li key={props.id}>
      <TaskContainer>
        <TaskTitle>{props.title}</TaskTitle>
        <Dates>
          {props.startDate.format('DD/MM/YY')} - {props.endDate.format('DD/MM/YY')}
        </Dates>
        <hr />
        <Paragraph>
          {props.description}
        </Paragraph>
      </TaskContainer>
    </li>
  )
}

const TaskContainer = styled.div`
  background-color: #ccc;
  padding: 1rem;
  margin-bottom: 1rem;
`
const TaskTitle = styled.h3`
  display: block;
  color: #341e55;
`
const Dates = styled.div`
  display:flex;
  justify-content: flex-end;
  font-style: italic;
`
