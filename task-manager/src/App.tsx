import React, { useState } from 'react';
import TaskList from './modules/tasks/TaskList';
import { Task } from './modules/tasks/types';

// const mock = {
//   1: { id: 1, title: 'Compor', description: 'Terminar aquela música', initDate: new Date(), endDate: new Date() },
//   2: { id: 2, title: 'Compor', description: 'Terminar aquela música', initDate: new Date(), endDate: new Date() },
//   3: { id: 3, title: 'Compor', description: 'Terminar aquela música', initDate: new Date(), endDate: new Date() },
//   4: { id: 4, title: 'Compor', description: 'Terminar aquela música', initDate: new Date(), endDate: new Date() },
//   5: { id: 5, title: 'Compor', description: 'Terminar aquela música', initDate: new Date(), endDate: new Date() },
// };

function App() {
  // todo
  const [list, setList] = useState<any>([]);

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
