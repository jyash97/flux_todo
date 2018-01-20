import React from 'react';

import {toggleItem,removeItem} from './Actions';

class Items extends React.Component{
  handleRemove(id){
    removeItem(id);
  }

  handleToggle(id){
    toggleItem(id);
  }

  render(){
    return(
      <div className='task-container'>
        <h1>{this.props.title}</h1>
        {
          this.props.tasks.map(task => (
            <div className='task' key={task.id}>
              <p>{task.name}</p>
              <button onClick={()=>this.handleRemove(task.id)}>Remove</button>
              <button onClick={()=>this.handleToggle(task.id)}>
                {
                  this.props.title === 'Todo' ? ('Completed') : ('Undo')
                }
              </button>
            </div>
          ))
        }
      </div>
    )
  }
}

export default Items;
