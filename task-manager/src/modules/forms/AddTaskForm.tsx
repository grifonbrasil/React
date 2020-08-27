import React from 'react';
import { uuid } from 'uuidv4';
import * as Yup from 'yup';
import { Form } from '@unform/web';
import DatePicker from 'components/Unform/DatePickerInput';
import Input from 'components/Unform/Input';
import Modal from 'components/Modal/Modal';
import { Task } from 'modules/tasks/types';

interface Props {
  onAdd: (task: Task) => void;
  onClose: () => void;
}

export default function AddTaskForm({ onAdd, onClose }: Props) {
  const handleSubmit = async (data: any) => {
    try {
      const schema = Yup.object().shape({
        title: Yup.string().min(6).required(),
        description: Yup.string().min(11).required(),
        initDate: Yup.date().required(),
        endDate: Yup.date().min(Yup.ref('initDate')).required(),
      });
      await schema.validate(data, {
        abortEarly: false,
      });

      onAdd({ id: uuid(), ...data });
      onClose();
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <Modal title="Nova Tarefa" onClose={onClose}>
      <Form onSubmit={handleSubmit}>
        <Input className="mt-10" name="title" placeholder="Título" />
        <Input className="mt-10" name="description" placeholder="Descrição" />
        <DatePicker className="mt-10" name="initDate" placeholder="Data de início" />
        <DatePicker className="mt-10" name="endDate" placeholder="Data de fim" />
        <button className="mt-10" type="submit">
          Criar
        </button>
      </Form>
    </Modal>
  )
}
