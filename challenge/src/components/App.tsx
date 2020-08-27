import React from 'react';
import { Paragraph } from 'grape-ui-react'
import { useSelector } from 'react-redux';
import { useTypedSelector } from '../store/reducers/reducer';
import { AddTask } from './AddTask'
import { TaskList } from './TaskList'
import styled from 'styled-components';

const App = () => {

  const taskList = useTypedSelector(state => state.tasks)

  return (
    <Container>
      <div>
        <AddTask />
        <TaskList />
      </div>
    </Container>
  )
}

const Container = styled.div`
  display:flex;
  width:40%;
  justify-content:center;
`

export default App;
