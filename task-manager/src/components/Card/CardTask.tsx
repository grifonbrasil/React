import React from 'react';
import styled from 'styled-components';
import { format } from 'date-fns';
import { Task } from 'modules/tasks/types';
import CloseButton from 'components/Buttons/CloseButton';

const Card = styled.div`
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 10px;
  padding-bottom: 0px;

  border: 1px solid #EFF0F2;
  border-radius: 2px;
  background-color: #FFF;
  box-shadow: 0 1px 1px 0 rgba(0,0,0,0.2), 0px 0px 0px 0 rgba(0,0,0,0.19);

  .title {
    font-size: 18px;
  }
  .description {
    font-size: 12px;
    color: #9797A7;
  }
  .date {
    color: #5a5a5a;
    border-top: 2px solid #EFF0F2;
    padding-top: 10px;
    font-size: 12px;
  }
  .until {
    color: black;
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
        <h1 className="title">{title}</h1>
        <CloseButton onClick={onDelete}>&times;</CloseButton>        
      </div>
      <CloseButton />
      <p className="description">{description}</p>
      <p className="date">
        {initDate && endDate ? (
          <p>
            {format(initDate, 'dd/MM/yyyy - HH:mm')}
            <span className="until"> até </span>{
            format(endDate, 'dd/MM/yyyy - HH:mm')}
          </p>
        ) : (
          <p>Data e hora não definidas.</p>
        )}
      </p>
    </Card>
  );
}
