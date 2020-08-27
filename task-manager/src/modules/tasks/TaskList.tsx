import React from 'react';
import styled from 'styled-components';
import { Task } from './types';
import CardTask from 'components/Card/CardTask';

const Container = styled.div`
  display: grid;
  grid-column-gap: 50px;
  grid-row-gap: 50px;
  grid-template-columns: auto auto auto;
`;

interface Props {
  list: Task[];
  onRemove: (task: Task) => void;
  onAdd: (task: Task) => void;
}

export default function TaskList({ list, onRemove, onAdd }: Props) {
  return (
    <>
      <div className="flex align-items-center">
        <h1>Tarefas</h1>
      </div>
      <Container>
        {list.length < 1 && (
          <p>Nenhuma foi cadastrada.</p>
        )}
        {list.map((task: Task) => (
          <CardTask key={task.id} onRemoveClick={() => console.log('delete')} task={task} />
        ))}
      </Container>
    </>
  );
}
