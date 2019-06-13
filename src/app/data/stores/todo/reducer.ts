import { Actions, ActionTypes } from "./action";
import { TodoState } from "./state";

export const initialState: TodoState = {
  todos: [],
  loading: false,
  loaded: false
};

export function todoReducer(state = initialState, action: Actions): TodoState {
  switch (action.type) {
    case ActionTypes.GET_TODOS:
      return { ...state };
    default:
      return state;
  }
}
