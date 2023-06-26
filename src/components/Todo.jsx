import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo, addDoneTodo, deleteDoneTodo, cancelDoneTodo } from '../redux/actions';
import ChangeBtn from './ChangeBtn';

function Todo(props) {
  const { title, contents, todo, firstButton, secondButton, color } = props;
  const dispatch = useDispatch();
  const secondButtonLabel = todo.isDone ? '취소' : '완료';

  const handleFirstButton = () => {
    dispatch(deleteTodo(todo.id));
  };

  const handleSecondButton = () => {
    if (secondButton === '취소') {
      dispatch(cancelDoneTodo(todo.id));
    } else {
      dispatch(addDoneTodo({
        id: todo.id,
        title: todo.title,
        contents: todo.contents,
        isDone: true
      }));
    }
  };

  return (
    <div style={{ borderColor: color }} className='Box'>
      <p>{title}</p>
      <p>{contents}</p>
      <p>
        <ChangeBtn buttonColor='#d0ee17' onClick={handleFirstButton}>
          {firstButton}
        </ChangeBtn>
        <ChangeBtn buttonColor='#d0ee17' onClick={handleSecondButton}>
          {secondButtonLabel}
        </ChangeBtn>
      </p>
    </div>
  );
}

export default Todo;