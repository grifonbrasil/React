import React from 'react';
import { Flex, Box } from 'grape-ui-react'
import { useSelector } from 'react-redux';
import { useTypedSelector } from '../store/reducers/reducer';
import { AddTask } from './AddTask'
import { TaskList } from './TaskList'
import styled from 'styled-components';

const App = () => {

  const taskList = useTypedSelector(state => state.tasks)

  return (
    <Flex
      flexDirection={['column', 'row']}
      justifyContent="space-evenly"
    >
      <Box px={[1, 2, 3, 4]} width={[1, 1 / 2]}>

        <AddTask />
        <TaskList tasks={taskList} />
      </Box>
    </Flex>
  )
}

const Container = styled.div`
  display:flex;
  width:40%;
  justify-content:center;
`

export default App;
