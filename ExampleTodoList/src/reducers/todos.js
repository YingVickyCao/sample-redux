// var globalTodos = [
//   { completed: false, id: 0, text: "a" },
//   { completed: true, id: 1, text: "b" }
// ];

const todos = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      // add new item to list, and return the list
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ];
    // console.log("todo.js reducer, globalTodos:" + globalTodos);
    // return globalTodos;
    // return [
    //   { completed: false, id: 0, text: "a" },
    //   { completed: true, id: 1, text: "b" }
    // ];

    case "TOGGLE_TODO":
      return state.map(todo =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    default:
      return state;
  }
};

export default todos;
