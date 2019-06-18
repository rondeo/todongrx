import { Actions, ActionTypes } from './action';
import { TodoState } from './state';

export const initialState: TodoState = {
  todos: [],
  loading: false,
  loaded: false
};

export function todoReducer(state = initialState, action: Actions): TodoState {
  switch (action.type) {
    case ActionTypes.GET_TODOS:
      return { ...state, todos: [...action.payload] };

    case ActionTypes.ADD_TODO:
      return { ...state, todos: [...action.payload] };
      
    case ActionTypes.EDIT_TODO:
      return { ...state, todos: action.payload };


    case ActionTypes.REMOVE_TODO_SUCCESS:
      /*  const todoId = action.payload;
        const { ...todos } = state.todos;
        let count = state.todos.length;
        if (todos[todoId]) {
          delete todos[todoId];
          count = count - 1;
        }*/

        console.log("REDUCER " + JSON.stringify(action.payload));
        return {...state, todos: [...action.payload]};

    default:
      return state;
  }
}
