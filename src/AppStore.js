import EventEmitter from 'events';
import AppDispatcher from './AppDispatcher';

import uniqueId from 'lodash/uniqueId';

let items = [
  {name: 'Learn React',id: uniqueId(), done:false},
  {name: 'Learn HTML',id: uniqueId(), done:false},
  {name: 'Learn CSS',id: uniqueId(), done:true},
  {name: 'Learn Bootstrap',id: uniqueId(), done:true},
  {name: 'Learn Angular',id: uniqueId(), done:false},
  {name: 'Learn Redux',id: uniqueId(), done:false},
  {name: 'Learn Flux',id: uniqueId(), done:true},
  {name: 'Learn Node',id: uniqueId(), done:false},
  {name: 'Learn Javascript',id: uniqueId(), done:true},
];

class AppStore extends EventEmitter{
  constructor(){
    super();
    AppDispatcher.register(action => {
      if(action.type === 'ADD_NEW_ITEM') { return this.addItem(action.value) }
      if(action.type === 'REMOVE_ITEM') { return this.removeItem(action.id) }
      if(action.type === 'TOGGLE_ITEM') { return this.toggleItem(action.id) }
    });
  }

  getItems(){
    return items;
  }

  addItem(value){
    if(value){
      items.push({
        name:value,
        id:uniqueId(),
        done:false
      });
      this.emit('change');
    }
  }

  removeItem(id){
    items = items.filter(item => item.id !== id);
    this.emit('change');
  }

  toggleItem(id){
    items = items.map(item => {
      if(item.id === id)
        return {name:item.name, done:!item.done, id:item.id};
      return item;
    });
    this.emit('change');
  }

}

export default new AppStore();
