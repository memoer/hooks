import uuid from 'uuid/v4';
import { ADD, DEL, COMPLETE, UNCOMPLETE } from './actions';
export const initialState = {
  // toDos = [{text: ...}, {text: ...}]
  toDos: [],
  completed: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        toDos: [...state.toDos, { text: action.payload, id: uuid() }],
      };
    case DEL:
      return {
        ...state,
        toDos: state.toDos.filter(toDo => action.payload !== toDo.id),
      };
    case COMPLETE:
      const target = state.toDos.find(toDo => action.payload === toDo.id);
      return {
        ...state,
        toDos: state.toDos.filter(toDo => action.payload !== toDo.id),
        completed: [...state.completed, target],
      };
    case UNCOMPLETE:
      const aTarget = state.completed.find(toDo => action.payload === toDo.id);
      return {
        ...state,
        completed: state.completed.filter(toDo => action.payload !== toDo.id),
        toDos: [...state.toDos, { ...aTarget }],
      };
    default:
      return;
  }
};

export default reducer;
