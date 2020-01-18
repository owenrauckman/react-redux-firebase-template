import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useFirestore } from 'react-redux-firebase';

const AddRecord = () => {
  /* Hooks */
  const [inputValue, onInputChange] = useState(null);

  /* Firebase Redux */
  const firestore = useFirestore();
  const auth = useSelector(state => state.firebase.auth);

  /* Local Constants */
  const onNewClick = () => {
    return firestore.add('records', {
      title: inputValue,
      playCount: 0,
      createdAt: firestore.FieldValue.serverTimestamp(),
      userId: auth.uid
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
