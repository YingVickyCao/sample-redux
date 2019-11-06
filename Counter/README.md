# Redux

# Check Component render

## Component render when use react

| Component Counters.js setState()  | Component Counter.js render() |
| --------------------------------- | ----------------------------- |
| If return obj is 严格相等         | invorked                      |
| If return obj is 数据等，地址不等 | invorked                      |

- 只要 setState(),无论 value 有没有变，若不使用生命周期函数阻止 render，均 render()

## Component render when use redux

| reducer counter.js                | Component Counter.js subscribe() | Component Counter.js render() |
| --------------------------------- | -------------------------------- | ----------------------------- |
| If return obj is 严格相等         | invorked                         | invorked                      |
| If return obj is 数据等，地址不等 | invorked                         | invorked                      |

- 只要 store.getState() value 变，无论数据是否相等，均 render()

# Refs

- https://www.redux.org.cn/docs/introduction/Examples.html
- https://github.com/reduxjs/redux/tree/master/examples/counter
