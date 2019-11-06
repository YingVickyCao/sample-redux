import { connect } from "react-redux";
import { toggleTodo } from "../actions";
import TodoList from "../components/TodoList";

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case "SHOW_COMPLETED":
      return todos.filter(t => t.completed);
    case "SHOW_ACTIVE":
      return todos.filter(t => !t.completed);
    case "SHOW_ALL":
    default:
      return todos;
  }
};

const getVisibleTodos2 = todos => {
  // return globalTodos;
  return [
    { completed: false, id: 0, text: "a" },
    { completed: true, id: 1, text: "b" }
  ];
};

var globalTodos = [
  { completed: false, id: 0, text: "a" },
  { completed: true, id: 1, text: "b" }
];

const mapStateToProps = state => {
  console.log("VisibleTodoList, mapStateToProps:", state);
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
    // todos: getVisibleTodos2(state.todos, state.visibilityFilter)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTodoClick: id => {
      dispatch(toggleTodo(id));
    }
  };
};

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

export default VisibleTodoList;
