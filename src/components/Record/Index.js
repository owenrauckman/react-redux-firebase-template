/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useSelector } from 'react-redux';
import { useFirestore, useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase';
import { ternaryRender } from '../../lib';

const Record = props => {
  /* Firebase Redux */
  const firestore = useFirestore();

  useFirestoreConnect(`records/${props.id}`);
  const record = useSelector(({ firestore: { data } }) => data.records && data.records[props.id]);

  /* Local Constants */
  const onPlayedClick = amount => {
    return firestore.update(`records/${props.id}`, { playCount: record.playCount + amount });
  };

  return (
    <div>
      {ternaryRender(
        !isLoaded(record),
        <div>Loading...</div>,
        ternaryRender(
          isEmpty(record),
          <div>No record found</div>,
          record && (
            <div>
              <h1>{record.title}</h1>
              <div>Play Count {record.playCount}</div>
              <div
                onClick={() => {
                  onPlayedClick(1);
                }}
              >
                Add Play +
              </div>
              <div
                onClick={() => {
                  onPlayedClick(-1);
                }}
              >
                Remove Play -
              </div>
            </div>
          )
        )
      )}
    </div>
  );
};

export default Record;
