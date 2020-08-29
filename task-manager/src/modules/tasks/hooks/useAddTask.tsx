import React from 'react';
import { useState } from "react";
import { Task } from 'modules/tasks/types';
import useNotification from 'shared/hooks/useNotification';
import AddTaskForm from 'modules/tasks/forms/AddTaskForm';

interface Props {
  onAdd: (task: Task) => void 
}

export default function useAddTask({ onAdd }: Props) {
  // todo
  const [dialog, setDialog] = useState<any>();
  const notification = useNotification();

  const onConfirm = (task: Task) => {
    onAdd(task);
    notification.success('Tarefa adicionada com sucesso.');
    onClose();
  }
  const askForAdd = () => {
    setDialog(
      <AddTaskForm onAdd={onConfirm} onClose={onClose} />
    );
  };

  const onClose = () => setDialog(null);
  
  return {
    dialog,
    askForAdd
  }
}
