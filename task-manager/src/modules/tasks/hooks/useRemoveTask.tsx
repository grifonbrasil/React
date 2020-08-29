import React from 'react';
import { useState } from "react";
import Modal from 'components/Modal/Modal';
import { Task } from 'modules/tasks/types';
import useNotification from 'shared/hooks/useNotification';
import styled from 'styled-components';

interface Props {
  onRemove: (task: Task) => void 
}

const Description = styled.p`
  color: #9797A7;
`;

export default function useRemoveTask({ onRemove }: Props) {
  // todo
  const [dialog, setDialog] = useState<any>();
  const notification = useNotification();
  const askForRemove = (task: Task) => {
    const onConfirm = () => {
      onRemove(task);
      notification.success('Tarefa removida com sucesso.')
      onClose();
    }
    setDialog(
      <Modal title="Remover Tarefa" onClose={onClose} onConfirm={onConfirm}>
        <Description>Deseja remover essa tarefa?</Description>
      </Modal>
    );
  };

  const onClose = () => setDialog(null);
  
  return {
    dialog,
    askForRemove
  }
}
