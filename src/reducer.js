// Once again, the reducer is a function that takes a state and and action,
// then uses them to compute a new state

import { List, Map } from 'immutable';

const init = List([]);

//  probably better tose use state rather than todos
export default function(todos=init, action) {
  switch(action.type) {
    case 'ADD_TODO':
      return todos.push(Map(action.payload));  //  converts todo obect to immutable method
    case 'TOGGLE_TODO':
      return todos.map(t => {
        if (t.get('id') === action.payload) {
          return t.update('isDone', isDone => !isDone);
        } else {
          return t;
        }
      });
    default:
      return todos;
    }
}
