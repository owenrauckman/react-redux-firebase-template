/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useSelector } from 'react-redux';
import { Link } from '@reach/router';
import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase';
import * as styles from './styles';
import { ternaryRender } from '../../lib';
import AddRecord from '../AddRecord/Index';

const Records = () => {
  /* Firebase Redux */
  useFirestoreConnect([{ collection: 'records' }]);
  const records = useSelector(state => state.firestore.ordered.records);

  return (
    <div>
      <AddRecord />
      {ternaryRender(
        !isLoaded(records),
        <div>Loading...</div>,
        ternaryRender(
          isEmpty(records),
          <div>No records found</div>,
          records &&
            records.map((record, i) => (
              <Link key={record.id} to={record.id} css={styles.record}>
                {record.title}
              </Link>
            ))
        )
      )}
    </div>
  );
};

export default Records;
