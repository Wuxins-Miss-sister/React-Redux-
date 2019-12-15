import { createStore , applyMiddleware , compose} from 'redux'
import reducer from './reducer'
// import thunk from 'redux-thunk'
import creactSagaMiddleware from 'redux-saga'
import mySages from './sagas'

//增强函数
// const composeEnhancers =  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?
// window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):compose

// const enhancer = composeEnhancers(applyMiddleware(thunk))

//只支持两个参数。。。自己增强一个
// const store = createStore(reducer,enhancer)

//下面saga

const sagaMiddleware = creactSagaMiddleware();

const composeEnhancers =  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):compose

const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware))

const store = createStore(reducer,enhancer)

sagaMiddleware.run(mySages)

export default store