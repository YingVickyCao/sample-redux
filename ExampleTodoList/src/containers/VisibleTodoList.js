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
  return todos;
};

const mapStateToProps = state => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)

    // todos: [
    //   { completed: false, id: 0, text: "a" },
    //   { completed: true, id: 1, text: "b" }
    // ]
    // todos: getVisibleTodos2(state.todos)

    /**
     1 todos.js Reducer  -> todos（array）
     2 使用connect（） flattern state tree
     3 监听的是整个state tree，not only used state key-value. 只要存在任意state (key-value)改变，就是state变了。不管是否使用Redux，监听state 改变规则相同
      只要state改变了，mapDispatchToProps就被执行。
      mapStateToProps return 的value只要改变， TodoList 就render() 
      value变：
      {
        a:1
      }

       值相同，但地址不同 =>不同对象
      return{
        a:1
      } 

      value没变：
      n = 10
      n = 10 (return )
     */
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
