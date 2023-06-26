import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo, addDoneTodo, deleteDoneTodo, cancelDoneTodo } from '../redux/actions';

const ChangeBtn = (props) => {
  const { onClick, children, buttonColor } = props;
  const dispatch = useDispatch();

  const handleClick = () => {
    onClick();
  };

  return (
    <button
      style={{ backgroundColor: buttonColor }}
      onClick={handleClick}
      className='Button'
    >
      {children}
    </button>
  );
};

export default ChangeBtn;
