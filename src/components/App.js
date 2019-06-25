import React from 'react';
import Add from './Add';
import List from './List';
import { useState } from '../context';
import ToDo from './ToDo';

const App = () => {
  const { toDos, completed } = useState();
  return (
    <>
      <h1>Add To do</h1>
      <Add />
      <List name="To Dos">
        {toDos.map(toDo => (
          <ToDo key={toDo.id} id={toDo.id} text={toDo.text} />
        ))}
      </List>
      <List name={completed.length !== 0 ? 'completed' : ''}>
        {completed.map(toDo => (
          <ToDo
            key={toDo.id}
            id={toDo.id}
            text={toDo.text}
            isCompleted={true}
          />
        ))}
      </List>
    </>
  );
};
export default App;
