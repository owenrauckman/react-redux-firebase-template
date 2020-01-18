import React, { useState } from 'react';
import { useFirestore } from 'react-redux-firebase';

const NewTodo = () => {
  /* Hooks */
  const [inputValue, onInputChange] = useState(null);

  /* Firebase Redux */
  const firestore = useFirestore();

  /* Local Constants */
  const onNewClick = () => {
    return firestore.add('todos', {
      text: inputValue,
      done: false,
      createdAt: firestore.FieldValue.serverTimestamp()
    });
  };

  return (
    <div>
      <input onChange={e => onInputChange(e.target.value)} type="text" />
      <button onClick={onNewClick}>Submit</button>
    </div>
  );
};

export default NewTodo;
