import React from 'react';
import { useFirestore } from 'react-redux-firebase';

const Todo = ({ todo }) => {
  /* Firebase Redux */
  const firestore = useFirestore();

  /* Local Constants */
  const onDoneClick = () => {
    return firestore.update(`todos/${todo.id}`, { done: !todo.done });
  };

  return (
    <div>
      <input checked={todo.done} onChange={onDoneClick} disabled={todo.disabled} type="checkbox" />
      <div>
        <span>{todo.text}</span>
        <span>{todo.owner}</span>
      </div>
    </div>
  );
};

export default Todo;
