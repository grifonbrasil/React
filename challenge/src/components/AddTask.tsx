
import {
  DateField,
  Form,
  TextField,
  Button
} from 'grape-ui-react';
import {
  Flex,
} from 'grape-ui-react';

import { useForm, Controller } from 'react-hook-form'
import React from 'react'
import { useDispatch } from 'react-redux';
import { addJob, Task } from '../store/reducers/types';

import moment from 'moment';

export interface AddTaskParams {
  formStyle: object
}
export interface AddTaskForm {
  title: string,
  startDate: string
  endDate: string
  description: string
}

export const AddTask = (props: AddTaskParams) => {
  const { formStyle } = props
  const { register, errors, handleSubmit, control } = useForm<AddTaskForm>(

  )
  const dispatch = useDispatch()

  const onSubmit = (data: AddTaskForm) => {
    console.log(data.title, data.startDate, data.endDate, data.description)
    const { title, description, startDate, endDate } = data
    dispatch(
      addJob(
        {
          id: Math.random() * 1000,
          title: title,
          description: description,
          endDate: moment(endDate),
          startDate: moment(startDate),
        } as Task
      )
    )
  }

  return (
    <>
      <Form formStyle={formStyle} onSubmit={handleSubmit(onSubmit)}>
        <TextField
          isRequired
          labelText="Titulo"
          name="title"
          inputRef={register({ minLength: 5 })}
          validationError={errors.title && 'O comprimento minimo é 5 caracteres'}
        />
        <Flex justifyContent="space-evenly">
          <Controller
            as={<DateField />}
            name="startDate"
            control={control}
            labelText="Data inicial"
            formStyle={formStyle}
            format="DD/MM/YYYY"
            onChange={
              (selected: any) => console.log(selected)
            }
          />
          <Controller
            as={<DateField />}
            name="endDate"
            control={control}
            formStyle={formStyle}
            labelText="Data final"
            format="DD/MM/YYYY"
            onChange={
              (selected: any) => console.log(selected)
            }
            validationError={errors.endDate && 'Data final é obrigatória'}
          />
        </Flex>
        <TextField
          labelText="Descricao da tarefa"
          minRows={2}
          multiline
          name="description"
          // inputRef={register({ minLength: 10 })}
          validationError={errors.description && 'Comprimento minimo da descriçao é 10 caracteres'}
        />

        <Flex justifyContent="flex-end">
          <Button >Limpar</Button>
          <Button variant="contained-success" type="submit">
            Enviar
        </Button>
        </Flex>
      </Form>

    </>
  )
}

const endDateValidation = (date: string) => {
  return true
}

AddTask.defaultProps = {
  formStyle: 'outlined',
};
