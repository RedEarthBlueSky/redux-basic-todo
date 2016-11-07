import { connect } from 'react-redux';
import * as components from './components';
import { addTodo, toggleTodo } from './actions';

export const TodoList = connect (
  function mapStateToProps (state) {
    return { todos: state };
  },
  function mapDispatchToProps (dispatch) {
    return {
      addTodo: text => dispatch(addTodo(text)),
      toggleTodo: id=> dispatch(toggleTodo(id))
    }
  }
)(components.TodoList);

//  create containers with the connect function.  call connect
//  pass two functions, mapStateToProps() and mapDispatchToProps().

//  mapStateToProps() takes the stores current state, here a
//  todos list, then it expects the return value to be an object
//  that describes a mapping from that state to props for our wrapped component.

//  mapDispatchToProps is passed the stores dispatch method, so that was can use it
//  to dispatch the actions from our action creators
