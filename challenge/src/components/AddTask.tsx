
import {
  DateField,
  Form,
  TextField,
  Button
} from 'grape-ui-react';
import {
  Flex,
} from 'grape-ui-react';

import React from 'react'
import { useDispatch } from 'react-redux';
import { addJob, Task } from '../store/reducers/types';
import moment from 'moment';

export interface AddTaskParams {
  formStyle: object
}

export const AddTask = (props: AddTaskParams) => {
  const { formStyle } = props

  const dispatch = useDispatch()

  const handleSubmit = () => {
    console.log('submit')
    dispatch(
      addJob(
        {
          id: 1,
          title: 'teste',
          description: 'teste',
          endDate: moment(),
          startDate: moment(),
        } as Task
      )
    )
  }

  return (
    <>
      <Form formStyle={formStyle}>
        <TextField
          isRequired
          labelText="Titulo"
          name={`exampleFullName${formStyle}`}
        />
        <Flex justifyContent="space-evenly">
          <DateField
            formStyle={formStyle}
            labelText="Data inicial"
            name={`exampleDob${formStyle}`}
          />
          <DateField
            formStyle={formStyle}
            labelText="Data final"
            name={`exampleDob${formStyle}`}
          />
        </Flex>
        <TextField
          email
          labelText="Descricao da tarefa"
          minRows={2}
          multiline
          name={`exampleBio${formStyle}`}
        />
      </Form>
      <Flex justifyContent="flex-end">
        <Button >Limpar</Button>
        <Button variant="contained-success" onClick={handleSubmit}>
          Enviar
        </Button>
      </Flex>
    </>
  )
}
AddTask.defaultProps = {
  formStyle: 'outlined',
};
