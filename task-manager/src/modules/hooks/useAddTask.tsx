import React from 'react';
import { useState } from "react";
import AddTaskForm from "../forms/AddTaskForm";
import { Task } from 'modules/tasks/types';

interface Props {
  onAdd: (task: Task) => void 
}

export default function useAddTask({ onAdd }: Props) {
  // todo
  const [dialog, setDialog] = useState<any>();
  const askForAdd = () => {
    setDialog(
      <AddTaskForm onAdd={onAdd} onClose={onClose} />
    );
  };

  const onClose = () => setDialog(null);
  
  return {
    dialog,
    askForAdd
  }
}
