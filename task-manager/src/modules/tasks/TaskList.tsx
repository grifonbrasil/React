import React from 'react';
import styled from 'styled-components';
import CardTask from 'components/Card/CardTask';
import { Task } from './types';
import Button from 'components/Buttons/Button';
import useAddTask from 'modules/hooks/useAddTask';
import useRemoveTask from 'modules/hooks/useRemoveTask';

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
  const { askForRemove, dialog: removeDialog } = useRemoveTask({ onRemove });
  const { askForAdd, dialog: addDialog } = useAddTask({ onAdd });
  return (
    <>
      <div className="flex align-items-center">
        <h1>Tarefas</h1>
        <Button className="ml-10" onClick={askForAdd}>Nova</Button>
      </div>
      <Container>
        {list.length < 1 && (
          <p>Nenhuma foi cadastrada.</p>
        )}
        {list.map((task: Task) => (
          <CardTask key={task.id} onRemoveClick={askForRemove} task={task} />
        ))}
      </Container>
      {removeDialog}
      {addDialog}
    </>
  );
}
