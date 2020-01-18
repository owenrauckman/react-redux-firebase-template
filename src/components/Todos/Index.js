/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useSelector } from 'react-redux';
import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase';
import * as styles from './styles';
import { ternaryRender } from '../../lib';
import Todo from '../Todo/Index';
import NewTodo from '../NewTodo/Index';

const Todos = () => {
  /* Firebase Redux */
  useFirestoreConnect([{ collection: 'todos' }]);
  const todos = useSelector(state => state.firestore.ordered.todos);

  return (
    <div css={styles.container}>
      {<NewTodo />}
      {ternaryRender(
        !isLoaded(todos),
        <div>Loading...</div>,
        ternaryRender(
          isEmpty(todos),
          '<div>All Caught Up!</div>',
          todos && todos.map((todo, i) => <Todo key={`${todo.id}`} todo={todo} todos={todos} />)
        )
      )}
    </div>
  );
};

export default Todos;
