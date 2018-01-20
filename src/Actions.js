import AppDispatcher from './AppDispatcher';

export const addItem = value =>{
  AppDispatcher.dispatch({
    type:'ADD_NEW_ITEM',
    value
  });
}

export const removeItem = id =>{
  AppDispatcher.dispatch({
    type:'REMOVE_ITEM',
    id
  });
}

export const toggleItem = id =>{
  AppDispatcher.dispatch({
    type:'TOGGLE_ITEM',
    id
  });
}
