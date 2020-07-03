
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import reducer from './reducers'

/**
 * 使用redux的调试工具
 * 第一步：安装npm install --save redux-devtools-extension
 * 第二步：引入composeWithDevTools方法 import { composeWithDevTools } from 'redux-devtools-extension'
 * 第三步：使用composeWithDevTools(applyMiddleware(thunk))
 */
const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))

export default store;
