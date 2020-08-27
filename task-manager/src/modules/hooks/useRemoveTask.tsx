import React from 'react';
import { useState } from "react";
import Modal from 'components/Modal/Modal';
import { Task } from 'modules/tasks/types';

interface Props {
  onRemove: (task: Task) => void 
}

export default function useRemoveTask({ onRemove }: Props) {
  // todo
  const [dialog, setDialog] = useState<any>();
  const askForRemove = (task: Task) => {
    const onConfirm = () => {
      onRemove(task);
      onClose();
    }
    setDialog(
      <Modal title="Remover Tarefa" onClose={onClose} onConfirm={onConfirm}>
        <p>Deseja remover essa tarefa?</p>
      </Modal>
    );
  };

  const onClose = () => setDialog(null);
  
  return {
    dialog,
    askForRemove
  }
}
