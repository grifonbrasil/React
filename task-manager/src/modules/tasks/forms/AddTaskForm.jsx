import React, { useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import * as Yup from 'yup';
import { Form } from '@unform/web';
import DatePicker from 'components/Unform/DatePickerInput';
import Input from 'components/Unform/Input';
import Modal from 'components/Modal/Modal';
// import { Task } from 'modules/tasks/types';
import Button from 'components/Buttons/Button';
// import { FormHandles, SubmitHandler } from '@unform/core';

// interface Props {
//   onAdd: (task: Task) => void;
//   onClose: () => void;
// }

const schema = Yup.object().shape({
  title: Yup.string()
    .label('Título')
    .min(6, 'O título deve ter pelo menos 6 caracteres.')
    .required('O título é obrigatório.'),
  description: Yup.string()
    .label('Descrição')
    .min(11, 'A descrição deve ter pelo menos 11 caracteres.')
    .required('A descrição é obrigatória.'),
  initDate: Yup.date()
    .label('Data de início'),
  endDate: Yup.date()
    .label('Data final')
    .when('initDate', {
      is: true,
      then: Yup.date().required(),
      otherwise: Yup.date().notRequired(),
    })
    .min(Yup.ref('initDate'), 'A data final deve ser maior que a data inicial.'),
});

export default function AddTaskForm({ onAdd, onClose }) {
  const formRef = useRef(null);
  const handleSubmit = async (data) => {
    try {
      await schema.validate(data, {
        abortEarly: false,
      });
      onAdd({ id: uuidv4(), ...data });
      onClose();
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errorMessages = {};
          err.inner.forEach(error => {
            errorMessages[error.path] = error.message;
          });
          console.log(errorMessages);
          formRef.current.setErrors(errorMessages)
        }
    }
  }

  return (
    <Modal title="Nova Tarefa" onClose={onClose}>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <Input className="mt-20" name="title" placeholder="Título" />
        <Input className="mt-20" name="description" placeholder="Descrição" />
        <DatePicker className="mt-20" name="initDate" placeholder="Data de início" />
        <DatePicker className="mt-20" name="endDate" placeholder="Data de fim" />
        <Button className="mt-20 success" type="submit">
          Criar
        </Button>
      </Form>
    </Modal>
  );
}
