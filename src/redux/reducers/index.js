
import { combineReducers } from 'redux'

import cart from './cart'


/** 
 * 使用redux的comBineReducers可以将多个分开的reducer合并为一个
*/
export default combineReducers({
  cart
})
