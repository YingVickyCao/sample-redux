# Redux

# Check Component render

## Component render when use redux(combineReducers())

| reducer reducer_counter.js        | Component Counter.js subscribe() | Component Counter.js render() |
| --------------------------------- | -------------------------------- | ----------------------------- |
| If return obj is 严格相等         | invorked                         | invorked                      |
| If return obj is 数据等，地址不等 | invorked                         | invorked                      |

- 只要 store.getState() value 变，无论数据是否相等，均 render()

# Refs

- https://www.redux.org.cn/docs/introduction/Examples.html
- https://github.com/reduxjs/redux/tree/master/examples/async
