import React from 'react';
import styled from 'styled-components';
import { format } from 'date-fns';
import { Task } from 'modules/tasks/types';
import CloseButton from 'components/Buttons/CloseButton';

const Card = styled.div`
  padding: 10px 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  h1 {
    font-size: 16px;
  }

  p {
    font-size: 12px;
    color: #5a5a5a;
  }
`;

interface Props {
  task: Task;
  onRemoveClick: (task: Task) => void
}

export default function CardTask({ task, onRemoveClick }: Props) {
  const onDelete = () => onRemoveClick(task);
  const { title, description, initDate, endDate } = task;
  return (
    <Card>
      <div className="flex justify-content-between">
        <h1>{title}</h1>
        <CloseButton onClick={onDelete}>&times;</CloseButton>        
      </div>
      <CloseButton />
      <p>{description}</p>
      <p>{`Inicio: ${format(initDate, 'dd/MM/yyyy - HH:mm')}`}</p>
      <p>{`Fim: ${format(endDate, 'dd/MM/yyyy - HH:mm')}`}</p>
    </Card>
  )
}
