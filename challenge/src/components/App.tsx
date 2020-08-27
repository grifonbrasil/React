import React from 'react';
import { Paragraph } from 'grape-ui-react'
import { useSelector } from 'react-redux';


const App = () => {

  const taskList = useSelector(state => state.tasks)

  return (
    <Paragraph>
      opa
    </Paragraph>
  )
}
export default App;
