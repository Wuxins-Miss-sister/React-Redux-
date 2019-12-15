import React, { Component } from 'react';
import store from './store'
import { changeTnputAction ,deleteItemAction ,addItemAction,getMyListAction} from './store/actionCreators'
import TodoListUI from './TodoListUI'
// import axios from 'axios'
// import { CHANGE_INPUT , ADD_ITEM , DELETE_ITEM } from './store/actionTypes'
class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState()
    this.changeInputValue = this.changeInputValue.bind(this)
    this.storeChange = this.storeChange.bind(this)
    this.clickBtn = this.clickBtn.bind(this)
    this.delItem = this.delItem.bind (this)
    // 订阅模式
    // 如果没有订阅模式默认也可以，但是会进行踩坑如果input的组件的value有值就会出问题显示不会更改
    store.subscribe(this.storeChange)
  }
  render() { 
    return ( 
      <TodoListUI
        inputValue={this.state.inputValue}
        changeInputValue={this.changeInputValue}
        clickBtn={this.clickBtn}
        list={this.state.list}
        delItem={this.delItem}
      />
     );
  }
  componentDidMount(){
    // thunk
    // const action = getTodoListAction()
    // store.dispatch(action)
    // saga
    const action = getMyListAction()
    store.dispatch(action)
  }
  changeInputValue(e){
    const action = changeTnputAction(e.target.value)
    store.dispatch(action)
  }
  storeChange(){
    this.setState(store.getState())
  }
  clickBtn(){
    const action = addItemAction()
    store.dispatch(action)
  }
  delItem(index){
   const action = deleteItemAction(index)
   store.dispatch(action)
  }
}
export default TodoList;