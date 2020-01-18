import React, { useState } from 'react';
import { useFirestore } from 'react-redux-firebase';

const AddRecord = () => {
  /* Hooks */
  const [inputValue, onInputChange] = useState(null);

  /* Firebase Redux */
  const firestore = useFirestore();

  /* Local Constants */
  const onNewClick = () => {
    return firestore.add('records', {
      title: inputValue,
      playCount: 0,
      createdAt: firestore.FieldValue.serverTimestamp()
    });
  };

  return (
    <div>
      <input placeholder="Add Record" onChange={e => onInputChange(e.target.value)} type="text" />
      <button onClick={onNewClick}>Submit</button>
    </div>
  );
};

export default AddRecord;
