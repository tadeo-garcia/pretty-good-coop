import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers/rootReducer';

let storeEnhancer;

function saveToLocalStorage(state){
  try{
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState)
  } catch (e){
    console.log(e)
  }
}

function loadFromLocalStorage(){
  try{
    const serializedState = localStorage.getItem('state')
    if(serializedState === null) return undefined;
    return JSON.parse(serializedState)
  }catch(e){
    console.log(e)
    return undefined
  }
}

if (process.env.NODE_ENV !== 'production') {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  storeEnhancer = composeEnhancers(applyMiddleware(thunk));
} else {
  storeEnhancer = applyMiddleware(thunk);
}

const persistedCart = loadFromLocalStorage();

const store = createStore(
  rootReducer,
  persistedCart,
  storeEnhancer
)

store.subscribe(()=> saveToLocalStorage(store.getState()))

export default store
