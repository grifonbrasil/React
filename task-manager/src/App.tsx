import React, { useState } from 'react';
import TaskList from './modules/tasks/TaskList';
import { Task } from './modules/tasks/types';

const mock = {
  'abc123id': { id: 'abc123id', title: 'Compor', description: 'Terminar aquela música', initDate: new Date(), endDate: new Date() },
  'dce123': { id: 'dce123', title: 'Compor', description: 'Terminar aquela música', initDate: new Date(), endDate: new Date() },
};

function App() {
  // todo
  const [list, setList] = useState<any>(mock);

  const onRemove = (task: Task) => {
    const idToRemove = task.id;
    const { [idToRemove]: _omit, ...rest } = list;
    setList(rest);
  }

  const onAdd = (task: Task) => {
    // todo
    setList((prev: any) => ({ ...prev, [task.id]: task }));
  }

  return (
    <TaskList
      list={Object.values(list)}
      onRemove={onRemove}
      onAdd={onAdd}
    />
  );
}

export default App;
