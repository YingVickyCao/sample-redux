# React-Redux

- 使用 connect（） flattern state tree

```
state:
{
    todos: [{completed: false, id: 0, text: "a" }, {completed: true, id: 1, text: "b" }]
    visibilityFilter: "SHOW_ALL"
}
```

- state tree  
  监听的是整个 state tree，not only used state key-value.  
  只要存在任意 state (key-value)改变，就是 state 变了。不管是否使用 Redux/React-Redux，监听 state 改变规则相同  
  只要 state 改变了，mapDispatchToProps 就被执行。  
  mapStateToProps return 的 value 只要改变， invork render()

return data is obj:

| reducer todos.js                  | VisibleTodoList.js mapStateToProps | TodoList.js render() |
| --------------------------------- | ---------------------------------- | -------------------- |
| If return obj is 严格相等         | not invorked                       | not invorked         |
| If return obj is 数据等，地址不等 | invorked                           | invorked             |
| -                                 | If return obj is 严格相等          | not invorked         |
| -                                 | If return obj is 数据等，地址不等  | invorked             |

return data is origin type:

| reducer visibilityFilter.js | FilterLink.js mapStateToProps | Link.js render() |
| --------------------------- | ----------------------------- | ---------------- |
| If return same num          | not invorked                  | not invorked     |
| -                           | If return obj is same num     | not invorked     |

# Refs

https://www.redux.org.cn/docs/basics/ExampleTodoList.html
