import { v4 as uuidv4 } from 'uuid';
import {
  DateField,
  Form,
  TextField,
  Button,
  Flex,
  Box
} from 'grape-ui-react';

import { useForm, Controller } from 'react-hook-form'
import React from 'react'
import { useDispatch } from 'react-redux';
import { addJob, Task } from '../store/reducers/types';

import { TaskValidations, endDateValidation } from '../validations/TaskValidations'

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
  const { register, errors, handleSubmit, control, watch, reset } = useForm<AddTaskForm>()
  const dispatch = useDispatch()
  const startDateWatch = watch('startDate')

  const onSubmit = (data: AddTaskForm) => {
    const { title, description, startDate, endDate } = data

    dispatch(
      addJob(
        {
          id: uuidv4(),
          title: title,
          description: description,
          endDate: moment(endDate),
          startDate: moment(startDate),
        } as Task
      )
    )

    reset({
      title: '',
      endDate: '',
      startDate: '',
      description: ''
    })
  }

  return (
    <>
      <Form formStyle={formStyle} onSubmit={handleSubmit(onSubmit)}>
        <TextField
          labelText="Titulo"
          name="title"
          inputRef={register(TaskValidations.title)}
          validationError={errors.title && 'O comprimento minimo é 5 caracteres'}
        />
        <Flex justifyContent="space-around">
          <Box px={1} width={[1, 1 / 2]}>
            <Controller
              control={control}
              name="startDate"
              rules={TaskValidations.startDate}
              render={props =>
                <DateField {...props}
                  labelText="Data Inicial"
                  validationError={errors.startDate && 'A data inicial é obrigatória'}
                  onChange={(date: any) => props.onChange(date.formattedDay)}
                />
              }
            />
          </Box>

          <Box px={1} width={[1, 1 / 2]}>
            <Controller
              control={control}
              name="endDate"
              rules={
                { ...TaskValidations.endDate, validate: endDateValidation(startDateWatch) }
              }
              render={props =>
                <DateField {...props}
                  labelText="Data Final"
                  validationError={errors.endDate && 'A data final tem de ser maior que a data inicial'}
                  onChange={(date: any) => props.onChange(date.formattedDay)}
                />
              }
            />
          </Box>
        </Flex>
        <TextField
          labelText="Descricao da tarefa"
          minRows={2}
          multiline
          inputRef={register(TaskValidations.description)}
          name="description"
          validationError={errors.description && 'Comprimento minimo da descriçao é 10 caracteres'}
        />

        <Flex justifyContent="flex-end">
          <Button onClick={() => reset()} >Limpar</Button>
          <Button variant="contained-success" type="submit">
            Enviar
        </Button>
        </Flex>
      </Form>
    </>
  )

}

AddTask.defaultProps = {
  formStyle: 'outlined',
};
