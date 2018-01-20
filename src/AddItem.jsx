import React from 'react';

import {addItem} from './Actions';

class AddItem extends React.Component{

  constructor(){
    super();
    this.state={
      text:''
    };
    this.handleText = this.handleText.bind(this);
  }

  handleText(e){
    this.setState({
      text:e.target.value
    });
  }

  handleAdd(){
    this.setState({
      text:''
    });
    addItem(this.state.text);
  }

  render(){
    return(
      <div className='add-task'>
        <input type="text" placeholder='Enter New task' onChange={this.handleText}/>
        <button onClick={()=>this.handleAdd()}>New Task +</button>
      </div>
    )
  }
}

export default AddItem;
