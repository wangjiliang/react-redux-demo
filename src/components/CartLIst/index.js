import React, { Component } from 'react'
import { connect } from 'react-redux'

import { increment, decrement } from '../../redux/actions/cart'
import http from '../../api/http'

class CartList extends Component {
  /*  普通redux的使用方法
  constructor(){
    super()
    this.state = {
      cartList: []
    }
  }
  getData = () => {
    this.setState({
      cartList: this.props.store.getState().cart
    })
  }
  componentDidMount () {
    this.getData()
    this.props.store.subscribe(this.getData)
  }
  */
  componentDidMount() {
    http.get('/posts/1/comments').then( res => {
      console.log(res)
    })
  }
  render() {
    // const { cartList, addAmount, reduceAmount } = this.props
    const { cartList, increment, decrement } = this.props

    return (
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>商品名称</th>
            <th>价格</th>
            <th>数量</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>

          {/* {
            this.state.cartList.map((item) => {
              return(
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.title} </td>
                  <td>{item.price}</td>
                  <td>
                    <button onClick= {
                      () => { this.props.store.dispatch(decrement(item.id))}
                    } >-</button>
                    <span>{item.amount}</span>
                    <button onClick= {
                      () => { this.props.store.dispatch(increment(item.id))}
                    } >+</button>
                  </td>
                  <td></td>
                </tr>
              )
            })
          } */}
          {
            cartList.map((item) => {
              return(
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.title} </td>
                  <td>{item.price}</td>
                  <td>
                    <button onClick= { () => {decrement(item.id)} } >-</button>
                    {/* <button onClick= {
                      () => { reduceAmount(item.id) }
                    } >-</button> */}
                    <span>{item.amount}</span>
                    {/* <button onClick= {
                      () => { addAmount(item.id)}
                    } >+</button> */}
                    <button onClick= { () => {increment(item.id)} } >+</button>
                  </td>
                  <td></td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    )
  }
}
/** react-redux的使用方法，用connect让组件跟store进行连接 
 * 第一个参数就是state,
 * 第二个参数是actions
 * 当action是用actionCreater创建时有两种使用方式。第一种是传统的mapDispatchToProps方法，
 * 第二种方式是将actionCreater创建的action当作对象作为connect方法第一个括号的第二个参数，如本例中的 {increment, decrement}
 */
const mapStateToProps = (state) => {
  return {
    cartList : state.cart
  }
}
/** action的第一种传递方式 */
/**
const mapDispatchToProps = (dispatch) => {
  return {
    addAmount : (id) => { dispatch(increment(id))},
    reduceAmount: (id) => { dispatch(decrement(id))}
  }
}
*/

// export default connect(mapStateToProps, mapDispatchToProps)(CartList)
// mapDispatchToProps的第二种方法
export default connect(mapStateToProps, {increment, decrement})(CartList)
