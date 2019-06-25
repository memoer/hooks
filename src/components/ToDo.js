import React from 'react';
import { useDispatch } from '../context';
import { DEL, COMPLETE, UNCOMPLETE } from '../actions';
export default ({ text, id, isCompleted }) => {
  const dispatch = useDispatch();
  return (
    <li>
      <span>{text}</span>
      {isCompleted ? null : (
        <button onClick={() => dispatch({ type: DEL, payload: id })}>
          <span role="img" aria-label="delete">
            ❌
          </span>
        </button>
      )}
      <button
        onClick={() =>
          dispatch({ type: isCompleted ? UNCOMPLETE : COMPLETE, payload: id })
        }>
        <span role="img" aria-label="complete">
          {isCompleted ? '❌' : '✅'}
        </span>
      </button>
    </li>
  );
};
